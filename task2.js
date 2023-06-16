function checkStringContains(searchString, inputString) {
    if (inputString.includes(searchString)) {
      return true;
    } else {
      return false;
    }
  }
  
  var inputString = "Example of execution of task.";
  var searchString = "Example";
  var result = checkStringContains(searchString, inputString);
  console.log(result);