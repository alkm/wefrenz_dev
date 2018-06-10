var marketInfo = require('./model/marketinfo');
module.exports = function(app) {
	// api ---------------------------------------------------------------------
	app.post('/api/addItem/', function(req, res) {
		var dateNow = new Date();
		if(req.body.id === undefined){
			marketInfo.create({
				userid: req.body.userid,
				itemName: req.body.itemName,
				category: req.body.category,
				location: req.body.location,
				contactNo: req.body.contactNo,
				productImage: req.body.imagebuffer,
				productDesc: req.body.productDesc,
				created: dateNow
			}, function(err, info) {
				if (err){
					res.json({"status": "failure", "message": "This item could not be added.", "err": err});
				}else{
					res.json({"status": "success", "message": "This item has been added to market.", "info": info});
				}
			});
		}

	});
}
	