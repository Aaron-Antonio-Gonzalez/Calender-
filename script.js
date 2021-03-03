$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 1st 2021, 4:36:27 pm

setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)



function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

$("button").on("click", function (event) {
    event.preventDefault();

    for (let index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

