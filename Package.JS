//Engine Source Code Version 1.0 
//Jayden LeCorps 2019


    alert('srt1');
var Aurora = {};

Aurora.returnFile = function () {
    $.ajax({
        type:"GET",
        url: "ServerHandler.PHP",

        success:function(data){
                
            alert(data + "succ");
        },

        error: function (code) {
            alert(code);
        }
    });
}

Aurora.returnFile();
