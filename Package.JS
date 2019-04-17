//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

initTest();

function initTest() {
    alert('srt1');
    var Aurora = {};

    Aurora.returnFile = function () {
        $.ajax({
            url: "ServerHandler.PHP",
            complete: function (data) {
                alert(1);
                alert(data);
            },

            success:function(data){
                alert(2);
                alert(data);
            },
        });
    }

    Aurora.returnFile();
}