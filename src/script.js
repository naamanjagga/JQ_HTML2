$(document).ready(function() {
    $('#btn5').hide();
    $("#btn1").on('click' , function() {
        //$('#table1')
        $("button").parents("table").css('background-color' , 'yellow');
    });
    $("#btn2").on('click' , function() {
    
        $("button").parents("table").children().css('background-color' , 'red');
     });
     $("#btn3").on('click' , function() {
         var a = '<table>' 
         a += $("button").parents("table").html();
         a += '</table>'
        document.getElementById('content').innerHTML = a;
       

     });
     $("#btn4").on('click' , function() {
    
        $("button").parents("table").hide();
        $('#btn5').show();

     });
     $("#btn5").on('click' , function() {
    
        $("button").parents("table").show();
        $('#btn5').hide();

     });
     

});