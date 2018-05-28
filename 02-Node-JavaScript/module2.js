/*
 Now, we create an module "module2.js" which we will use for calling the whole module at once.
        we will export everything "every function, every variable" all at once.

- { } this is called JavaScript object.

        */

module.exports = {
  // so, now whatever we write in the javascript object, they will all be available to be used outside the file.

  // Creating function "myFunction"
  myFunction: function () {
    console.log('Executed & Exported !!!')
  }, // we need to put comma after this to continue executing to the next.

  // Creating myVariable
  myVariable: '\n Exported Variable!!'

}

// So, now we will export this method in app.js
