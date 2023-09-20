var formEle = document.querySelector('.form-group');
var inputsEle = document.querySelectorAll('.input')

formEle.addEventListener('submit', e => {
    e.preventDefault();

    inputsEle.forEach(input => {
        if (input.value.trim() == '') {
            input.nextElementSibling.style.color = 'red'
            input.style.borderColor = 'red'
            input.nextElementSibling.textContent = input.getAttribute('name')+ ' ' + errors.required
        } 

        if ((input.value.trim().length > 0 && input.value.trim().length < 3) || input.value.trim().length > 10) {
            input.nextElementSibling.style.color = 'red'
            input.style.borderColor = 'yellow'
            input.nextElementSibling.textContent = input.getAttribute('name')+ ' ' + errors.length
        } 

        if (input.value.trim() !== '' && !((input.value.trim().length > 0 && input.value.trim().length < 3) || input.value.trim().length > 10)) {
            input.nextElementSibling.textContent = ''
            input.style.border = '1px solid #333'
        }

        // if (input.getAttribute('name') == 'Password' )

        
    })

})


var errors = {
    'required': 'khong duoc bo trong',
    'length': 'phai tu 3 den 10 ky tu',
    'passCharacter' : 'phai bao gom 1 ky tu dac biet',
    'passNumber': 'phai bao gom 1 so',
    'passUpper': 'phai bao gom 1 chu hoa',
    'passLower': 'phai bao gom 1 chu thuong'
}

var passCharacter = '!@#$%^&*()';

inputsEle[1].addEventListener('change', () => {
    passCharacter.split('').forEach(char => {
        if(inputsEle[1].value.includes(char)) {
            
        }
    })
})



