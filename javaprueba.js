BotonDerecho.click(function(){

    (this).css("background-color" ,"red")

//#e84145

});

$( "li" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });

  $( "button" ).click(function() {
    $( "div" ).each(function( index, element ) {
      // element == this
      $( element ).css( "backgroundColor", "yellow" );
      if ( $( this ).is( "#stop" ) ) {
        $( "span" ).text( "Stopped at div index #" + index );
        return false;
      };

$( ".BotonDerecho" ).click(function() {
    $( ".BotonDerecho" ).each(function( index, element ) {
              // element == this
        if ($( element ).css( "backgroundColor", "#e84145" )){
            $(element).css( "backgroundColor", "grey")
        }

var acc = document.getElementsByClassName("accordion");

    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        var previous = document.querySelector(".active"); //select previous button
        if (previous) { // check because when first time no button has active class
          previous.classList.remove("active");
          previous.nextElementSibling.classList.remove("show");
        }
        this.classList.add("active");
        this.nextElementSibling.classList.add("show");
      };
    };


    $("DerechoALaEducacion").click(function(){
        $(".Porcentaje").text("20")
        $(".Dato1").text("pim pam") 
        $(".Grafico").text("graficazo")
        $("Dato2").text("wen dato")
        $(".imgDDHH").hide()
    });

    $("DerechoAVivirEnFamilia").click(function(){
        $(".Porcentaje").text("32")
        $(".Dato1").text("pim pum") 
        $(".Grafico").text("wen grafico 2")
        $("Dato2").text("RIP")
    });
    $("DerechoARecibirTratamiento").click(function(){
        $(".Porcentaje").text("43")
        $(".Dato1").text("pum pem") 
        $(".Grafico").text("graficazo 3")
        $("Dato2").text("owo")
    });
    $("DerechoALaIntegridad").click(function(){
        $(".Porcentaje").text("54")
        $(".Dato1").text("pen pen") 
        $(".Grafico").text("graficazo 4")
        $("Dato2").text("uwu")
    });
    $("DerechoALaSalud").click(function(){
        $(".Porcentaje").text("54")
        $(".Dato1").text("pen pen") 
        $(".Grafico").text("graficazo 4")
        $("Dato2").text("uwu")
    });


    $("#panel").slideDown("slow");
    $("#panel").slideToggle("slow");
    $("#flip").click(function(){
      $("#panel").slideUp();
    });

    $(document).ready(function(){
      $("button").click(function(){
    $("div").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      });
    });

    $("#stop").click(function(){
      $("#panel").stop();
    });


    /*  bar302.mouseenter(function(){
        $("#Porcentaje").text("8%")
        $("#Dato1").text("texto desercion escolar")
    }); 

    bar333.mouseenter(function(){
        $("#Porcentaje").text("4%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    }); 

    bar303.mouseenter(function(){
        $("#Porcentaje").text("5%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar441.mouseenter(function(){
        $("#Porcentaje").text("6%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar401.mouseenter(function(){
        $("#Porcentaje").text("7%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar442.mouseenter(function(){
        $("#Porcentaje").text("8%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar402.mouseenter(function(){
        $("#Porcentaje").text("9%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });  

    bar443.mouseenter(function(){
        $("#Porcentaje").text("10%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar403.mouseenter(function(){
        $("#Porcentaje").text("11%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales b??sicas tales como la lectura, escritura, y habilidades matem??ticas b??sicas. El analfabetismo en Chile se mide sobre la poblaci??n de 15 a??os o m??s, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    }); */