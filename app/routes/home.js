module.exports = function(app){
	app.get('/', function (req, res) {
	 	//res.send('Página home');
	 	res.render('home/home');
	});
}