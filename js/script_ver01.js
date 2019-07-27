const global_initialPercent = 0;
let global_currentPercent = global_initialPercent;


function bingo() {
    $("div#div-bingo").text("BINGO!");

}

function handleButton(buttonNum, progress) {
    global_currentPercent = global_currentPercent + buttonNum;

    if (global_currentPercent > 100) {
        global_currentPercent = 100
        $("button").prop("disabled", true);
        bingo();
    }

    $("#my-progressbar").css('width', String(global_currentPercent) + "%");
    $("#my-progressbar").text(global_currentPercent + '%');

    if (buttonNum == 1) {
        console.log("Нажал кнопу +1% в новой функции")
        $("#my-progressbar").css('color', 'green')

    }
    ;
    if (buttonNum == 3) {
        console.log("Нажал кнопу +3% в новой функции")
        $("#my-progressbar").css('color', 'yellow')
    }
    ;
    if (buttonNum == 7) {
        console.log("Нажал кнопу +7% в новой функции")
        $("#my-progressbar").css('color', 'red')
    }
    ;
};


function init() {

    console.log("скрипт подгрузился");

    $("button#btnOne").click(function () {
        handleButton(1)
    });
    $("button#btnThree").click(function () {
        handleButton(3)
    });
    $("button#btnSeven").click(function () {
        handleButton(7)
    });

};


$(document).ready(init);