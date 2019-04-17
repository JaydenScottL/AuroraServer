//Engine Source Code Version 1.0 
//Jayden LeCorps 2019

window.onload = function() {
    alert('srt1');
    var Aurora = {};

    Aurora.returnFile = function () {
        $.ajax({
            type:"GET",
            url: "ServerHandler.PHP",
            complete: function (data) {
                
                alert(data + "comp");
            },

            success:function(data){
                
                alert(data + "succ");
            },

            error: function (code) {
                alert(code);
            }
        });
    }

    Aurora.returnFile();
}