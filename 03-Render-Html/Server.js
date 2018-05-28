
var http = require('http')

// for importing the file system module
var fs = require('fs')

function onRequest (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('./index.html', null, function (error, data) {
    if (error) { // if there's any error we have to execute this
      response.writeHead(404)
      response.write('File not Found!!!')
    } else { // if we dont have an error we will proceed
      response.write(data)// this data is our  html file we have attached it /reder it with response by simply using this write method here and passing this data we got from reading the file.
    }
    response.end()
  })
  // response.end() if we keep the end outside the callback function then it might execute even before the callback function is executed (reading of the file is finished), therefore we want the file to be read first rather than exiting. So, we dont want response.end outsde.
}
http.createServer(onRequest).listen(8000)

/* So, now let's think about what we can do to render this file index.html to the browser screen.
    The file is currently on our server therefore we not only have to send it to the user but also we have to grab it first on the server, that's the first step.
        Since, we can't send something that we dont have on our application.
            Therefore we need to have a way to access file system "get the file" then attach it to the response that user is gonna recieve or it sends as th response to the user.
                So we have two steps that we gotta do:
                    - Fetching it on our file system.
                        To do this we have to import the filesystem.
    Now, with this file system module what kind of tasks we can produce with our file system on server?
        - To read the file since hte file already exists and then we want to bring it in and then bring the o/p to the browser through the application.
                send it to the user/client as the the response. Now how do we read a file? we use file system object here and use "readfile()" path and all the other arguments.
                    "./" -> is to indicate that the index.html file is in the same folder.
                        Now, we dont want to add any options but what we want to do is pass "callback" and this is function which should be executed once when nodejs has finished reading this file.
                            Into this callback function we pass 2 arguments (error, data) if we are successful. Inside the file what we have to do is we have to check if there's any error in the file.

- Now, we want to render the html file as html but not as plain text. So, we have to change the 'Content-type': 'text/plain' to 'text/html'
*/
