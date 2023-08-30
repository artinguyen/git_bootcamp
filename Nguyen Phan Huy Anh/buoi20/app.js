var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arrSoChan = [];
var arrSoLe = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arrSoChan.push(arr[i]);
    } else {
        arrSoLe.push(arr[i])
    }
}

console.log(arrSoChan)
console.log(arrSoLe)