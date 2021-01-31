var http = require('http');
const express = require("express"); 
const mysql = require("mysql2");
const crypto = require('crypto');
//const requestP = require('request-promise');
//const cheerio = require("cheerio");
const fs = require('fs');
var cors = require('cors')
var app = express()
 
app.use(cors())
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var forbiddenCharacters = ['"',"'",'\\','/',';','[',']','(',')','!','@','#','$','%','^','&','*','<','>'];

const connection = mysql.createConnection({
	charset:'utf8',
	host: "localhost",
	user: "root",
	database: "",
	password: "root"
});
function databaseRequest(request,res = ""){
	return new Promise(async (resolve, reject) => {
		connection.query(request, function(err,response) {
			if(err) {
				reject(err)
			}
			else{	
				resolve(response);
			}
		})
	});
}
function Initialise(){
	databaseRequest("create database if not exists advokat_db").then(function(){
		databaseRequest("use advokat_db").then(function(response){
			databaseRequest("set session wait_timeout = 604800").then(function(response){
				databaseRequest("create table if not exists userList (login text,password text,email text,accessKey text)").then(function(response){
					databaseRequest("create table if not exists lawyersList (login text,password text,accessKey text)").then(function(response){
						databaseRequest("create table if not exists chatLists (login text,targetLogin text,accessKey text)").then(function(response){
							console.log('Подключение установлено');
						}).catch(function(err){
							console.log(33,err);
						})
					}).catch(function(err){
						console.log(33,err);
					})
				}).catch(function(err){
					console.log(33,err);
				})
			}).catch(function(err){
				console.log(35,err);
			})
		}).catch(function(err){
			console.log(39,err);
		})
	}).catch(function(err){
		console.log(42,err);
	})
}
Initialise();
app.use(express.static(__dirname ));
app.get('/', function(req, res){
  res.status(200).send('<h1>Подключено</h1>').end();
});
app.post('/userRegister',function(req,res){
	req.on('data',function(chunk){		
		databaseRequest("select login from userList where login ='"+JSON.parse(chunk).login+"'").then(function(response){
			if(response == ''){
				if(JSON.parse(chunk).password != ''){
					let accessKey = crypto.createHmac('sha1', JSON.parse(chunk).login).update(JSON.parse(chunk).login).digest('hex');
					let password = crypto.createHmac('sha1', JSON.parse(chunk).password).update(JSON.parse(chunk).password).digest('hex');
					let email = JSON.parse(chunk).email;
					databaseRequest("insert userList (login,password,email,accessKey) values('"+JSON.parse(chunk).login+"','"+password+"','"+email+"','"+accessKey+"')").then(function(){
						res.status(200).send(accessKey).end();
					});	
				}
				else  res.status(500).send("password is empty").end();					
			}
			else res.status(500).send("user already exists").end();			
		}).catch(function(err){
			res.status(500).send('database connection error').end();
		})
	})	
})

let rooms = ['Lobby'];

io.on("connection", (socket) => {
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });
});

server.listen(3001, () => console.log("server running on port:" + 3001));
module.exports.app = app;