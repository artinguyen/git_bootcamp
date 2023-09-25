var todos = [{}, {}]

var formEle = document.querySelector('form')
var buttonEle = document.querySelector('button')
var inputEle = document.querySelector('input')
var todoContainer = document.querySelector('ul')

formEle.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputEle.value.trim() !== '') {
        var todoItemEle = document.createElement('li')
        todoItemEle.textContent = inputEle.value
        var deleteIcon = document.createElement('span')
        deleteIcon.textContent = 'X'
        todoContainer.append(todoItemEle)
        todoContainer.append(deleteIcon)
        inputEle.value = ''

        deleteIcon.addEventListener('click', e => {
            e.target.previousSibling.remove()
            e.target.remove()
        })
    }
})

