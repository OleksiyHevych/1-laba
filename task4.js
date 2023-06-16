const prompt = require("prompt-sync")({ sigint: true });
function binary_search(arr, left, right) {
    var x = Number(prompt("Searching element "))
    while (left < right - 1) {
        var mid = Math.trunc((left + right) / 2)
        if (x < arr[mid]) {
            right = mid;
        }
        else {
            left = mid;
        }
    }
    if (arr[left] == x) {
        console.log('Element ' + x + ' found under the index ' + left)
    }
    else {
        console.log('Element ' + x + ' not found')
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var left = 0
var right = arr.length - 1
var result = binary_search(arr,left,right)