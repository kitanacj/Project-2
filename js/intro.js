//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#stick").hide();
    $("#box").hide();

    $("#butterfly").click(function(){
        $("#titles").hide();
        $("#stick").slideToggle();
        $("#box").show();
        $("#butterfly").hide();
        $("#butter").hide();

    });

    $("#butter").click(function(){
        $("#titles").hide();
        $("#stick").slideToggle();
        $("#box").show();
        $("#butterfly").hide();
        $("#butter").hide();

    });

    $("#box2").hide();
    $("#box3").hide();
    $("#box4").hide();

    $("#arrow1").click(function(){
        $("#box2").toggle();

    });
    $("#box2").hide();
    $("#box3").hide();
    $("#box4").hide();

    $("#arrow2").click(function(){
        $("#box3").toggle();

    });
    $("#box2").hide();
    $("#box3").hide();
    $("#box4").hide();

    $("#arrow3").click(function(){
        $("#box4").toggle();

    });

    $("#startover").click(function(){
        $("#stick").hide();
        $("#box").hide();
        $("#butterfly").show();
        $("#titles").show();
        $("#butter").show();
    });

});
