
// Primitive Datatype

// 7 types : String , Boolean, Number, Null, Undefined, Symbol, BigInt. These are called by value. Can be called

const isLoggedIn = false
const outsideTemp = null   /* gives temperature */

// Non primitive Datatype or Reference type

// Arrays, Objects(very imp), Funtions. When we restuen these then their output type is always object.

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log( id === anotherId);  /*false*/

const myFunction = function() {

}
