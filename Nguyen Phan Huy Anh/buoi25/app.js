
$("#form").submit(function (e) {
    e.preventDefault();
    checkRequired('username');
    checkRequired('password')
});


function checkRequired(className) {
    if ($(`.${className}`).val() == '') {
        if ($(`.${className}`).next().is('p')) {
            return;
        } else {
            $(`.${className}`).after(`<p class="err">${className.toUpperCase()} khong duoc bo trong</p>`)
            $(`.${className}`).css('border', '1px solid red')
        }
    } else {
        $(`.${className}`).next().remove()
        $(`.${className}`).css('border', '1px solid #333')
    }
}
const data = [];

$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function (response) {
        console.log(response)
    }
});
