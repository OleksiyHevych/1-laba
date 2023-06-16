function sort_bubl(arr){
for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
        }
    }
}
return arr
}

var arr = [1, 5, 54, 684, 683, 21, 321, 64, 654]
var tmp
var sort = sort_bubl(arr)
console.log(sort)