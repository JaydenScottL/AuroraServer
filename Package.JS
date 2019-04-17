//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

//JQuery Should be included with this file.
alert("120j");
var Aurora = {};

Aurora.returnFile = function () {
    $.ajax({
        type: "POST",
        url:"data.txt",
        success: function (data) {
            alert(data);
        }
    });
}

Aurora.returnFile();
