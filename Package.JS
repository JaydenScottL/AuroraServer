//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

alert("43");

initTest();

function initTest() {
    alert('srt');
    var Aurora = {};

    Aurora.returnFile = function () {
        $.ajax({
            url:"ServerHandler.PHP",
            complete: function (result) {
                alert("result");
                alert(result);
            },

            error:function(){
                alert(1);
            }
        
        });
    }

    Aurora.returnFile();
}