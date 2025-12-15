// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function Iterate() {
  for(var i = 1; i <= 10; i++) {
    var result = i + 1;
  }

  console.log(result);
}

Iterate()