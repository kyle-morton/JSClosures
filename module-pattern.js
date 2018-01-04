/*
    One of these well-implemented patterns is the module pattern, this pattern allows you to emulate: private, public and privileged members.
*/

var Module = (function () {
    var foo = 'foo' // Private Property
  
    function addToFoo (bam) { // Private Method
      foo = bam
      return foo
    }
  
    var publicInterface = {
      bar: function () { // Public Method
        return 'bar'
      },
      bam: function () { // Public Method
        return addToFoo('bam') // Invoking the private method
      }
    }
  
    return publicInterface // Object will contain public methods
  })()
  
  Module.bar() // bar
  Module.bam() // bam