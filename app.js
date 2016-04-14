var express =require("express");
var app = express();

// 首页请求
app.get('/', function(req, res){
	res.send('hello world');
});

// get请求
app.get('/',function(req,res){
	res.send('got a get require')
});

// post请求
app.post('/user',function(req,res){
	res.send('got a post require at /user')
});
// 静态文件
app.use( '/static',express.static('static'));

// 404页面
app.use(function(req,res,next){
	res.status(404).send('sorry cant find that!');
})

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('example app listening at http://%s:%s', host, port);
});