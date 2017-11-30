var app = require('./config/express')();
var rotasHome = require('./app/routes/home')(app);
var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(3000, function(){
	console.log('Servidor rodando!');
});