//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

//JQuery Should be included with this file.
alert("la0");
var Aurora = {};

Aurora.returnFile = function () {
    $.post("ServerHandler.PHP",{name:""},function(data){alert(data});
}

Aurora.returnFile();