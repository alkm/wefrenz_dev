var checkOutInfo = require('./model/checkoutinfo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.post('/api/doCheckOut/', function(req, res) {	
		var dateNow = new Date();
		checkOutInfo.findOne({userid: req.body.username}, function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item === null){
					checkOutInfo.create({
						userid : req.body.username,
						checkOutItem: req.body.checkOutItem,
						created: dateNow
					}, function(err, info) {
						if (err){
							res.send(err);
						}else{
							res.json({"status": "success", "message": "Item added to cart successfully", "info": info});
						}
					});	
				}else{
					checkOutInfo.update({userid: req.body.username}, {$set: {checkOutItem: req.body.checkOutItem, created: dateNow}}, function(error, info){
						if(error){
							console.log("Error"+error);
						}else{
							res.json({"status": "success", "message": "Album updated successfully", "info": info});
						}
					});	
				}
			}
		});
	});

	app.post('/api/fetchCheckOut/', function(req, res) {	
		checkOutInfo.findOne({userid: req.body.username}, function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item === null){
					res.json({"status": "success", "message": "There is no item in your cart, please add one."});
				}else{
					res.json({"status": "success", "message": "your cart items", "info": item});
				}
			}
		});
	});
}