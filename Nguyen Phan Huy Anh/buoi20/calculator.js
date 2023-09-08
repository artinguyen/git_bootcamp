var keyContentEles = document.querySelectorAll("#key");
var keyCalculateEles = document.querySelectorAll('#keyFunc');
var euqalBtn = document.querySelector('#keyFuncEqal');
var curResult = document.querySelector('.curResult');
var prevResult = document.querySelector('.prevResult');
var keyFuncDelete = document.querySelector('#keyFuncDelete')
var keyContentValue;

function showNum() {
    for (var i = 0; i < keyContentEles.length; i++) {
        keyContentEles[i].addEventListener('click', (e) => {
            keyContentValue = Number(e.target.textContent);
            curResult.innerText += keyContentValue;
        })
    }
}

function showCal() {
    for (var i = 0; i < keyCalculateEles.length; i++) {
        keyCalculateEles[i].addEventListener('click', (e) => {
            curResult.innerText += e.target.textContent;
        })
    }
}
showNum()
showCal()

var arrCal = ["+", "−", "÷", "×"];

euqalBtn.addEventListener('click', (e) => {
    var strResult = curResult.textContent;
    for (var i = 0; i < arrCal.length; i++) {
        if (strResult.includes(arrCal[i])) {
            strResult = strResult.split(arrCal[i]);
            var result = calculate[arrCal[i]](Number(strResult[0]), Number(strResult[1]));
            curResult.innerText = result
        }
    }
})

var calculate = {
    '+': function(x, y) {
        return x + y;
    },
    '−': function(x, y) {
        return x - y;
    },
    '÷': function(x, y) {
        return x/y;
    },
    '×': function(x, y) {
        return x*y;
    },
}

keyFuncDelete.addEventListener('click', () => {
    curResult.innerText = "";
})
