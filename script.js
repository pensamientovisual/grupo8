$(document).ready(function(){
    var topbutton = $(".topbutton");
    var niñes = $(".niñes");
    var n1 = $("#n1");
    var n2 = $("#n2");
    var n3 = $("#n3");
    var n4 = $("#n4");
    var n5 = $("#n5");
    var n6 = $("#n6");
    var n7 = $("#n7");
    var n8 = $("#n8");
    var n9 = $("#n9");
    var n10 = $("#n10");
    var n11 = $("#n11");
    var tci = $("#textoci");
    var eci = $("#explicacionci");
    var regiones = $(".regiones");
    var iniciativas=$(".iniciat");
    var chile = $(".chile");
    var BotonDerecho= $(".BotonDerecho");
    var BDclickeado= false;
    var Porcentaje= $("#Porcentaje");
    var niña = $("#niña");
    var niño = $("#niño");
    var r1=$("#CL-AI");
    var r2=$("#CL-MA");
    var r3=$("#CL-TA");
    var r4=$("#CL-AN");
    var r5=$("#CL-AT");
    var r6=$("#CL-CO");
    var r7=$("#CL-RM");
    var r8=$("#CL-VS");
    var r9=$("#CL-AR");
    var r10=$("#CL-LI");
    var r11=$("#CL-LL");
    var r12=$("#CL-ML");
    var r13=$("#CL-AP");
    var r14=$("#CL-LR");
    var r15=$("#CL-BI");
    var r16=$("#CL-NU");
    var in1=$("#iniciativa1");
    var in2=$("#iniciativa2");

    /*Mati*/
    var Canada=$(".Canada");
    var Chile2=$(".Chile2");
    var EstadosUnidos = $(".United_States");
    var Argentina = $(".Argentina")
    var Mexico = $(".Mexico")
    var Colombia = $(".Colombia")
    var Germany = $(".Germany")



    var pais=$("#pais");
    var pais_desc_1=$("#pais_desc_1");
    var pais_desc_2=$("#pais_desc_2");
    var pais_desc_3=$("#pais_desc_3");

    /*ARI*/
    var ds=$("#DerechoALaSalud");
    var dvf=$("#DerechoAVivirEnFamilia");
    var de=$("#DerechoALaEducacion");
    var di=$("#DerechoALaIntegridad");
    var dt=$("#DerechoARecibirTratamiento");
    var contenido=$("#contenido");
    var precontenido=$("#precontenido");
    var topmenu=false

    var BotSig1=$("#BotonSiguiente1");
    var BotSig2=$("#BotonSiguiente2");
    var BotSig3=$("#BotonSiguiente3");
    var BotSig4=$("#BotonSiguiente4");
    var BotSig5=$("#BotonSiguiente5");
    var Ok=$(".Ok");
    /*Fin var ARI */

    var boton1=$("#boton1");
    var boton2=$("#boton2");
    var boton3=$("#boton3");

    var niñesoff =true;
    var x = $("#x");
    var menu = $("#menu");
    var TituloSeccion=$("#TituloSeccion");

    var texto123=$("#textoinicioregiones")

    boton1.click(function(){
        r1.css("fill", "hsl(6, 78%, 87%)")
        r2.css("fill", "hsl(6, 78%, 84%)")
        r3.css("fill", "hsl(6, 78%, 78%)")
        r4.css("fill", "hsl(6, 78%, 65%)")
        r5.css("fill", "hsl(6, 78%, 71%)")
        r6.css("fill", "hsl(6, 78%, 49%)")
        r7.css("fill", "hsl(6, 78%, 7%)")
        r8.css("fill", "hsl(6, 78%, 13%)")
        r9.css("fill", "hsl(6, 78%, 51%)")
        r10.css("fill", "hsl(6, 78%, 46%)")
        r11.css("fill", "hsl(6, 78%, 49%)")
        r12.css("fill", "hsl(6, 78%, 39%)")
        r13.css("fill", "hsl(6, 78%, 80%)")
        r14.css("fill", "hsl(6, 78%, 73%)")
        r15.css("fill", "hsl(6, 78%, 18%)")
        r16.css("fill", "hsl(6, 78%, 70%)")

        inicio3.show()

        regiones.mouseenter(function(){
            $(this).fadeTo("fast",0.5)
            
        });

        regiones.mouseleave(function(){
            $(this).fadeTo("fast",1)
        });    

        regiones.click(function(){
            $(this).css("fill","white")
        });

        texto123.text("NNA en SENAME según NNA en Chile")

        r1.click(function(){
            $(".textoinicio3").text("Región de Aysén")
            $(".textoinicio31").text("NNA en SENAME de la Región: 831") 
            $(".textoinicio33").text("% Según el total nacional: 0,86%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
    
        r2.click(function(){
            $(".textoinicio3").text("Región de Magallanes")
            $(".textoinicio31").text("NNA en SENAME de la Región: 1180") 
            $(".textoinicio33").text("% Según el total nacional: 1,22%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r3.click(function(){
            $(".textoinicio3").text("Región de Tarapacá")
            $(".textoinicio31").text("NNA en SENAME de la Región: 1945") 
            $(".textoinicio33").text("% Según el total nacional: 2%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
    
        r4.click(function(){
            $(".textoinicio3").text("Región de Antofagasta")
            $(".textoinicio31").text("NNA en SENAME de la Región: 3442") 
            $(".textoinicio33").text("% Según el total nacional: 3,55%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
    
        r5.click(function(){
            $(".textoinicio3").text("Región de Atacama")
            $(".textoinicio31").text("NNA en SENAME de la Región: 2794") 
            $(".textoinicio33").text("% Según el total nacional: 2,88%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r6.click(function(){
            $(".textoinicio3").text("Región de Coquimbo")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5308") 
            $(".textoinicio33").text("% Según el total nacional: 5,47%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r7.click(function(){
            $(".textoinicio3").text("Región Metropolitana de Santiago")
            $(".textoinicio31").text("NNA en SENAME de la Región: 31707") 
            $(".textoinicio33").text("% Según el total nacional: 33,7%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r8.click(function(){
            $(".textoinicio3").text("Región de Valparaíso")
            $(".textoinicio31").text("NNA en SENAME de la Región: 11422") 
            $(".textoinicio33").text("% Según el total nacional: 11,8%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r9.click(function(){
            $(".textoinicio3").text("Región de la Araucanía")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5112") 
            $(".textoinicio33").text("% Según el total nacional: 5,27%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r10.click(function(){
            $(".textoinicio3").text("Región del Libertador General Bernardo O'Higgins")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5600") 
            $(".textoinicio33").text("% Según el total nacional: 5,77%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r11.click(function(){
            $(".textoinicio3").text("Región de Los Lagos")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5310") 
            $(".textoinicio33").text("% Según el total nacional: 5,47%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r12.click(function(){
            $(".textoinicio3").text("Región del Maule")
            $(".textoinicio31").text("NNA en SENAME de la Región: 6448") 
            $(".textoinicio33").text("% Según el total nacional: 6,64%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r13.click(function(){
            $(".textoinicio3").text("Región de Arica y Parinacota ")
            $(".textoinicio31").text("NNA en SENAME de la Región: 1652") 
            $(".textoinicio33").text("% Según el total nacional: 1,7%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r14.click(function(){
            $(".textoinicio3").text("Región de Los Ríos")
            $(".textoinicio31").text("NNA en SENAME de la Región: 2491") 
            $(".textoinicio33").text("% Según el total nacional: 2,57%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r15.click(function(){
            $(".textoinicio3").text("Región del Bíobío")
            $(".textoinicio31").text("NNA en SENAME de la Región: 8966") 
            $(".textoinicio33").text("% Según el total nacional: 9,24%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
        r16.click(function(){
            $(".textoinicio3").text("Región del Ñuble")
            $(".textoinicio31").text("NNA en SENAME de la Región: 2833") 
            $(".textoinicio33").text("% Según el total nacional: 2,92%")
            $(".textoinicio32").text("Total NNA en el SENAME: 97.040")
    
        });
    });

    boton2.click(function(){
        r1.css("fill", "hsl(6, 78%, 55%)")
        r2.css("fill", "hsl(6, 78%, 55%)")
        r3.css("fill", "hsl(6, 78%, 90%)")
        r4.css("fill", "hsl(6, 78%, 87%)")
        r5.css("fill", "hsl(6, 78%, 43%)")
        r6.css("fill", "hsl(6, 78%, 67%)")
        r7.css("fill", "hsl(6, 78%, 94%)")
        r8.css("fill", "hsl(6, 78%, 67%)")
        r9.css("fill", "hsl(6, 78%, 83%)")
        r10.css("fill", "hsl(6, 78%, 74%)")
        r11.css("fill", "hsl(6, 78%, 70%)")
        r12.css("fill", "hsl(6, 78%, 73%)")
        r13.css("fill", "hsl(6, 78%, 67%)")
        r14.css("fill", "hsl(6, 78%, 65%)")
        r15.css("fill", "hsl(6, 78%, 76%)")
        r16.css("fill", "hsl(6, 78%, 72%)")

        inicio3.show()

        texto123.text("NNA en SENAME según NNA tota de la Región")

        regiones.mouseenter(function(){
            $(this).fadeTo("fast",0.5)
            
        });

        regiones.mouseleave(function(){
            $(this).fadeTo("fast",1)
        });    

        regiones.click(function(){
            $(this).css("fill","white")
        });

        r1.click(function(){
            $(".textoinicio3").text("Región de Aysén")
            $(".textoinicio31").text("NNA en SENAME de la Región: 831") 
            $(".textoinicio32").text("NNA en la región: 29.254")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,84%")
    
        });
    
        r2.click(function(){
            $(".textoinicio3").text("Región de Magallanes")
            $(".textoinicio31").text("NNA en SENAME de la Región: 1.180") 
            $(".textoinicio32").text("NNA en la región: 41.487")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,85%")
    
        });
        r3.click(function(){
            $(".textoinicio3").text("Región de Tarapacá")
            $(".textoinicio31").text("NNA en SENAME de la Región: 1.945") 
            $(".textoinicio32").text("NNA en la región: 108.475")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 1,8%")
    
        });
    
        r4.click(function(){
            $(".textoinicio3").text("Región de Antofagasta")
            $(".textoinicio31").text("NNA en SENAME de la Región: 3.442") 
            $(".textoinicio32").text("NNA en la región: 183.507")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 1,9%")
    
        });
    
        r5.click(function(){
            $(".textoinicio3").text("Región de Atacama")
            $(".textoinicio31").text("NNA en SENAME de la Región: 2.794") 
            $(".textoinicio32").text("NNA en la región: 87.102")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 3,2%")
    
        });
        r6.click(function(){
            $(".textoinicio3").text("Región de Coquimbo")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5.308") 
            $(".textoinicio32").text("NNA en la región: 215.293")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,47%")
    
        });
        r7.click(function(){
            $(".textoinicio3").text("Región Metropolitana de Santiago")
            $(".textoinicio31").text("NNA en SENAME de la Región: 31.707") 
            $(".textoinicio32").text("NNA en la región: 1.906.599")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 1,66%")
    
        });
        r8.click(function(){
            $(".textoinicio3").text("Región de Valparaíso")
            $(".textoinicio31").text("NNA en SENAME de la Región: 11.422") 
            $(".textoinicio32").text("NNA en la región: 461.800")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,47%")
    
        });
        r9.click(function(){
            $(".textoinicio3").text("Región de la Araucanía")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5.112") 
            $(".textoinicio32").text("NNA en la región: 257.493")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 1,99%")
    
        });
        r10.click(function(){
            $(".textoinicio3").text("Región del Libertador General Bernardo O'Higgins")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5.600") 
            $(".textoinicio32").text("NNA en la región: 245.889")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,28%")
    
        });
        r11.click(function(){
            $(".textoinicio3").text("Región de Los Lagos")
            $(".textoinicio31").text("NNA en SENAME de la Región: 5.310") 
            $(".textoinicio32").text("NNA en la región: 222.657")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,38%")
    
        });
        r12.click(function(){
            $(".textoinicio3").text("Región del Maule")
            $(".textoinicio31").text("NNA en SENAME de la Región: 6.448") 
            $(".textoinicio32").text("NNA en la región: 280.234")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,3%")
    
        });
        r13.click(function(){
            $(".textoinicio3").text("Región de Arica y Parinacota ")
            $(".textoinicio31").text("NNA en SENAME de la Región: 1.652") 
            $(".textoinicio32").text("NNA en la región: 66.846")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,47%")
    
        });
        r14.click(function(){
            $(".textoinicio3").text("Región de Los Ríos")
            $(".textoinicio31").text("NNA en SENAME de la Región: 2.491") 
            $(".textoinicio32").text("NNA en la región: 98.552")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,53%")
    
        });
        r15.click(function(){
            $(".textoinicio3").text("Región del Bíobío")
            $(".textoinicio31").text("NNA en SENAME de la Región: 8.966") 
            $(".textoinicio32").text("NNA en la región: 406.339")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,2%")
    
        });
        r16.click(function(){
            $(".textoinicio3").text("Región del Ñuble")
            $(".textoinicio31").text("NNA en SENAME de la Región: 2.832") 
            $(".textoinicio32").text("NNA en la región: 122.307")
            $(".textoinicio33").text("% NNA en SENAME según NNA en región: 2,31%")
    
        });
    });

    boton3.click(function(){
        r1.css("fill", "hsl(6, 78%, 97%)")
        r2.css("fill", "hsl(6, 78%, 87%)")
        r3.css("fill", "hsl(6, 78%, 82%)")
        r4.css("fill", "hsl(6, 78%, 76%)")
        r5.css("fill", "hsl(6, 78%, 79%)")
        r6.css("fill", "hsl(6, 78%, 75%)")
        r7.css("fill", "hsl(6, 78%, 6%)")
        r8.css("fill", "hsl(6, 78%, 23%)")
        r9.css("fill", "hsl(6, 78%, 79%)")
        r10.css("fill", "hsl(6, 78%, 75%)")
        r11.css("fill", "hsl(6, 78%, 57%)")
        r12.css("fill", "hsl(6, 78%, 57%)")
        r13.css("fill", "hsl(6, 78%, 87%)")
        r14.css("fill", "hsl(6, 78%, 82%)")
        r15.css("fill", "hsl(6, 78%, 47%)")
        r16.css("fill", "hsl(6, 78%, 83%)")

        inicio3.show()

        texto123.text("N° Residencias en cada región según residencias totales en Chile")

        regiones.mouseenter(function(){
            $(this).fadeTo("fast",0.5)
            
        });

        regiones.mouseleave(function(){
            $(this).fadeTo("fast",1)
        });    

        regiones.click(function(){
            $(this).css("fill","white")
        });

        r1.click(function(){
            $(".textoinicio3").text("Región de Aysén")
            $(".textoinicio31").text("Residencias: 20") 
            $(".textoinicio33").text("% Residencias según el total nacional: 0,55%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
    
        r2.click(function(){
            $(".textoinicio3").text("Región de Magallanes")
            $(".textoinicio31").text("Residencias: 93") 
            $(".textoinicio33").text("% Residencias según el total nacional: 2,57%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r3.click(function(){
            $(".textoinicio3").text("Región de Tarapacá")
            $(".textoinicio31").text("Residencias: 130") 
            $(".textoinicio33").text("% Residencias según el total nacional: 3,6%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
    
        r4.click(function(){
            $(".textoinicio3").text("Región de Antofagasta")
            $(".textoinicio31").text("Residencias: 169") 
            $(".textoinicio33").text("% Residencias según el total nacional: 4,67%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
    
        r5.click(function(){
            $(".textoinicio3").text("Región de Atacama")
            $(".textoinicio31").text("Residencias: 145") 
            $(".textoinicio33").text("% Residencias según el total nacional: 4%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r6.click(function(){
            $(".textoinicio3").text("Región de Coquimbo")
            $(".textoinicio31").text("Residencias: 177") 
            $(".textoinicio33").text("% Residencias según el total nacional: 4,9%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r7.click(function(){
            $(".textoinicio3").text("Región Metropolitana de Santiago")
            $(".textoinicio31").text("Residencias: 673") 
            $(".textoinicio33").text("% Residencias según el total nacional: 18,6%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r8.click(function(){
            $(".textoinicio3").text("Región de Valparaíso")
            $(".textoinicio31").text("Residencias: 551") 
            $(".textoinicio33").text("% Residencias según el total nacional: 15,2%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r9.click(function(){
            $(".textoinicio3").text("Región de la Araucanía")
            $(".textoinicio31").text("Residencias: 149") 
            $(".textoinicio33").text("% Residencias según el total nacional: 4,12%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r10.click(function(){
            $(".textoinicio3").text("Región del Libertador General Bernardo O'Higgins")
            $(".textoinicio31").text("Residencias: 174") 
            $(".textoinicio33").text("% Residencias según el total nacional: 4,82%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r11.click(function(){
            $(".textoinicio3").text("Región de Los Lagos")
            $(".textoinicio31").text("Residencias: 307") 
            $(".textoinicio33").text("% Residencias según el total nacional: 8,49%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r12.click(function(){
            $(".textoinicio3").text("Región del Maule")
            $(".textoinicio31").text("Residencias: 310") 
            $(".textoinicio33").text("% Residencias según el total nacional: 8,57%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r13.click(function(){
            $(".textoinicio3").text("Región de Arica y Parinacota ")
            $(".textoinicio31").text("Residencias: 88") 
            $(".textoinicio33").text("% Residencias según el total nacional: 2,43%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r14.click(function(){
            $(".textoinicio3").text("Región de Los Ríos")
            $(".textoinicio31").text("Residencias: 130") 
            $(".textoinicio33").text("% Residencias según el total nacional: 3,6%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r15.click(function(){
            $(".textoinicio3").text("Región del Bíobío")
            $(".textoinicio31").text("Residencias: 379") 
            $(".textoinicio33").text("% Residencias según el total nacional: 10,5%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
        r16.click(function(){
            $(".textoinicio3").text("Región del Ñuble")
            $(".textoinicio31").text("Residencias: 120") 
            $(".textoinicio33").text("% Residencias según el total nacional: 3,31%")
            $(".textoinicio32").text("Total nacional residencias SENAME: 3.615" )
    
        });
    });

    var inicio3=$("#inicio3");

    inicio3.hide()

    /*variables para los botones*/
    var Inicio=$("#Inicio");
    var CausalesDeIngreso=$("#CausalesDeIngreso");
    var DDHH=$("#DDHH");
    var Historia=$("#Historia");
    var Mundo=$("#Mundo");
    
    var BotonInicio=$("#BotonInicio");
    var BotonCausalesDeIngreso=$("#BotonCausalesDeIngreso");
    var BotonDDHH=$("#BotonDDHH");
    // var BotonHistoria=$("#BotonHistoria");
    var BotonMundo=$("#BotonMundo");
    var subtab = $(".subtab")

    topbutton.mouseenter(function(){
        $(this).css("background-color","#09558B");   
    });   

    topbutton.mouseleave(function(){
        $(this).css("background-color"," #096cb5")
    });
    
    CausalesDeIngreso.hide()
    DDHH.hide()
    Historia.hide()
    Mundo.hide()

    BotonInicio.click(function(){
        Inicio.show()
        CausalesDeIngreso.hide()
        DDHH.hide()
        Historia.hide()
        Mundo.hide()
        $("#TituloSeccion").text("inicio") 

    });

    BotonCausalesDeIngreso.click(function(){
        Inicio.hide()
        CausalesDeIngreso.show()
        DDHH.hide()
        Historia.hide()
        Mundo.hide()
        $("#TituloSeccion").text("Causales de Ingreso")
        
    });

    BotonDDHH.click(function(){
        Inicio.hide()
        CausalesDeIngreso.hide()
        DDHH.show()
        Historia.hide()
        Mundo.hide()
        $("#TituloSeccion").text("Derechos Humanos")
    });

    BotonMundo.click(function(){
        Inicio.hide()
        CausalesDeIngreso.hide()
        DDHH.hide()
        Historia.hide()
        Mundo.show()
        $("#TituloSeccion").text("Mundo")
    });

    topbutton.hide();
    menu.click(function(){
        if (topmenu==false){
            topbutton.show();
            topmenu=true;}
        else {
            topbutton.hide();
            topmenu=false};
        });
    

    topbutton.click(function(){
        topbutton.hide();
        topmenu=false;});

    
    

      
    
   

            //$(this).css("background-color" ,"#e84145")
        //var region = $(this).attr("title")
        //$(".textoinicio3").text(region)
        


    
    


    //cosas DDHH

    
    contenido.hide()
    
    BotonDerecho.mouseenter(function(){
        $(this).fadeTo("fast",0.5)

    });
    BotonDerecho.mouseleave(function(){
        $(this).fadeTo("fast",1)

    });
    BotonDerecho.click(function(){
            $(".BotonDerecho").css("background-color" ,"grey")
            $(this).css("background-color" ,"#e84145")
            contenido.show()
            precontenido.hide()
                 
    });

    
    
    //mostrar datos derechos
    

    de.click(function(){
        $("#Porcentaje").text("20%");
        $("#Dato1").text("*dato porcentaje 1: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum") ;
        $("#Dato2").text("información gráfico 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
        $(".graficos").hide()
        $("#g1").show()
    });

    dvf.click(function(){
        $("#Porcentaje").text("32%")
        $("#Dato1").text("*dato porcentaje 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.") 
        $("#Dato2").text("información gráfico 2  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        $(".graficos").hide()
        $("#g2").show()
    });
    dt.click(function(){
        $("#Porcentaje").text("43%");
        $("#Dato1").text("*dato porcentaje 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.") ;
        $("#Dato2").text("información gráfico 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        $(".graficos").hide()
        $("#g3").show()
    });
    di.click(function(){
        $("#Porcentaje").text("54%");
        $("#Dato1").text("*dato porcentaje 4  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.") ;
        $("#Dato2").text("información gráfico 4 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
        $(".graficos").hide()
        $("#g4").show()
    });
    ds.click(function(){
        $("#Porcentaje").text("65%");
        $("#Dato1").text("*dato porcentaje 5  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.") ;
        $("#Dato2").text("información gráfico 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        $(".graficos").hide()
        $("#g5").show()
    });
    //Botones siguientes

    BotSig1.click(function(){
        Ok.hide();
        CausalesDeIngreso.show();
        $("#TituloSeccion").text("Causales de Ingreso")

    });

    BotSig2.click(function(){
        Ok.hide();
        DDHH.show();
        $("#TituloSeccion").text("Derechos Humanos");

    });

    BotSig3.click(function(){
        Ok.hide();
        Mundo.show();
        $("#TituloSeccion").text("Mundo")

    });


    BotSig5.click(function(){
        Ok.hide();
        Inicio.show();
        $("#TituloSeccion").text("Inicio")

    });
    //fin cosas Ari

    //inicio cosas Mai
    tci.hide();
    
    var mediosniñes = $(".mediosniñes")
    n10.mouseenter(function(){
        $(this).fadeTo("fast",0.5);
           
    });
    n10.mouseleave(function(){
        if (niñesoff==true) {
            $(this).fadeTo("fast",1);}

    });
    n11.mouseenter(function(){
        $(this).fadeTo("fast",0.5);
           
    });
    n11.mouseleave(function(){
        if (niñesoff==true) {
            $(this).fadeTo("fast",1);}

    });
    niñes.mouseenter(function(){
        if (niñesoff==true) {
            $(this).fadeTo("fast",0.5);
        }   
    });
    
    niñes.mouseleave(function(){
        if (niñesoff==true) {
            $(this).fadeTo("fast",1);}

    });
    niñes.click(function(){
        //if (niñesoff==true){
            //niñesoff=false;
        //}
        $(tci).show();
        $(this).hide();
    });
    x.click(function(){ 
        if (niñesoff==false){
            niñesoff=true;
        }
        
        $("#tituloci").hide();
        $(tci).hide();
        $("#x").hide();
        $(".niñes").fadeTo("fast",1);
        $(".vic").fadeTo("fast",1);
        $(".niñes").show();
    });
    
    n1.click(function(){ 
        $("#tituloci").text("NEGLIGENCIA PARENTAL")
        $("#tituloci").fadeTo("fast",1)
        $("#explicacionci").fadeTo("fast",1)
        $("#explicacionci").text("La NEGLIGENCIA PARENTAL, es un tipo de maltrato infantil, ejercida por los padres y/o adultos responsables, sostenida en el tiempo que priva a los niños y las niñas del cuidado, protección y afecto que deben recibir de los adultos responsables que le rodean para un óptimo desarrollo integral.")
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
        
        
    });
    n2.click(function(){ 
        $("#tituloci").text("VICTIMA DE MALTRATOS");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Refiere a una situación en que un niño, niña o adolescente ha sufrido, ocasional o habitualmente, agresiones físicas y/o psicológicas, por parte de los padres, cuidadores, otros adultos o instituciones, estos manifiestan hostilidad o rechazo verbal hacia el NNA, a través de insultos, desprecio, crítica, amenaza de castigo, aislamiento o abandono.");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n3.click(function(){ 
        $("#tituloci").text("Víctima-Testigo de Violencia Intrafamiliar");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Los niños, niñas o adolescentes presencian o escuchan violencia doméstica o maltrato físico o psíquico en la pareja o hacia otros integrantes de la familia. La Violencia Intrafamiliar, VIF se define como “toda acción u omisión cometida por algún miembro de la familia en relación de poder, sin importar el espacio físico donde ocurra, que perjudique el bienestar, la integridad física, psicológica o la libertad y el derecho al pleno desarrollo de otro/a miembro de la familia”.");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n4.click(function(){ 
        $("#tituloci").text("Niño/a o adolescente en proceso de integración familiar");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Se trata de aquellos niños, niñas o adolescentes egresados de una Residencia o CREAD hacia un programa FAE (OCA o AA.DD.), con fines de acompañamiento en el proceso de integración familiar ");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n5.click(function(){ 
        $("#tituloci").text("Víctima de Peores Formas de Trabajo Infantil");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Formas de explotación laboral hacia niños, niñas y adolescentes, diferentes de la explotación sexual, que implican su utilización para la comisión de ilícitos, prácticas asociadas a la esclavitud o su utilización en trabajos, que por su naturaleza o características, implican riesgo para la salud y el desarrollo.");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n6.click(function(){ 
        $("#tituloci").text("Consumo problemático de drogas");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Se entiende consumo problemático cuando es regular y generalmente frecuente, hay disfuncionalización parcial o global por el consumo y puede haber o no presencia de tolerancia y síndrome de abstinencia.");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n7.click(function(){ 
        $("#tituloci").text("Situación de calle");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Se trata de una situación en la cual un niño, niña o adolescente, se encuentra viviendo o presenta prolongada permanencia en la calle, se relacionan en grupos con sus pares, desarrollando circuitos callejeros en lugares públicos.");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n8.click(function(){ 
        $("#tituloci").text("Trabajo infantil");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Trabajo infantil");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n9.click(function(){ 
        $("#tituloci").text("Solicitud de Evaluación");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Solicitud de Evaluación");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    
    /*n10.click(function(){ 
        $("#tituloci").text("Víctima de maltrato prenatal");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Víctima de maltrato prenatal");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });*/
    

/* MAPAS MATI NO TOCAR PLS */
    
    Canada.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Canada.css("fill","#096cb5")
        pais.text("Canada")
        pais_desc_1.text("Uwu")
        pais_desc_2.text("Xd")
        pais_desc_3.text("El sistema de infraccio de Canadá está diseñado para evitar la ")
    });

    Canada.mouseleave(function(){
        Canada.css("fill","#ececec")
    });

    EstadosUnidos.mouseenter(function(){ /* Se podrá poner una función no más?*/
        EstadosUnidos.css("fill","#096cb5")
        pais.text("Estados Unidos")
        pais_desc_1.text("En Estados Unidos existe el sistema Foster Care o de casas de acogida. Los niños con un transfondo crítico son enviados a familias capacitadas durante un tiempo determinado. Sólo el 10% de los NNA está en una residencia permanente como el Sename.")
        pais_desc_2.text("Los sistemas de Foster Care son dirigidos por ONGs, sólamente subvencionados por el Estado.")
        pais_desc_3.text("Dependiendo del caso, los infractores juveniles (desde los 15 años) pueden ser tratados como adultos, pudiendo ser enviados incluso a la carcel. En la mayoría de los casos, son enviados a centros de detención juvenil.")
    });
    
    EstadosUnidos.mouseleave(function(){
        EstadosUnidos.css("fill","#ececec")
    });

    Chile2.mouseenter(function(){
        Chile2.css("fill","#096cb5")
        pais.text("Chile")
        pais_desc_1.text("En Chile la gran mayoría de los NNA desprotegidos residen en los centros del Sename. Pocos pueden optar por el programa Familia de Acogida Especializada, ya que esta disponible en regiones limitadas del país y no es un servicio masifi")
        pais_desc_2.text("Xd")
        pais_desc_3.text("Djdjdjd")
    });  
    
    Chile2.mouseleave(function(){
        Chile2.css("fill","#ececec")
        
    });

    Mexico.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Mexico.css("fill","#096cb5")
        pais.text("Mexico")
        pais_desc_1.text("Uwu")
        pais_desc_2.text("Instituciones públicas y privadas. Los orfanatos pueden ser públicos, privados, subsidiados o financiados por caridad.")
        pais_desc_3.text("Existe un sistema donde se internan a los adolescentes (de 12 a 17 años) que hayasen cometido una falta grave.")
    });

    Mexico.mouseleave(function(){
        Mexico.css("fill","#ececec")
    });

    Colombia.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Colombia.css("fill","#096cb5")
        pais.text("Colombia")
        pais_desc_1.text("En el país existen las casas de acogida. Sin embargo, hay muchos niñes y jóvenes que aún van a internados y residencias.")
        pais_desc_2.text("Xd")
        pais_desc_3.text("Existe el Sistema Penal para Adolescentes y los Centros de Atención Especializada.")
    });

    Colombia.mouseleave(function(){
        Colombia.css("fill","#ececec")
    });

    Germany.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Germany.css("fill","#096cb5")
        pais.text("Alemania")
        pais_desc_1.text("Para situaciones críticas los niñes y jóvenes son enviados a casas de acogida. Sin embargo, a les adolescentes se les envía muchas veces a residencias comunes.")
        pais_desc_2.text("")
        pais_desc_3.text("Existen cárceles para jóvenes. Sin embargo, están enfocadas en la rehabilitación y reinserción de los jóvenes.")
    });

    Germany.mouseleave(function(){
        Germany.css("fill","#ececec")
    });

    Argentina.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Argentina.css("fill","#096cb5")
        pais.text("Argentina")
        pais_desc_1.text("Uwu")
        pais_desc_2.text("Xd")
        pais_desc_3.text("Djdjdjd")
    });

    Argentina.mouseleave(function(){
        Argentina.css("fill","#ececec")
    });

});