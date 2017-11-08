var app = require('./config/express')();

app.get('/produtos', function(req, res){
	res.render('produtos/lista');
});

app.listen(3000, function(){
	console.log('Servidor rodando');
});