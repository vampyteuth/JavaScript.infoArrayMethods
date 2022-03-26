//7Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)
// so items are john pete mary the variables

// Another way to think of map as a transformation method, and you pass it a 
// function that does the transformation, 
// fits better if "map" is stuck in your head as a object-like key-value mapping of things :p

alert( names ); // John, Pete, Mary