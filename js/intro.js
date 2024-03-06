//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#tab1").hide()
    $("#gifbutterfly").hide()

    $("#blue").click(function(){
        $("#blue").hide();
        $("#tab1").show();
        $("#gifbutterfly").show();


    });

});
