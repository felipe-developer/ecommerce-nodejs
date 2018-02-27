module.exports = function(app){
	app.get('/home', function (req, res) {
	 	var connection = app.infra.connectionFactory();
	 	var produtos = new app.infra.ProdutoDao(connection);

	 	connection.list(function(error, results, fields){
	 		res.render('home/index',{livros:results});
	 	});

	 	connection.end();
	});
}