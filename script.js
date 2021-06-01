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

    var BotonReferencias = $("#BotonReferencias");
    var Refs = $('#Refs');

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
    var botoneschile=$(".botonchile");

    var niñesoff =true;
    var x = $("#x");
    var menu = $("#menu");
    var TituloSeccion=$("#TituloSeccion");

    var texto123=$("#textoinicioregiones");

    var bar111=$("#bar111");
    var bar112=$("#bar112");
    var bar113=$("#bar113");
    var bar101 =$("#bar101");
    var bar102= $("#bar102");
    var bar103= $("#bar103");
    var bar221=$("#bar221");
    var bar222= $("#bar222");
    var bar223=$("#bar223");
    var bar201=$("#bar201");
    var bar202=$("#bar202");
    var bar203=$("#bar203");
    var bar331=$("#bar331");
    var bar301=$("#bar301");
    var bar332=$("#bar332");
    var bar302=$("#bar302");
    var bar333=$("#bar333");
    var bar303=$("#bar303");
    var bar441=$("#bar441");
    var bar401=$("#bar401");
    var bar402=$("#bar402");
    var bar442=$("#bar422");
    var bar403=$("#bar403");
    var bar443=$("#bar443");
    var bar551=$("#bar551");
    var bar501=$("#bar501");
    var bar552=$("#bar552");
    var bar502=$("#bar502");
    var bar553=$("#bar553");
    var bar503=$("#bar503");

    botoneschile.mouseenter(function(){
        $(this).fadeTo("fast",0.5)
    })

    botoneschile.mouseleave(function(){
        $(this).fadeTo("fast",1)
    })

    var victima=$(".victima");
    var victimario=$(".victimario")
    var botonvictima=$("#botonvictima")
    var botonvictimario=$("#botonvictimario")
    var botonambos=$("#botonambos")
    var botonniñes=$(".botonniñes")
    botonniñes.mouseenter(function(){
        $(this).fadeTo("fast",0.5)
    });

    botonniñes.mouseleave(function(){
        $(this).fadeTo("fast",1);
        
    });
    botonniñes.click(function(){
        $(tci).hide();
        $(niñes).fadeTo("fast",1);
    });
    botonvictima.click(function(){
        $(".victimario").css("opacity", "0.15")
        $(".victima").css("opacity", "1")
    });

    botonvictimario.click(function(){
        $(".victima").css("opacity", "0.15");
        $(".victimario").css("opacity", "1");

    });

    botonambos.click(function(){
        $(".victima").css("opacity", "1")
        $(".victimario").css("opacity", "1")
        $(niñes).fadeTo("fast",1);
    });

    
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

        $(this).css("background-color", "white")
        $(this).css("color", "blue")

        $(this).css("webkit-animation-duration", "0s")

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

        $(this).css("background-color", "white")
        $(this).css("color", "blue")

        $(this).css("webkit-animation-duration", "0s")

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

        $(this).css("background-color", "white")
        $(this).css("color", "blue")

        $(this).css("webkit-animation-duration", "0s")

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
    Refs.hide()
    var RefsVisibles = false
    BotonReferencias.click(function(){
        if(RefsVisibles == false)
        {
            RefsVisibles = true;
            BotonReferencias.text("Ocultar referencias")
            Refs.show()
        } else
        {
            RefsVisibles = false
            BotonReferencias.text("Mostrar Referencias")
            Refs.hide()
        }
    });



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
        $(this).css("biackground-color"," #096cb5")
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
        $("#TituloSeccion").text("SENAME EN CHILE:") 

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
        $(".#imgDDHH").hide()

        $("#Porcentaje").text(" ")
        $("#titderecho").text("Derecho a la Educación") ;
        $("#Derecho1").text("Aprender todo aquello que desarrolle al máximo su personalidad y capacidades intelectuales, físicas y sociales.");
        $("#Derecho3").text("Todos los niños deberían tener acceso a la enseñanza secundaria.");
        $("#Derecho4").text(" ");
        $("#Dato1").text(" ");
        $("#Dato2").text("Dato 2");
        $("#Dato3").text("Dato 3");
    

        $(".graficos").hide()
        $("#g1").show()
    });

    dvf.click(function(){
        $("#Porcentaje").text(" ")
        $("#titderecho").text("Derecho a Vivir en Familia") 
        $("#Derecho1").text("La vida, el desarrollo, la participación y la protección.");
        $("#Derecho2").text("Tener un nombre y una nacionalidad.");
        $("#Derecho3").text("Saber quiénes son sus papás y a no ser separados de ellos.");
        $("#Derecho4").text("Que el Estado garantice a sus padres la posibilidad de cumplir con sus deberes y derechos.");
        $("#Dato1").text(" ");
        $("#Dato2").text("Dato 2");
        $("#Dato3").text("Dato 3");
        $(".graficos").hide()
        $("#g2").show()
    });
    dt.click(function(){
        $("#Porcentaje").text(" ");
        $("#titderecho").text("Derecho a Recibir Tratamiento") ;
        $("#Derecho1").text("Los niños impedidos tienen derecho a los servicios de rehabilitación, y a la educación y capacitación que los ayuden a disfrutar de una vida plena y decorosa.");
        $("#Derecho2").text("El derecho de un trato especial en caso de privación de la libertad.");
        $("#Derecho3").text(" ");
        $("#Derecho4").text(" ");
        $("#Dato1").text(" ");
        $("#Dato2").text("Dato 2");
        $("#Dato3").text("Dato 3");
        $(".graficos").hide()
        $("#g3").show()
    });
    di.click(function(){
        $("#Porcentaje").text(" ");
        $("#titderecho").text("Derecho a la protección contra el abuso y la discriminación.") ;
        $("#Derecho1").text("No ser discriminados por el solo hecho de ser diferentes a los demás.");
        $("#Derecho2").text("Tener a quien recurrir en caso de que los maltraten o les hagan daño.");
        $("#Derecho3").text("Que no se les obligue a realizar trabajos peligrosos ni actividades que afecten o entorpezcan su salud, educación y desarrollo.");
        $("#Derecho4").text(" ");
        $("#Dato1").text(" ");
        $("#Dato2").text("Dato 2");
        $("#Dato3").text("Dato 3");
        $(".graficos").hide()
        $("#g4").show()
    });
    ds.click(function(){
        $("#Porcentaje").text(" ");
        $("#titderecho").text("Derecho a una vida Segura y Sana") ;
        $("#Derecho1").text("Tener una vida digna y plena, más aún si se tiene una discapacidad física o mental.");
        $("#Derecho2").text("Crecer sanos física, mental y espiritualmente.");
        $("#Derecho3").text("Descansar, jugar y practicar deportes.");
        $("#Derecho4").text("Vivir en un medio ambiente sano y limpio y a disfrutar del contacto con la naturaleza.");
        $("#Dato1").text(" ");
        $("#Dato2").text("Dato 2");
        $("#Dato3").text("Dato 3");
        $(".graficos").hide()
        $("#g5").show()
    });

    //Botonoes gráficos

    bar111.mouseenter(function(){
        $("#Porcentaje").text("4%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar101.mouseenter(function(){
        $("#Porcentaje").text("4%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar112.mouseenter(function(){
        $("#Porcentaje").text("36%")
        $("#Dato1").text("Situación en la que un NNA no alcanza los objetivos curriculares, atrasándose en su progresión académica, ya sea por semestres o años. Esto se puede deber a factores tanto personales como ambientales. La prevalencia del retraso escolar es significativamente mayor dentro del sename en comparación con la población de NNA total en Chile, con dichos porcentajes siento 48% y 11% respectivamente.")
    });

    bar102.mouseenter(function(){
        $("#Porcentaje").text("36%")
        $("#Dato1").text("Situación en la que un NNA no alcanza los objetivos curriculares, atrasándose en su progresión académica, ya sea por semestres o años. Esto se puede deber a factores tanto personales como ambientales. La prevalencia del retraso escolar es significativamente mayor dentro del sename en comparación con la población de NNA total en Chile, con dichos porcentajes siento 48% y 11% respectivamente.")
    });
    
    bar113.mouseenter(function(){
        $("#Porcentaje").text("48%")
        $("#Dato1").text("Se define a la deserción escolar como el abandono parcial o total del centro escolar y de los estudios por parte del NNA, sea esta educación básica o media. Para la totalidad de lxs NNA en Chile, se tiene puede notar un 3% de deserción escolar, comparado con el 36% presente en NNA integrados en la red SENAME.")
    });
    
    bar103.mouseenter(function(){
        $("#Porcentaje").text("48%")
        $("#Dato1").text("Se define a la deserción escolar como el abandono parcial o total del centro escolar y de los estudios por parte del NNA, sea esta educación básica o media. Para la totalidad de lxs NNA en Chile, se tiene puede notar un 3% de deserción escolar, comparado con el 36% presente en NNA integrados en la red SENAME.")
    });

    bar221.mouseenter(function(){
        $("#Porcentaje").text("21%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar201.mouseenter(function(){
        $("#Porcentaje").text("21%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar222.mouseenter(function(){
        $("#Porcentaje").text("6%")
        $("#Dato1").text("texto retraso escolar")
    });

    bar202.mouseenter(function(){
        $("#Porcentaje").text("6%")
        $("#Dato1").text("texto retraso escolar")
    });
    
    bar223.mouseenter(function(){
        $("#Porcentaje").text("5%")
        $("#Dato1").text("texto retraso escolar")
    });
    
    bar203.mouseenter(function(){
        $("#Porcentaje").text("5%")
        $("#Dato1").text("texto desercion escolar")
    });

    bar331.mouseenter(function(){
        $("#Porcentaje").text("3%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });
    
    bar301.mouseenter(function(){
        $("#Porcentaje").text("3%")
        $("#Dato1").text("texto retraso escolar")
    });
    
    bar332.mouseenter(function(){
        $("#Porcentaje").text("2%")
        $("#Dato1").text("texto desercion escolar")
    });
     
     bar302.mouseenter(function(){
        $("#Porcentaje").text("2%")
        $("#Dato1").text("texto desercion escolar")
    }); 

    bar333.mouseenter(function(){
        $("#Porcentaje").text("5%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    }); 

    bar303.mouseenter(function(){
        $("#Porcentaje").text("5%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar441.mouseenter(function(){
        $("#Porcentaje").text("6%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar401.mouseenter(function(){
        $("#Porcentaje").text("6%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar442.mouseenter(function(){
        $("#Porcentaje").text("79%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")
    });

    bar402.mouseenter(function(){
        $("#Porcentaje").text("79%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });  

    bar443.mouseenter(function(){
        $("#Porcentaje").text("57%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar403.mouseenter(function(){
        $("#Porcentaje").text("57%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    }); 

    bar551.mouseenter(function(){
        $("#Porcentaje").text("34%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar501.mouseenter(function(){
        $("#Porcentaje").text("34%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar552.mouseenter(function(){
        $("#Porcentaje").text("42%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar502.mouseenter(function(){
        $("#Porcentaje").text("42%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar553.mouseenter(function(){
        $("#Porcentaje").text("55%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    });

    bar503.mouseenter(function(){
        $("#Porcentaje").text("55%")
        $("#Dato1").text("El analfabetismo corresponde a la ausencia de destrezas elementales básicas tales como la lectura, escritura, y habilidades matemáticas básicas. El analfabetismo en Chile se mide sobre la población de 15 años o más, y este consta de un 1% del total, sin embargo, dentro del SENAME un 4% de lxs NNA son consideradxs analfabetxs.")

    }); 

    //Botones siguientes
    var BotSigs = $(".BotSigs")
    BotSigs.mouseenter(function(){
        $(this).fadeTo("fast",0.5);
    });
    BotSigs.mouseleave(function(){
        $(this).fadeTo("fast",1);

    });
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
        if (niñesoff==true){
            niñesoff=false;
        }
        
        $(tci).show();
        $(x).show();
        $(niñes).hide();
        $(this).fadeTo("fast",1);
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
        $("#inicioci2").text("NEGLIGENCIA PARENTAL")
        $("#tituloci").fadeTo("fast",1)
        $("#explicacionci").fadeTo("fast",1)
        $("#explicacionci").text("La NEGLIGENCIA PARENTAL, es un tipo de maltrato infantil, ejercida por los padres y/o adultos responsables, sostenida en el tiempo que priva a los niños y las niñas del cuidado, protección y afecto que deben recibir de los adultos responsables que le rodean para un óptimo desarrollo integral.")
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
        
    });

    n1.mouseenter(function(){
        $("#inicioci2").text("NEGLIGENCIA PARENTAL"); 
        $("#pci").text("31.4% (71.052)") ;
    });
    
    n2.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("VÍCTIMA DE MALTRATOS se refiere a una situación en que un niño, niña o adolescente ha sufrido, ocasional o habitualmente, agresiones físicas y/o psicológicas, por parte de los padres, cuidadores, otros adultos o instituciones, estos manifiestan hostilidad o rechazo verbal hacia el NNA, a través de insultos, desprecio, crítica, amenaza de castigo, aislamiento o abandono.");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n2.mouseenter(function(){
        $("#inicioci2").text("VÍCTIMA DE MALTRATOS") ;
        $("#pci").text("9.5% (21.561)") ;
    });

    n3.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("La Violencia Intrafamiliar, VIF se define como “toda acción u omisión cometida por algún miembro de la familia en relación de poder, sin importar el espacio físico donde ocurra, que perjudique el bienestar, la integridad física, psicológica o la libertad y el derecho al pleno desarrollo de otro/a miembro de la familia”. Los niños, niñas o adolescentes presencian o escuchan violencia doméstica o maltrato físico o psíquico en la pareja o hacia otros integrantes de la familia. ");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n3.mouseenter(function(){
        $("#inicioci2").text("VIOLENCIA INTRAFAMILIAR") ;
        $("#pci").text("16.9% (38.140)") ;
    });
    n4.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Formas de explotación laboral hacia niños, niñas y adolescentes, diferentes de la explotación sexual, que implican su utilización para la comisión de ilícitos, prácticas asociadas a la esclavitud o su utilización en trabajos, que por su naturaleza o características, implican riesgo para la salud y el desarrollo.");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n4.mouseenter(function(){
        $("#inicioci2").text("TRABAJO INFANTIL");
        $("#pci").text("0.6% (1.400)") ; 
    });
    n5.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Se entiende por abuso o conducta sexual abusiva, al contacto o interacción sexual de un niño (a) o adolescente mayor de 10 años, con otro niño, niña o adolescente que no da o no puede dar su consentimiento y percibe aquel acto como dañino o humillante, ya sea que involucre o no daño físico.");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n5.mouseenter(function(){
        $("#inicioci2").text("PRÁCTICAS ABUSIVAS SEXUALES");
        $("#pci").text("0.8% (1.816)") ; 
    });
    n6.click(function(){
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Víctima de abandono es la situación de negligencia extrema que afecta a un niño, niña o adolescente donde el adulto a cargo no satisface sus necesidades materiales ni afectivas en periodos muy prolongados de tiempo y el vínculo prácticamente no existe. Ejemplo: abandono en la vía pública, en el hospital, etc.");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n6.mouseenter(function(){
        $("#inicioci2").text("VÍCTIMA DE ABANDONO");
        $("#pci").text("0.6% (1.428)") ; 
    });
    n7.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Víctimas de delitos, incluyen a los NNA víctimas de vulneración y/o delitos contra la indemnidad sexual, víctimas de explotación sexual, entre otras");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n7.mouseenter(function(){
        $("#inicioci2").text("VÍCTIMA DE DELITOS (excluyendo maltratos)") ;
        $("#pci").text("11.3% (25.5)") ;
    });
    n8.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Niño, niña o adolescente (inimputables) que atenta contra derechos de terceros y/o propiedad (se excluyen transgresiones a la indemnidad sexual de otras personas) y que por su edad requieren medida de protección. También se considerarán los mayores de 14 años que hayan cometido faltas establecidas en el código penal. ");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n8.mouseenter(function(){
        $("#inicioci2").text("FALTAS O DELITOS INIMPUTABLES") ;
        $("#pci").text("1.1% (2.378)") ;
    });
    n9.click(function(){ 
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Otras causales de ingreso, agrupa, principalmente, las siguientes causales de ingreso: “Vulneración de Derechos en estudio”; “Protección según orden del Tribunal; y “Ejerce bullying/matonaje o intimidación escolar”.");
        $(".niñes").fadeTo("fast",0.1);
        $(this).fadeTo("fast",1);
    });
    n9.mouseenter(function(){
        $("#inicioci2").text("OTRAS CAUSALES");
        $("#pci").text("27.7% (62.561)") ; 
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
        pais.text("Canadá")
        pais_desc_1.text("En Canadá, en caso de vulneración de los NNA se trabaja con el sistema de Foster Care,")
        pais_desc_2.text("El sistema de Foster Care toma al gobierno como tutor legal del niñe o adolescente, y le provee a las residencias las facilidades para sostenerlo.")
        pais_desc_3.text("El sistema de infraccio de Canadá está diseñado para evitar la entrada de les NNA a la cárcel; se redirigen los esfuerzos hacia la rehabilitación; es un programa establecido por ley. Distintas residencias del Foster Care.")
    });

    Canada.mouseleave(function(){
        Canada.css("fill","#4b7fa7")
    });

    EstadosUnidos.mouseenter(function(){ /* Se podrá poner una función no más?*/
        EstadosUnidos.css("fill","#096cb5")
        pais.text("Estados Unidos")
        pais_desc_1.text("En Estados Unidos existe el sistema Foster Care o de casas de acogida. Los niños con un transfondo crítico son enviados a familias capacitadas durante un tiempo determinado. Sólo el 10% de los NNA está en una residencia permanente como el Sename.")
        pais_desc_2.text("Los sistemas de Foster Care son dirigidos por ONGs, sólamente subvencionados por el Estado.")
        pais_desc_3.text("Dependiendo del caso, los infractores juveniles (desde los 15 años) pueden ser tratados como adultos, pudiendo ser enviados incluso a la carcel. En la mayoría de los casos, son enviados a centros de detención juvenil.")
    });
    
    EstadosUnidos.mouseleave(function(){
        EstadosUnidos.css("fill","#4b7fa7")
    });

    Chile2.mouseenter(function(){
        Chile2.css("fill","#de161d")
        pais.text("Chile")
        pais_desc_1.text("En Chile la gran mayoría de los NNA desprotegidos residen en los centros del Sename. Pocos pueden optar por el programa Familia de Acogida Especializada, ya que esta disponible en regiones limitadas del país y no es un servicio masificado.")
        pais_desc_2.text("El Sename, como institución estatal dirige y subsidia la mayoría de los centros residenciales. Sin embargo, aparecen con el tiempo instituciones independientes, como ONGs.")
        pais_desc_3.text("En nuestro país no existen instituciones separadas para los NNA víctimas y victimarios.")
    });  
    
    Chile2.mouseleave(function(){
        Chile2.css("fill","#cf3a3f")
        
    });

    Mexico.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Mexico.css("fill","#096cb5")
        pais.text("Mexico")
        pais_desc_1.text("En México existen Instituciones de acogidas como orfanatos, residencias, y también existen instituciones que trabajan con Foster Care.")
        pais_desc_2.text("Instituciones públicas y privadas. Los orfanatos pueden ser públicos, privados, subsidiados o financiados por caridad.")
        pais_desc_3.text("Existe un sistema donde se internan a los adolescentes (de 12 a 17 años) que hayasen cometido una falta grave.")
    });

    Mexico.mouseleave(function(){
        Mexico.css("fill","#4b7fa7")
    });

    Colombia.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Colombia.css("fill","#096cb5")
        pais.text("Colombia")
        pais_desc_1.text("En el país existen las casas de acogida. Sin embargo, hay muchos niñes y jóvenes que aún van a internados y residencias.")
        pais_desc_2.text("Las casas de acogida y residencias son en su mayoría estatales. Los centros reciben en su mayoría menores que buscan ser adoptados.")
        pais_desc_3.text("Existe el Sistema Penal para Adolescentes y los Centros de Atención Especializada.")
    });

    Colombia.mouseleave(function(){
        Colombia.css("fill","#4b7fa7")
    });

    Germany.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Germany.css("fill","#096cb5")
        pais.text("Alemania")
        pais_desc_1.text("Para situaciones críticas los niñes y jóvenes son enviados a casas de acogida. Sin embargo, a les adolescentes se les envía muchas veces a residencias comunes.")
        pais_desc_2.text("Las instituciones, en su mayoría son privadas. La administración depende del gobierno regional.")
        pais_desc_3.text("Existen cárceles para jóvenes. Sin embargo, están enfocadas en la rehabilitación y reinserción de los jóvenes.")
    });

    Germany.mouseleave(function(){
        Germany.css("fill","#4b7fa7")
    });

    Argentina.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Argentina.css("fill","#096cb5")
        pais.text("Argentina")
        pais_desc_1.text("En Argentina, a los NNA que se les han vulnerado sus derechos se les introduce en casas de acogida (Foster Care). Se prefiere quedar con personas con afinidad.")
        pais_desc_2.text("Las residencias se dividen entre estatales y privadas, sin embargo, últimamente predomina el camino a la desinstitucionalización.")
        pais_desc_3.text("Los jóvenes que cometan un delito grave sólo se podrán castigar si el tiempo carcelario es de 2 años o más. Si tienen entre 16 y 18, pasarán el tiempo en un recinto especializado. Si no es grave, se pasa en un ambiente familiar con supervisión estatal.")
    });

    Argentina.mouseleave(function(){
        Argentina.css("fill","#4b7fa7")
    });

});