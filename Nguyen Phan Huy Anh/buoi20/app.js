var arr = [1, 2, 3, 4, 5, 11, 6, 7, 8, 9, 10];

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


// Tinh tong

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Tong cua mang la " + sum);

// Tim so lon nhat trong mang


var x;
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
}

console.log("So lon nhat la " + arr[arr.length - 1])

// TIm so nho nhat

console.log("So nho nhat la " + arr[0])


//