$(document).ready(function(){
    var topbutton = $(".topbutton");
    var niñes = $("#niñes");
    var regiones = $(".regiones");
    var BotonDerecho= $(".BotonDerecho");

    topbutton.mouseenter(function(){
        $(this).fadeTo("fast",0.5)   
    });   

    topbutton.mouseleave(function(){
        $(this).fadeTo("fast",1)
    });
      
    niñes.mouseenter(function(){
        $(this).fadeTo("fast",0.5)
        
    });
    
    niñes.mouseleave(function(){
        $(this).fadeTo("fast",1)

    });
    niñes.click(function(){ 
        $("#tituloci").text(" VICTIMA DE MALTRATO FISICO")
        $("#tituloci").fadeTo("fast",1)
        $("#explicacionci").fadeTo("fast",1)
        $("#explicacionci").text("Explicación causal de ingreso de victima de maltrato fisico")
    });
   
    regiones.mouseenter(function(){
        $(this).css("fill","#e84145")
        $(".textoinicio3").text("peo")
    });   

    regiones.mouseleave(function(){
        $(this).css("fill","white") 
    });
   
    BotonDerecho.mouseenter(function(){
        $(this).css("background","blue")
    });
    
    
});