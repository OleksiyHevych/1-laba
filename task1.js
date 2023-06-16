function splitStringIntoWords(str) {
    var wordsArray = str.split(/[\W\s]+/);
    return wordsArray;
  }
  
  var myString = "Hello world and bogdan";
  var words = splitStringIntoWords(myString);
  console.log(words);
  