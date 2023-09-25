let tableBody = $("tbody");
let avatar = $("img");
let pagePrevious = $('.page-next')

$.ajax({
    type: "GET",
    url: "https://reqres.in/api/users",
    success: function (response) {
        tableBody.empty()
        let data = response.data;
        console.log(data)
        renderData(data)
        renderPaginations(response.total_pages)
        $($('.page-item-container')[0]).addClass('active')
    }
});


function renderData(data) {
    for (let i = 0; i < data.length; i++) {
        let row = $("<tr>")
        let idCell = $("<td>" + data[i].id + "</td>")
        let firtNameCell = $("<td>" + data[i].first_name + "</td>")
        let lastNameCell = $("<td>" + data[i].last_name + "</td>")
        let emailCell = $("<td>" + data[i].email + "</td>")
        let avatarCell = $("<td> <img src='" + data[i].avatar + "' />" + "</td>")
        row.append(idCell, firtNameCell, lastNameCell, emailCell, avatarCell)
        tableBody.append(row)
    }
}

function renderPaginations(totalPages) {
    for (let i = 1; i <= totalPages; i++) {
        let li = $("<li class='page-item page-item-container'>")
        let pagination = li.append($("<a class='page-link page-link-ct'>" + i + "</a>"))
        pagination.insertBefore(pagePrevious)
    }

    $('.page-link-ct').each((index, item) => {
        $(item).parent().click(function (e) {
            e.preventDefault();
            $('.page-item-container').each((idx, it) => {
                $(it).removeClass('active')
            })
            $(item).parent().addClass('active')
            $.ajax({
                type: "GET",
                url: "https://reqres.in/api/users" + '?page=' + Number($(item).text()),
                success: function (response) {
                    tableBody.empty()
                    let data = response.data;
                    renderData(data)
                }
            });
        })
    })
}


