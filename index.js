// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var easyrtc = require("easyrtc");           // EasyRTC external module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express();
httpApp.use(express.static(__dirname + "/dist/"));

// Start Express http server on port 8080
var webServer = http.createServer(httpApp).listen(3000);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer);

// Start EasyRTC server
var easyrtcServer = easyrtc.listen(httpApp, socketServer);