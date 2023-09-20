var count = 0;

var inputCau1 = document.querySelectorAll('.cau1')
var inputCau2 = document.querySelectorAll('.cau2')
var inputCau3 = document.querySelector('.cau3')
var formEle = document.querySelector('form')
var result = document.querySelector('h2')

var answers = {
    "cau1": 2,
    "cau2": 4,
    "cau3": 36
}

formEle.addEventListener('submit', (e) => {
    e.preventDefault();

    for (var i = 0; i < inputCau1.length; i++) {
        if (inputCau1[i].checked && Number(inputCau1[i].value) == answers.cau1) { 
            count++;
            break;
        }
    }

    for (var i = 0; i < inputCau2.length; i++) {
        if (inputCau2[i].checked && Number(inputCau2[i].value) == answers.cau2) { 
            count++;
            break;
        }
    }

    if (inputCau3.value != '' && Number(inputCau3.value) == 36) {
        count++
    }

    result.textContent = 'So cau tra loi dung la ' + count + '/' + Object.keys(answers).length;
    count = 0
})



