var addressInfo = require('./model/addressinfo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.post('/api/addAddressInfo/', function(req, res) {	
		var dateNow = new Date();
		addressInfo.create({
			userid : req.body.username,
			billingInfo: req.body.billingInfo,
			shippingInfo: req.body.shippingInfo,
			creditInfo: req.body.creditInfo,
			created: dateNow
		}, function(err, info) {
			if (err){
				res.send(err);
			}else{
				res.json({"status": "success", "message": "Address added successfully", "info": info});
			}
		});	
	});

	app.post('/api/getAddressInfo/', function(req, res) {	
		addressInfo.findOne({userid: req.body.username}, function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item === null){
					res.json({"status": "failure", "message": "The address is not added."});
				}else{
					res.json({"status": "success", "message": "Address is aleady exist", "info": item});
				}
			}
		});
	});
}