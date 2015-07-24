$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
         
         case 37:
            $('#mario').animate({left: "-=30px"}, 'fast');
            break;
         case 38:
            $('#mario').animate({top:'-=30px'},'fast');
            break;
         case 39:
            $('#mario').animate({left:'+=30px'},'fast');
            break;
         case 40:
            $('#mario').animate({top:'+=30px'},'fast');
            break;
      }
       var end = $("#mario").collision( "#coin" ); 
       var win = end.remove();
       if(win.length != 0)
       {
        alert("U WON THE GAME!!");
        $('#mario').after('<a href="basic game.html">PLAY AGAIN</a>');
        $('#mario').remove();
        $('.rock').remove();
       }
         var explosion = $('.rock').collision("#mario");
         var loss = explosion.effect('explode');
         if(loss.length !=0)
         {
            alert("GAME OVER!!");
            $('#mario').after('<a href="basic game.html">PLAY AGAIN</a>');
            $('.rock').remove();
         }
        });
        scroll();
function scroll() {
    $("#rock1").css("left", "10%");
    $('#rock1').delay(2000).animate({left : '90%'},3000);
    $("#rock2").css("top", "10%");
    $('#rock2').delay(2000).animate({top : '90%'},3000);
    $("#rock3").css("left", "90%");
    $('#rock3').delay(2000).animate({left : '20%'},3000);
    $("#rock4").css("top","90%");
    $('#rock4').delay(2000).animate({top : '20%'},3000);
    $("#rock5").css({"top":"15%","left" : "35%"});
    $('#rock5').delay(2000).animate({left : '80%',top: '80%'},3000);
    $("#rock6").css({"left":"90%","top": "90%"});
    $('#rock6').delay(2000).animate({left : '10%', top: '10%'},3000,scroll);}
         });
