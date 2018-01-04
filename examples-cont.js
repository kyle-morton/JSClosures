//Timeout

function foo () {
    var bar = 'bar'
    setTimeout(function () {
      console.log(bar)
    }, 1000)
  }
  
  foo() // bar

  //loops
  
  for (var i = 1; i <= 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i)
      }, i * 1000)
    })(i)
  }

  for (let i = 1; i <= 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i)
      }, i * 1000)
    })(i)
  }