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
    var n12 = $("#n12");
    var n13 = $("#n13");
    var n14 = $("#n14");
    var n15 = $("#n15");
    var n16 = $("#n16");
    var n17 = $("#n17");
    var n18 = $("#n18");
    var n19 = $("#n19");
    var n20 = $("#n20");
    var tci = $("#tituloci");
    var eci = $("#explicacionci");
    var regiones = $(".regiones");
    var iniciativas=$(".iniciat");
    var chile = $(".chile");
    var BotonDerecho= $(".BotonDerecho");
    var BDclickeado= false;
    var Porcentaje= $("#Porcentaje");
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
    var in1=$("#iniciativa1")
    var in2=$("#iniciativa2")

    /*Mati*/
    var Canada=$(".Canada");
    var Chile2=$(".Chile2");
    var pais=$("#pais");
    var pais_desc=$("#pais_desc")
    var EstadosUnidos = $(".United_States")

    /*ARI*/
    var ds=$("#DerechoALaSalud");
    var dvf=$("#DerechoAVivirEnFamilia");
    var de=$("#DerechoALaEducacion");
    var di=$("#DerechoALaIntegridad");
    var dt=$("#DerechoARecibirTratamiento");
    var contenido=$("#contenido");
    var precontenido=$("#precontenido");
    var topmenu=false

    var niñesoff =true;
    var x = $("#x");
    var menu = $("#menu");
    var TituloSeccion=$("#TituloSeccion");

    /*variables para los botones*/
    var Inicio=$("#Inicio");
    var CausalesDeIngreso=$("#CausalesDeIngreso");
    var DDHH=$("#DDHH");
    var Iniciativas=$("#Iniciativas");
    var Mundo=$("#Mundo");
    
    var BotonInicio=$("#BotonInicio");
    var BotonCausalesDeIngreso=$("#BotonCausalesDeIngreso");
    var BotonDDHH=$("#BotonDDHH");
    var BotonIniciativas=$("#BotonIniciativas");
    var BotonMundo=$("#BotonMundo");
    
    CausalesDeIngreso.hide()
    DDHH.hide()
    Iniciativas.hide()
    Mundo.hide()

    BotonInicio.click(function(){
        Inicio.show()
        CausalesDeIngreso.hide()
        DDHH.hide()
        Iniciativas.hide()
        Mundo.hide()
        $("#TituloSeccion").text()

    })

    BotonCausalesDeIngreso.click(function(){
        Inicio.hide()
        CausalesDeIngreso.show()
        DDHH.hide()
        Iniciativas.hide()
        Mundo.hide()
        $("#TituloSeccion").text("Causales de Ingreso")
        
    })

    BotonDDHH.click(function(){
        Inicio.hide()
        CausalesDeIngreso.hide()
        DDHH.show()
        Iniciativas.hide()
        Mundo.hide()
        $("#TituloSeccion").text("Derechos Humanos")
    })

    BotonIniciativas.click(function(){
        Inicio.hide()
        CausalesDeIngreso.hide()
        DDHH.hide()
        Iniciativas.show()
        Mundo.hide()
        $("#TituloSeccion").text("Iniciativas")
    })

    BotonMundo.click(function(){
        Inicio.hide()
        CausalesDeIngreso.hide()
        DDHH.hide()
        Iniciativas.hide()
        Mundo.show()
        $("#TituloSeccion").text("Mundo")
    })

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

    
    topbutton.mouseenter(function(){
        $(this).fadeTo("fast",0.5);   
    });   

    topbutton.mouseleave(function(){
       $(this).fadeTo("fast",1);
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
        $("#x").fadeTo("fast",1);
        $(".niñes").fadeTo("fast",0.05);
        $(".vic").fadeTo("fast",0.05);

    });
    n1.click(function(){ 
        
        $("#tituloci").text("VICTIMA DE MALTRATO FISICO")
        $("#tituloci").fadeTo("fast",1)
        $("#explicacionci").fadeTo("fast",1)
        $("#explicacionci").text("Refiere a una situación en que un niño, niña o adolescente ha sufrido, ocasional o habitualmente, agresiones físicas, por parte de los padres, cuidadores, otros adultos o instituciones. Puede o no tener como resultado una lesión física o la generación de enfermedades")
        $(".niñes").fadeTo("fast",0.05);
        $(".vic").fadeTo("fast",0.05);
        
    });
    x.click(function(){ 
        if (niñesoff==false){
            niñesoff=true;
        }
        $("#tituloci").hide();
        $("#explicacionci").hide();
        $("#x").hide();
        $(".niñes").fadeTo("fast",1);
        $(".vic").fadeTo("fast",1);
    });
    regiones.mouseenter(function(){
        $(this).fadeTo("fast",0.5)
        
    });  
    
    iniciativas.mouseenter(function(){
        $(this).fadeTo("fast",0.5)
    });

    regiones.click(function(){
        $(".regiones").css("fill","white")
        $(this).css("fill","#e84145")
        
            //$(this).css("background-color" ,"#e84145")
        //var region = $(this).attr("title")
        //$(".textoinicio3").text(region)
        
    });

    r1.click(function(){
        $(".textoinicio3").text("Región de Aysén")
        $(".textoinicio31").text("NNA: 831") 
        $(".textoinicio32").text("Residencias: 20")

    });

    r2.click(function(){
        $(".textoinicio3").text("Región de Magallanes")
        $(".textoinicio31").text("NNA: 1180") 
        $(".textoinicio32").text("Residencias: 93")

    });
    r3.click(function(){
        $(".textoinicio3").text("Región de Tarapacá")
        $(".textoinicio31").text("NNA: 1945") 
        $(".textoinicio32").text("Residencias: 130")

    });

    r4.click(function(){
        $(".textoinicio3").text("Región de Antofagasta")
        $(".textoinicio31").text("NNA: 3442") 
        $(".textoinicio32").text("Residencias: 169")

    });

    r5.click(function(){
        $(".textoinicio3").text("Región de Atacama")
        $(".textoinicio31").text("NNA: 2794") 
        $(".textoinicio32").text("Residencias: 145")

    });
    r6.click(function(){
        $(".textoinicio3").text("Región de Coquimbo")
        $(".textoinicio31").text("NNA: 5308") 
        $(".textoinicio32").text("Residencias: 177")

    });
    r7.click(function(){
        $(".textoinicio3").text("Región Metropolitana de Santiago")
        $(".textoinicio31").text("NNA: 31707") 
        $(".textoinicio32").text("Residencias: 673")

    });
    r8.click(function(){
        $(".textoinicio3").text("Región de Valparaíso")
        $(".textoinicio31").text("NNA: 11422") 
        $(".textoinicio32").text("Residencias: 551")

    });
    r9.click(function(){
        $(".textoinicio3").text("Región de la Araucanía")
        $(".textoinicio31").text("NNA: 5112") 
        $(".textoinicio32").text("Residencias: 149")

    });
    r10.click(function(){
        $(".textoinicio3").text("Región del Libertador General Bernardo O'Higgins")
        $(".textoinicio31").text("NNA: 5600") 
        $(".textoinicio32").text("Residencias: 174")

    });
    r11.click(function(){
        $(".textoinicio3").text("Región de Los Lagos")
        $(".textoinicio31").text("NNA: 5310") 
        $(".textoinicio32").text("Residencias: 307")

    });
    r12.click(function(){
        $(".textoinicio3").text("Región del Maule")
        $(".textoinicio31").text("NNA: 6448") 
        $(".textoinicio32").text("Residencias: 310")

    });
    r13.click(function(){
        $(".textoinicio3").text("Región de Arica y Parinacota ")
        $(".textoinicio31").text("NNA: 1652") 
        $(".textoinicio32").text("Residencias: 88")

    });
    r14.click(function(){
        $(".textoinicio3").text("Región de Los Ríos")
        $(".textoinicio31").text("NNA: 2491") 
        $(".textoinicio32").text("Residencias: 130")

    });
    r15.click(function(){
        $(".textoinicio3").text("Región del Bíobío")
        $(".textoinicio31").text("NNA: 8966") 
        $(".textoinicio32").text("Residencias: 379")

    });
    r16.click(function(){
        $(".textoinicio3").text("Región del Ñuble")
        $(".textoinicio31").text("NNA: 2832") 
        $(".textoinicio32").text("Residencias: 120")

    });
    
    in1.click(function(){
        $("#iniciativacentro").text("El objeto del Servicio es garantizar la protección especializada de niños, niñas y adolescentes gravemente amenazados o vulnerados en sus derechos, entendida como el diagnóstico especializado, la restitución de los derechos, la reparación del daño producido y la prevención de nuevas vulneraciones, asegurando la provisión y ejecución de programas especializados para abordar casos de mediana y alta complejidad. ")
    });
    in2.click(function(){
        $("#iniciativacentro").text("jbdjhc2")
    });
    
    

    regiones.mouseleave(function(){
        $(this).fadeTo("fast",1)
    });

    iniciativas.mouseleave(function(){
        $(this).fadeTo("fast",1)
    });

    //cosas Ari

    
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
        $("#Dato1").text("*dato porcentaje 1") ;
        $("#Dato2").text("información gráfico 1");
        $(".graficos").hide()
        $("#g1").show()
    });

    dvf.click(function(){
        $("#Porcentaje").text("32%")
        $("#Dato1").text("*dato porcentaje 2") 
        $("#Dato2").text("información gráfico 2");
        $(".graficos").hide()
        $("#g2").show()
    });
    dt.click(function(){
        $("#Porcentaje").text("43%");
        $("#Dato1").text("*dato porcentaje 3") ;
        $("#Dato2").text("información gráfico 3");
        $(".graficos").hide()
        $("#g3").show()
    });
    di.click(function(){
        $("#Porcentaje").text("54%");
        $("#Dato1").text("*dato porcentaje 4") ;
        $("#Dato2").text("información gráfico 4");
        $(".graficos").hide()
        $("#g4").show()
    });
    ds.click(function(){
        $("#Porcentaje").text("65%");
        $("#Dato1").text("*dato porcentaje 5") ;
        $("#Dato2").text("información gráfico 5");
        $(".graficos").hide()
        $("#g5").show()
    });

    //fin cosas Ari

    n2.click(function(){ 
        $("#tituloci").text("VICTIMA DE MALTRATO PSICOLÓGICO");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Los adultos a cargo, padres, madres tutores a cargo del cuidado del niño, niña o adolescente, manifiestan hostilidad o rechazo verbal hacia éste, a través de insultos, desprecio, crítica, amenaza de castigo, aislamiento abandono, etc. ");
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
    n10.click(function(){ 
        $("#tituloci").text("Víctima de maltrato prenatal");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Víctima de maltrato prenatal");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n11.click(function(){ 
        $("#tituloci").text("Transgresión de derechos a personas o propiedad");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Transgresión de derechos a personas o propiedad");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n12.click(function(){ 
        $("#tituloci").text("Protección según orden de Tribunal");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso Protección según orden de Tribunal");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n13.click(function(){ 
        $("#tituloci").text("Víctima de negligencia");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso Víctima de negligencia");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });    
    n14.click(function(){ 
        $("#tituloci").text("Víctimas de explotación sexual");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Víctimas de explotación sexual");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n15.click(function(){ 
        $("#tituloci").text("Cesión en adopción");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Cesión en adopción");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n16.click(function(){ 
        $("#tituloci").text("Bullying, matonaje o intimidación escolar");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Bullying, matonaje o intimidación escolar");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n17.click(function(){ 
        $("#tituloci").text("NNA con prácticas sexuales abusivas hacia otro NNA");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de NNA con prácticas sexuales abusivas hacia otro NNA");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n18.click(function(){ 
        $("#tituloci").text("Víctima de vulneración y/o delitos contra la indemnidad sexual");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Víctima de vulneración y/o delitos contra la indemnidad sexual");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n19.click(function(){ 
        $("#tituloci").text("Fuera del sistema escolar");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Fuera del sistema escolar");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });
    n20.click(function(){ 
        $("#tituloci").text("Víctima de Peores Formas de Trabajo Infantil");
        $("#tituloci").fadeTo("fast",1);
        $("#explicacionci").fadeTo("fast",1);
        $("#explicacionci").text("Explicación causal de ingreso de Prácticas sexuales abusivas hacia otros menores de edad");
        $(".niñes").fadeTo("fast",0.1);
        $(".vic").fadeTo("fast",0.1);
    });

/* MAPAS MATI NO TOCAR PLS */
    
    Canada.mouseenter(function(){ /* Se podrá poner una función no más?*/
        Canada.css("fill","#096cb5")
        pais.text("Canada")
        pais_desc.text("En Canada........")
    });

    Canada.mouseleave(function(){
        Canada.css("fill","#ececec")
    });

    EstadosUnidos.mouseenter(function(){ /* Se podrá poner una función no más?*/
        EstadosUnidos.css("fill","#096cb5")
        pais.text("Estados Unidos")
        pais_desc.text("Existe un sistema de servicios protección infantil (CPS, children protection services). Para los casos de negligencia infantil o similares, los niños pueden ser relocalizados con parientes cercanos (kinship services), o en el sistema de orfanato conocido como Foster Homes. El objetivo de este servicio es que una familia entrenada se haga responsable de un infante durante al menos dos años, mientras a la familia original se le hagan capacitaciones. Cada año se evalúa el retorno de los niños a su familia original, y en promedio, los niños pasan 2 años en una Foster Home.")
    });
    
    EstadosUnidos.mouseleave(function(){
        EstadosUnidos.css("fill","#ececec")
    });

    Chile2.mouseenter(function(){
        Chile2.css("fill","#096cb5")
        pais.text("Chile")
        pais_desc.text("En Chile está el sename, una institución cuestionada, etc.")
    });  
    
    Chile2.mouseleave(function(){
        Chile2.css("fill","#ececec")
        
    });

    
});