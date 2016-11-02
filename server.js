/**
 * Created by pingfengafei on 16/8/25.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
	console.log(req.body);
	res.json({'name': '1'})

});

app.post('/', function (req, res) {
	console.log(req.body);
	console.log(req.method);
	console.log(req.headers);
	res.send('received'); //如果没有send,程序会一直处在(sending中)
})
app.listen(3000, ()=> {
	console.log('server is running!');
});
