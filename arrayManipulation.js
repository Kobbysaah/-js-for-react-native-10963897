function processArray(inputArray) {
  var processedArray = [];
  for (var i = 0; i < inputArray.length; i++) {
      var number = inputArray[i];
      
      if (number % 2 === 0) {
          processedArray.push(number * number);
      } else {
          processedArray.push(number * 3);
      }
  }

  return processedArray;
}

// Example usage:
var input = [1, 2, 3, 4, 5];
var output = processArray(input);
console.log(output);
