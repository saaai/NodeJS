/* From Academind Node.js Basics Tutorial 
Creating Server Side Response
We are writing our own Server, How does this works?
Node Js allows us to create server functionalities like ex: that it should listen to certain port or a certain domain.
All requests coming in should be handled in a certain way and that's what exactly we will specify in server file which we will see in this file, 
	that will tell nodejs to listen to incoming request and do something upon that request.

So, NodeJs will run this file not only once but this will be runned in a loop where NodeJS will have to listen to request.
*/

//First we need to import /  require http module "http module is the core module of node js"
var http = require('http');

//Creating a new function which calls "onRequest" method when the server is accessed
function onRequest(request, response)//this function is taking 2 arguments "the request and the response", these arguments are automatically passed into this function by nodejs when "createServer(onrequest) funtion is kind of executed when request comes in"
{
/* we we are not doing anything with request here, but we are changing it to response here.
	So, we tell nodejs here which response to begin with. So, therefore we will call the "writeHead()" the header of our response and we will give the status code as "ok 200" and 
		then we pass javascript object as the second argument the reason this is here which is "Content-Type':'text/plain" 
		*/
response.writeHead(200, {'Content-Type':'text/plain'});
response.write('Hello World!!');//we are calling the write function to just render some plain text in the browser
response.write('\n Hello Gopal!!! Cool Buddy :)');
response.end();//now we are calling response end to make clear that im done with handling response and that it can output to the person who sent the request.
}

/*now requiring this http module which gives access to createServer() method here and 
	we add another method here to listen(this tells our server which we create here to listen to the port no. 8000) 
So, all reuest coming to port 8000 should be handled by the server. 
Now, currently server is doing nothing here inorder to to make it do something we should specify a method here "onRequest" method  which should handle these requests 
*/
http.createServer(onRequest).listen(8000);



//to run this goto terminal and run this as "node Server.js" and in browser type "localhost:8000" because we gave the port no. to listen to as 8000.