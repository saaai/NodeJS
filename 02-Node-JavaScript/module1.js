/* Now, we are creating a function "myfunction"

- To make the function and var accessible outside this file we should use "modules" object,
    which will automatically  bound to this file so to say. Each file will have its own module object which can use in other files.
        To export certain parts of this files that available in other files we need to use "module.exports" in the bottom of the file.

*/

function myFunction () {
  //  to log from myFunction into app.js
  console.log('Function was called from module1.js')
}

//  we are creating a variable called myString
var myString = '\n Hello Sai Gopal'

//  To export certain parts of this file to other files we are using this "module.exports.myFunction" and create/bind it to an object "myFunction".
module.exports.myFunction = myFunction //  myFunction here is an object
// we are binding it and making it available for other files to access it.

//  we are doing the same thing for myString var also, making it accessible from other files by exporting it as a module.

module.exports.myString = myString
