/* First we will discuss the concept of modules in NodeJs with pure JavaScript.

- To create a nodejs server we need to import http module.
    Now, this http module is a core module of NodeJs that's why we dont have to provide any path here. 
        But this is a core module which will be automatically lowered by nodejs
            using this "require ('http')" we are importing a "require" statement and binding it to a vairable named "http".
                and through that http variable we will be able to access the http module and everything that is exported in this module.
                    So, all the functions and variables  which this module exported to our application to work with.

- Therefore, we are able to call the "http.createServer()" function which is basically an exported function in this http module.

- Can we write our "own modules"? yes we can write our own modules, because we want to structure our apps in such that we dont want to put all the code in one single file,
    but instead we will split it into several files. Such structure where will split our code is much more easy to work with.
        Now, we create a own module "module1.js"

- We can import our own module which we created by typing  "require('give the fiel path here'), we dont have to type .js extension while we are exporting module.
    In this module1.js we are exporting each and everything separately which is a tedious process.

- Now, we create an module "module2.js" which we will use for calling the whole module at once.
        we will export everything "every function, every variable" all at once.

- Now, we are trying to export the module2.js entirely into this file.
    So, this is working exporting all at once.

- So, this is how we use modules and how we can structure our applications with several files and import and export contents of these files. 

- We often use not only in nodejs or in javascript also these are called "Anonymous Functions".
    Here, in app.js when we are saying execute onRequest function in "createServer(onRequest)" but we dont have () here we are just setting the reference function which should be executed when server is created.
         we could so, use that function code entirely in  the "createServer()" method directly instead of creating a function named "onRequest" and then calling it from the function.
            We are not creating a function on it's own assigning it a name and then telling this function(createServer) here to use that name(onRequest).
                But instead we can create the function at the place where we need it, we do it a lot and we see it a lot in angular 2.
                    This is called "Anonymous Function".

- This is just a concept of never creating functions in places where we need them instead of creating them assigning them a name(onRequest) and so on....
        which we can do if we use the function at several places but in the events where we dont use the same function anywhere we can write the code in the method directly instead of creating a separate function name and calling it here. 
*/

var http = require ('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response)//this function is taking 2 arguments "the request and the response", these arguments are automatically passed into this function by nodejs when "createServer(onrequest) funtion is kind of executed when request comes in"
{
    /* we we are not doing anything with request here, but we are changing it to response here.
	So, we tell nodejs here which response to begin with. So, therefore we will call the "writeHead()" the header of our response and we will give the status code as "ok 200" and 
		then we pass javascript object as the second argument the reason this is here which is "Content-Type':'text/plain" 
		*/
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World!!');//we are calling the write function to just render some plain text in the browser
    response.write('\n Hello Gopal!!! Cool Buddy :)');
    
    //executing from module1.js
    response.write(module1.myString); // we are tring to export the variable created in module1.js module and printing it here.
    module1.myFunction();

    //executing from module2.js
    response.write(module2.myVariable);// we are tring to export the variable created in module2.js module and printing it here.
    module2.myFunction();

    response.end();//now we are calling response end to make clear that im done with handling response and that it can output to the person who sent the request.
}

/*now requiring this http module which gives access to createServer() method here and 
	we add another method here to listen(this tells our server which we create here to listen to the port no. 8000) 
So, all reuest coming to port 8000 should be handled by the server. 
Now, currently server is doing nothing here inorder to to make it do something we should specify a method here "onRequest" method  which should handle these requests 
*/
http.createServer(onRequest).listen(8000);



//to run this goto terminal and run this as "node Server.js" and in browser type "localhost:8000" because we gave the port no. to listen to as 8000.