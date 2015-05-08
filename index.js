var express = require('express');

var app = express();

var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	var titles = 
		{
			1:	{reply: 1, title: '請問新手該如何入門？', author: 'Roy', time: '2015-05-01'},
			2:	{reply: 10, title: '請問新手該如何入門？', author: 'Roy', time: '2015-05-01'},
			3:	{reply: 50, title: '請問新手該如何入門？', author: 'Roy', time: '2015-05-01'},
			4:	{reply: 100, title: '請問新手該如何入門？', author: 'Roy', time: '2015-05-01'},
			5:	{reply: 1000, title: '請問新手該如何入門？', author: 'Roy', time: '2015-05-01'}
		}
	res.render('home', {titles: titles});
});

app.set('port', process.env.PORT || 3000);
// 404 catch-all handler (middleware)
app.use(function(req, res){
	res.type('text/plain')
	res.status(404);
	res.send('404 - Not Found');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	res.type('text/plain')
	res.status(500);
	res.send('500 - Server error');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
