//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

alert("43");

initTest();

function initTest() {
    alert('srt');
    var Aurora = {};

    Aurora.returnFile = function () {
        $.ajax({
            url: "ServerHandler.PHP",
            dataType:"PHP",
            complete: function (data) {
            
                alert(data);
            },

            
        });
    }

    Aurora.returnFile();
}