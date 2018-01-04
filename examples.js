//JS Closures
//https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach

//EX 1

var initialBalance = 300 // Global Scope

function withdraw (amount) {
  /**
   * Local Scope
   * Code here has access to anything declared in the global scope
   */
  var balance = parseInt(initialBalance) - parseInt(amount)

  const actualBalance = (function () {
    const TRANSACTIONCOST = 35
    return balance - TRANSACTIONCOST /**
     * Accesses balance variable from the lexical scope
     */
  })() // Immediately Invoked Function expression. IIFE

  // console.log(TRANSACTIONCOST) // ReferenceError: Can't find variable: TRANSACTIONCOST
  return actualBalance
}

//EX 2 -> invoke inner FN outside of it's enclosing fn, yet maintaining access to variables in its enclosing function creates Closure.

function person () {
    var name = 'Paul'  // Local variable
  
    var actions = {
      speak: function () {
      //  new function scope
        console.log('My name is ', name) /**
        * Accessing the name variable from the outer function scope (lexical scope)
        */
      }
    } // actions object with a function
  
    return actions /**
    * We return the actions object
    * We then can invoke the speak function outside this scope
    */
  }
  
  person().speak() // Inner function invoked outside its lexical Scope

  /*
    A Closure allows us to expose a public interface while at the same time hiding and preserving execution context from the outside scope.
  */

