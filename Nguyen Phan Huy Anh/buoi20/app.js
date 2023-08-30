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

console.log("Mang so chan " , arrSoChan)
console.log("Mang so le ", arrSoLe)


// Tinh tong

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Tong cua mang la " + sum);

// Tim so lon nhat trong mang

var x;

// Sap xep mang theo thu tu tang dan

function sapXepTangDan(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
    return array;
}

sapXepTangDan(arr);


console.log("So lon nhat la " + arr[arr.length - 1])

// TIm so nho nhat

console.log("So nho nhat la " + arr[0])


// Bang cuu chuong

for (var x = 1; x <= 10; x++) {
    for (var y = 1; y <= 10; y++) {
        console.log(x + ' x ' + y + ' = ' + x * y);
    }
}

// Tim so lon nhat giua 2 mang

var arr1 = [1, 2, 3];
var arr2 = [5, 6, 7, 8];

var maxArr1 = sapXepTangDan(arr1)[arr1.length - 1]
var maxArr2 = sapXepTangDan(arr2)[arr2.length - 1]

function soSanh(number1, number2) {
    if (number1 > number2) {
        return number1
    } else if (number1 < number2) {
        return number2
    } else {
        return number1;
    }
}

console.log("So lon nhat cua 2 mang la " + soSanh(maxArr1, maxArr2))
