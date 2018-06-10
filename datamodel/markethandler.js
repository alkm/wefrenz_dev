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
				price: req.body.price,
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

    app.post('/api/fetchMarketItems/', function(req, res) {	
		var relevance = req.body.relevance;
		var sort = '-created';
		if(relevance !== ''){
			sort = relevance;
		}
		var skip = req.body.skip;
		var limit = req.body.limit;
        marketInfo.find()
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec(function(err, infos) {
            marketInfo.count().exec(function(err, count) {
                if (err) return next(err)
                res.send({
                    "infos": infos,
                    "total": count
                })
            })
        })
	});
}
	