//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

//JQuery Should be included with this file.
alert("gg8");

setTimeout(10, initTest);

function initTest() {
    var Aurora = {};

    Aurora.returnFile = function () {
        $.post("ServerHandler.PHP", { name: "null" }, function (data) { alert(data); });
    }

    Aurora.returnFile();
}