function findMaxDate(dateArray) {
    var maxDate = dateArray.reduce(function (a, b) {
      return a > b ? a : b;
    });
    return maxDate;
  }
  
  var dates = ["2022-01-01", "2023-03-18", "2021-12-31"];
  var maxDate = findMaxDate(dates);
  console.log(maxDate);
  