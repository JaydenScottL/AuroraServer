//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

//JQuery Should be included with this file.
alert("JS1");
var Aurora = {};

Aurora.returnFile = function () {
    $.ajax({
        type: "POST",
        success: function () {
            alert(123);
        }
    });
}

Aurora.returnFile();
