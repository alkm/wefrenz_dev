var addressInfo = require('./model/addresinfo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.post('/api/addAddressInfo/', function(req, res) {	
		var dateNow = new Date();
		addressInfo.create({
			userid : req.body.username,
			billingInfo: req.body.billingInfo,
			shippingInfo: req.body.shippingInfo,
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
					res.json({"status": "no address", "message": "The address is not added."});
				}else{
					res.json({"status": "success", "message": "Address is aleady there1", "info": item});
				}
			}
		});
	});
}