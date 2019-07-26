const global_initialPercent = 0;
let global_currentPercent = global_initialPercent;


function bingo() {
    $("div#div-bingo").text("BINGO!");

}

function handleButtoneOne() {
    global_currentPercent = global_currentPercent + 1;
    console.log("Нажал кнопу +1%");
    console.log("Текущий %:" + global_currentPercent);

    if (global_currentPercent > 100) {
        global_currentPercent = 100
        $("button").prop("disabled", true);
        bingo();
    }

    $("#my-progressbar").css('color', 'green')

    $("#my-progressbar").width(String(global_currentPercent) + "%");
    $("#my-progressbar").text(global_currentPercent + '%');


};


function handleButtoneThree() {
    global_currentPercent = global_currentPercent + 3;
    console.log("Нажал кнопу +3%")
    console.log("Текущий %:" + global_currentPercent);

    if (global_currentPercent > 100) {
        global_currentPercent = 100
        $("button").prop("disabled", true);
        bingo();
    }
    $("#my-progressbar").css('color', 'yellow')

    $("#my-progressbar").width(String(global_currentPercent) + "%");
    $("#my-progressbar").text(global_currentPercent + '%');

};

function handleButtoneSeven() {
    global_currentPercent = global_currentPercent + 7;
    console.log("Нажал кнопу +7%")
    console.log("Текущий %:" + global_currentPercent);

    if (global_currentPercent > 100) {
        global_currentPercent = 100
        $("button").prop("disabled", true);
        bingo();
    }

    $("#my-progressbar").css('color', 'red')

    $("#my-progressbar").css('width', String(global_currentPercent) + "%");
    $("#my-progressbar").text(global_currentPercent + '%');


};


function init() {

    console.log("скрипт подгрузился");

    $("button#btnOne").click(handleButtoneOne)
    $("button#btnThree").click(handleButtoneThree)
    $("button#btnSeven").click(handleButtoneSeven)

};


$(document).ready(init);