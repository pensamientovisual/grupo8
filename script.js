$(document).ready(function(){
    var topbutton = $(".topbutton");
    var niñes = $(".niñes");
    var n1 = $("#n1");
    var n1 = $("#n2");
    var regiones = $(".regiones");
    var BotonDerecho= $(".BotonDerecho");
    var BDclickeado= false
    
//esto es un  mini comentario
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
    n1.click(function(){ 
        $("#tituloci").text(" VICTIMA DE MALTRATO FISICO")
        $("#tituloci").fadeTo("fast",1)
        $("#explicacionci").fadeTo("fast",1)
        $("#explicacionci").text("Explicación causal de ingreso de victima de maltrato fisico")
    });
    //var infochile = {
      //  AI: {nom: , num: }, MA: {}, TA: {}, AN:{}, AT: {}, CO:{}, RM: {}, VS:{}, AR: {}, LI: {}, LL:{}, ML: {}, AP: {}, LR: {}, BI: {}, NU: {}
    //}
    
    regiones.mouseenter(function(){
        $(this).css("fill","#e84145")
        
    });   

    regiones.mouseleave(function(){
        $(this).css("fill","white")

    });
    regiones.click(function(){
        var region = $(this).attr("title")
        $(".textoinicio3").text(region)

    });
    BotonDerecho.mouseenter(function(){
        $(this).fadeTo("fast",0.5)

    });
    BotonDerecho.mouseleave(function(){
        $(this).fadeTo("fast",1)

    });

    
    BotonDerecho.click(function(){
        if (BDclickeado==false){

        $(this).css("background-color" ,"red")
        BDclickeado=true}
        
        else{
            $(this).css("background-color" ,"grey")
        BDclickeado=false}
        
    
    });
    n2.click(function(){ 
        $("#tituloci").text("VICTIMA DE MALTRATO PSICOLÓGICO")
        $("#tituloci").fadeTo("fast",1)
        $("#explicacionci").fadeTo("fast",1)
        $("#explicacionci").text("Explicación causal de ingreso de victima de maltrato psicológico")
    });
  
    
    
});