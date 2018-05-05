var express = require('express');
var serveStatic = require('serve-static')
var path = require('path');
//var app = express()						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
//var port = process.env.PORT || 3000; 
var database = require('./config/database'); 			// load the database config
var routes = require('routes');
global.nodeEventer = require('node-eventer').init();
var bodyParser = require('body-parser');
// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();
//var fs = require('fs');
var easyrtc = require("easyrtc"); // EasyRTC external module
//var https = require('https');
var app = express();

var chatBuddiesConnected = [];
var chatClients = {};
var chatBuddies = [];
// list of socket ids
var clients = [];
var usedSockets = {};

//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // support encoded bodies

var session = require('express-session');
var ssn ;
app.use(session({secret:'0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK', resave: false, saveUninitialized: true}));

/*var clientSessions = require("client-sessions");
app.use(clientSessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // set this to a long random string!
}));
*/

// configuration ===============================================================
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io
//mongoose.connect(database.url, { useMongoClient: true }, function(err){
mongoose.connect(database.url, function(err){	
	mongoose.Promise = global.Promise;
	if(err){
		console.log(err);
	} else{
		console.log("Connected to mongodb!");
	}
})
	
	//app.listen(3000)
	//var httpsOptions = {};

	var https = require('https');
	var http = require('http');
	var fs = require('fs');
	var port = 3000;

	/*app.get('/', (req, res) => {
	  res.send('WORKING!')
	})*/

	app.use(serveStatic(__dirname + '/dist/'));
	
	//app.use(serveStatic(__dirname + '/dynamictable/'));
	//Setting the virtual path 'resources' as I don't want to show user the actual path of the images
	app.use('/data/', express.static(__dirname + '/media/images/coverpics/')); 
	app.use('/default/', express.static(__dirname + '/dist/assets/images/')); 
	app.use('/emotion/', express.static(__dirname + '/dist/assets/images/smileys/'));
	app.use('/video/', express.static(__dirname + '/media/videos/myvideos/'));
	app.use('/audio/', express.static(__dirname + '/media/audios/myaudios/'));
	app.use('/music/', express.static(__dirname + '/media/audios/feedaudios/original/'));
	app.use('/photo/', express.static(__dirname + '/media/photos/myphotos/'));

	var httpsOptions = {
	  key: fs.readFileSync('./private.key'),
	  cert: fs.readFileSync('./certificate.crt')
	}
	/*const server = https.createServer(httpsOptions, app).listen(port, () => {
	  	console.log('server running at ' + port)

	});*/
	//var server = https.createServer(httpsOptions, app).listen(port);
	var server = http.createServer(app).listen(port);
	var io = require("socket.io").listen(server);
	var socketServer = io.listen(server, {"log level":1});
	// Start EasyRTC server
	var rtc = easyrtc.listen(app, socketServer);

	/*function setUpSSLServer() {
	    fs.readFile("./key.pem", "utf8", function(err, data) {
	        fs.readFile("./cert.pem", "utf8", function(err, _data) {
		        httpsOptions = {
				  key: data,
				  cert: _data
				}
				server = https.createServer(httpsOptions, app);
				io = require("socket.io").listen(server);
				socketServer = io.listen(server, {"log level":1});
				// Start EasyRTC server
				rtc = easyrtc.listen(app, socketServer);
				
				io.sockets.on('connection', function(socket){//Similar to document.ready when the socket initialized
					socket.on('ON_SOCKET_INIT', function(data){
						console.log(data);
					})
				})
	    	});
	    });
	}
	setUpSSLServer();*/


	
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With, authorization, Content-Type,Cache-Control");
   if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  } else {
    return next();
  }
});

// routes ======================================================================
	require('./datamodel/userinfohandler.js')(app);
	require('./datamodel/mediauploader.js')(app);
    require('./datamodel/GeneralDataSet.js')(app);
    require('./datamodel/profilehandler.js')(app);
	require('./datamodel/friendshandler.js')(app);
	require('./datamodel/searchhandler.js')(app);
	require('./datamodel/chathandler.js')(app);
	require('./datamodel/videohandler.js')(app);
	require('./datamodel/audiohandler.js')(app);
	require('./datamodel/photoshandler.js')(app);
	require('./datamodel/feedhandler.js')(app);
	require('./datamodel/commenthandler.js')(app);
	var easyRTCHandler = require('./datamodel/shared/easyrtchandler');
	//Handling the chat on socket
	io.sockets.on('connection', function(socket){//Similar to document.ready when the socket initialized
		socket.on('ON_SOCKET_INIT', function(data){
			socket.userid = data.userid;
			handleActiveUsers(socket, data.userid, data.easyrtcid);
		});
		socket.on('ON_SEND_MSG', function(data){
			//Emitting the info back to client 
			//io.sockets.emit("ON_NEW_MSG", data);//To all users connected in socket
			
			var receiverSocket = usedSockets[data.chatid];
			console.log('dreceiverSocket'+receiverSocket+'msg'+data.msg);
			try{
				receiverSocket.emit("ON_NEW_MSG", data);//To specific user to whom message is sent
			}catch(err){
				console.log('socket error');
			}
		});


		socket.on('disconnect', function(data){
			if(socket.userid !== undefined){
				handleClientDisconnected(socket, socket.userid);
				console.log(socket.userid+' is disconnected');
			}
			
			
			//Set user appearance status in db
			/*userInfo.update({_id : socket.userid}, { $set: {appearance: "offline"}}, function(error, docs){
				if(error){
					console.log("Error"+error);
				}else{
					io.sockets.emit("UPDATE_CHAT_LIST", "");
				}
			});*/
		});
	});

	function handleActiveUsers(socket, userid, easyrtcid){
		console.log('easyrtcid'+easyrtcid);
		//Saving all the users connected in socket
		for(var i = 0; i < chatBuddiesConnected.length ; i++){
			if(userid === chatBuddiesConnected[i]){
				console.log("Looks like you are already connected");
				return;
			}
		}
		
		chatBuddiesConnected.push(userid);
		chatClients[socket.userid] = userid;
		usedSockets[userid] = socket;

		var obj = {};
		obj.email = userid;
		obj.easyrtcid = easyrtcid;
		easyRTCHandler.updateEasyRTCIdToDB(obj);

		var _obj = {};
		_obj.email = userid;
		_obj.appearance = "online";
		console.log('_obj'+_obj);
		easyRTCHandler.updateSocketStatusToDB(_obj);
		//chatHandler.updateEasyRTCIdToDB(obj);
	}
	function handleClientDisconnected(socket, userid){
		console.log("disconnected");
		//chatBuddiesConnected.splice(0,chatClients[socket.userid]); 
		var indx = chatBuddiesConnected.indexOf(chatClients[socket.userid]);
		if(indx !== -1){
			chatBuddiesConnected.splice(indx, 1);
			delete usedSockets[userid];
			delete chatClients[socket.userid];
			var obj = {};
			obj.email = userid;
			obj.easyrtcid = '';
			easyRTCHandler.updateEasyRTCIdToDB(obj);

			var _obj = {};
			_obj.email = userid;
			_obj.appearance = "offline";
			easyRTCHandler.updateSocketStatusToDB(_obj);
		}
	}


