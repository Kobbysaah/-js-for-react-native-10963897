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

function formatArrayStrings(stringsArray, numbersArray) {
    if (stringsArray.length !== numbersArray.length) {
        console.error("Arrays must have the same length.");
        return;
    }

    for (var i = 0; i < stringsArray.length; i++) {
        var str = stringsArray[i];
        var num = numbersArray[i];

        if (num % 2 === 0) {
            stringsArray[i] = str.toUpperCase();
        } else {
            stringsArray[i] = str.toLowerCase();
        }
    }
    return stringsArray;
}

// Example usage:
//1
var input = [1, 2, 3, 4, 5];
var output = processArray(input);
console.log(output);

//2
var strings = ["Hello", "World", "JavaScript", "Obiaabiowa"	];
var numbers = [1, 2, 3,4];
var formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings);
