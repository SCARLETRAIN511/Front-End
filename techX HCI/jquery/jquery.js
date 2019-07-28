// $(selector).action()

//event

$(document).ready(function () {
    $(".click-hide").click(function () {
        $(".hide").hide();
    });

    $(".click-show").click(function () {
        $(".hide").show();
    });

    $(".click-toggle").click(function () {
        $("#toggle").toggle();
    });

    $("#alert").click(function () {
        // console.log("this is clicked");
        alert("this is an alert");
    });

    $("#other").click(function () {
        // console.log("this is clicked");
        $("#alert").click();
    });
    $('#mouse-enter').mouseenter(function(){
        alert("your mouse has entered");
    });
    $('#hover').hover(
        function(){
            alert('enter');
        },
        function(){
            alert('leave');
        }
    );
    $('pre').hover(
        function(){
            $("pre").mouseenter(function(){
                $(this).css("background-color",'lightblue');

                });
        });



});
