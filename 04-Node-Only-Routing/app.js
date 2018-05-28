var url = require('url')
var fs = require('fs')

// creating function to ccall the render.html which will take path and response as arguments.
function renderHTML (path, response) {
  fs.readFile(path, null, function (error, data) {
    if (error) {
      response.writeHead(404)
      response.write('File not Found!!')
    } else {
      response.write(data)
    }
    response.end()
  })
}

module.exports = {

  // creating handlerequest function which will handle request and response
  handleRequest: function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}) // setting up header with "writeHead"

    var path = url.parse(request.url).pathname
    switch (path) {
      case '/': // in this case we want to show the index.html file
        renderHTML('./index.html', response) // specifying path to index.html by calling it through renderHTML
        break
      case '/login':
        renderHTML('./login.html', response)
        break
      default:
        response.writeHead(404)
        response.write('Page Not Found / Route not defined')
        response.end()
    }
  }

}

/* So, in this Porject we will see how we can target different routes, so different URL's on our page the user might visit.
- We have to Html pages "index.html and login.html" where the users can basically route to.

**** what we are gonna do here in this app is ****
We want to create a separate javascript files, where we can handle the requests(where we can do the routing).

- Now in this file we will be exporting a function which should be useable in the server.js becos we want to pass the request from my server javascript file,
    from the "createServer" function. So, we are gonna put the function we are executing here, upon each request.
        We want to define here in my app.js file.

- We can use the module.exports to export the function we want to use and will define javascript object, which should be exported.

-So, now we should check somehow which url the user entered. So which route I should take and which html file should be rendered.

- I want to have two routes.
    - The index route(which will just be a slsh at the end of our URL, so the route directory).
    - The login route ( when the user types slash login).

- So, in order to get path we're onlt interested in the path of our URL, not the localhost part of the port, not any parameters just path.
        we can use another core module in Node.js called "url" and we aquire it by require('url') and this will give us some helper functions to work with url.

- So what we are gonna do here we are gonna store the path in the variable path and then we will call the parse function on our url module & we have to pass a String into this parse URL.
         or in this parse method here, and this should be the url i get from the request. We can access the URL property on my request object here and pass this into my url parse method here.
            Then after I get an object with several information blocks or with some info on this url.
                Now, we have to set the pathname which would just be either slash or slash login or whatever the user entered as route.
- Then i can create a switch statement here, when i say switch the path and then we get the case that is just a slash "/" through the root directory.
    Now in this case we want to show the index.html file, now I can do this but again reading it in with my files system module and then outputing it in the response and so on..
        And We can do this, in this way also do it the same when we're having the login route and i'm rendering the login.html file.

- Therefore, we will create a new function to do this, which we will call render.html, which will take a path and response as arguments.
    Inside this function we're just gonna use the code for file system where it can read the file and o/p the data as it is. if there are any errors it's gonna pop up "file not found".
        So, backhere in the "switch" statement we can say, ok if we are accessing the root directory i want to renderHTML and here i want to well, show the "index.html" file.
            So, we are specifying the path to this, with the ./ at the begining. We also have to pass the response ofcourse.
                Then we "break" and add next case: which would be login.
                    Now login: under this case we want to also render in the html file but it will be the "login.html" file.

- Then we will also have "default" case if the user enters anything else then i want to show, that pageis not found.
    So, then we will change the Head to say 404, 404 page not found. Then we will output a response where it should say the route not defined.
        Now, we have to end the response becos when we're rendering the html. we're doing it in the renderHTML function but we're not doing it anywhere therefore we have to do it here.

- We need to implement one more function "handleRequests" but in our server.js it's not using that. So first I have to import my module here. So, I can do this by requiring ./ app without the file extension.
    and then in server.js we can just call app and request, without parantheses. This is how we create this.
*/
