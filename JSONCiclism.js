//Funcion para cargar los datos y mostrarlos en la grafica
function actualizarGrafico(){

var dataPARTICIPANTES = [];
var dataPARTICIPANTESFIN = [];
var dataETAPASTOTALES = [];
var dataVELMEDIA = [];
var label =[];
var init = document.getElementById("select").options[document.getElementById("select").selectedIndex].index;
var maximo= init+20;

for( i=init; i < maximo && i <= 52; i++) {
      dataPARTICIPANTES.push(JSONObjectEstadisticasGanador[i].PARTICIPANTES);
      dataETAPASTOTALES.push(JSONObjectEstadisticasGanador[i].ETAPASTOTALES);
      dataPARTICIPANTESFIN.push(JSONObjectEstadisticasGanador[i].PARTICIPANTESFINALES);
      dataVELMEDIA.push(JSONObject[i].VEL_MEDIA);
      label.push(JSONObjectEstadisticasGanador[i].AÑO);
  }

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "Participantes",
            borderColor: "#3cba9f",
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
//            backgroundColor: [
//                'rgba(255, 99, 132, 0.2)',
//                'rgba(54, 162, 235, 0.2)',
//                'rgba(255, 206, 86, 0.2)',
//                'rgba(75, 192, 192, 0.2)',
//                'rgba(153, 102, 255, 0.2)',
//                'rgba(255, 159, 64, 0.2)'
//            ],
//            borderColor: [
//                'rgba(255,99,132,1)',
//                'rgba(54, 162, 235, 1)',
//                'rgba(255, 206, 86, 1)',
//                'rgba(75, 192, 192, 1)',
//                'rgba(153, 102, 255, 1)',
//                'rgba(255, 159, 64, 1)'
//            ],
            data: dataPARTICIPANTES,
            borderWidth: 2
        },
        {
          label: "Etapas totales",
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',  
            data: dataETAPASTOTALES,
            borderWidth: 2
        },
        {
          label: "Corredores que finalizaron",
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)', 
            data: dataPARTICIPANTESFIN,
            borderWidth: 2
        },
        {
          label: "Velocidad media",
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            data: dataVELMEDIA,
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

//Funcion para cargar y mostrar los datos de los puntos historicos
function actualizarGraficoLider(){

var dataVMEDIA = [];
var label =[];
var init = document.getElementById("select").options[document.getElementById("select").selectedIndex].index;
var maximo= init+20;

for( i=init; i < maximo && i <= 52; i++) {
      dataVMEDIA.push(JSONObjectEstadisticasGanador[i].VMEDIA);
      label.push(JSONObjectEstadisticasGanador[i].AÑO);
  }

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "Velocidad media ganador",
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            data: dataVMEDIA,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

//Funcion para cargar y mostrar los datos de los puntos historicos
function actualizarGraficoPuntos(){

var dataPUNTOS = [];
var label =[];
var init = document.getElementById("select").options[document.getElementById("select").selectedIndex].index;
var maximo= init+20;

for( i=init; i < maximo && i <= 52; i++) {
      dataPUNTOS.push(JSONObjectPuntos[i].PUNTOS);
      label.push(JSONObjectPuntos[i].AÑO);
  }
document.getElementById("myChart")
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "Puntos",
            borderColor: 'rgba(54, 181, 82, 1)',
            backgroundColor: 'rgba(54, 181, 82, 0.2)',
            data: dataPUNTOS,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
//myChart.destroy();
}

//Funcion para cargar y mostrar los datos de los puntos historicos
function actualizarGraficoMontana(){

var dataMONTANA = [];
var label =[];
var init = document.getElementById("select").options[document.getElementById("select").selectedIndex].index;
var maximo= init+20;

for( i=init; i < maximo && i <= 52; i++) {
      dataMONTANA.push(JSONObjectMontanaPuntos[i].PUNTOS);
      label.push(JSONObjectMontanaPuntos[i].AÑO);
  }

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "Puntos montaña",
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: dataMONTANA,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

//Funcion para cargar y mostrar los datos de los puntos historicos
function actualizarGraficoJoven(){

var dataJOVEN= [];
var label =[];
var init = document.getElementById("select").options[document.getElementById("select").selectedIndex].index;
var maximo= init+20;

for( i=init; i < maximo && i <= 52; i++) {
      dataJOVEN.push(JSONObject[i].DISTANCIA);
      label.push(JSONObject[i].AÑO);
  }

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "KM Totales Joven",
            data: dataJOVEN,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function cargarDatos(num){
 	//accedemos al JSON como si de una matriz se tratara
	document.getElementById("anio").innerHTML=JSONObject[num].AÑO;
	document.getElementById("distancia").innerHTML=JSONObject[num].DISTANCIA; 
	document.getElementById("velocidadMedia").innerHTML=JSONObject[num].VEL_MEDIA; 
	document.getElementById("distanciaLarga").innerHTML=JSONObject[num].LARGA;
	document.getElementById("contrarreloj").innerHTML=JSONObject[num].CONTRARRELOJ; 
	
 }

 function cargarDatosLider(num){


	var conc=JSONObjectLider[num].PRIMERO;
	var elem=conc.split(" ");
	var wiki="http://es.wikipedia.org/wiki/";
	var lider=wiki.concat(elem[1].concat("_"+elem[2]));
	document.getElementById("referencia").innerHTML=conc;
	var btn=document.getElementById("lider");
	btn.href=lider;

	document.getElementById("tipoLider").innerHTML='general';
	document.getElementById("campoLider").innerHTML=JSONObjectLider[num].PRIMERO;
	document.getElementById("primero").innerHTML=JSONObjectLider[num].PRIMERO;
	document.getElementById("segundo").innerHTML=JSONObjectLider[num].SEGUNDO;
	document.getElementById("tercero").innerHTML=JSONObjectLider[num].TERCERO;
 	cargarDatos(num);
 	actualizarGraficoLider();
 }

 function cargarDatosMontana(num){

	var conc=JSONObjectMontana[num].PRIMERO;
	var elem=conc.split(" ");
	var wiki="http://es.wikipedia.org/wiki/";
	var lider=wiki.concat(elem[1].concat("_"+elem[2]));
	document.getElementById("referencia").innerHTML=conc;
	var btn=document.getElementById("lider");
	btn.href=lider;

	document.getElementById("tipoLider").innerHTML='montaña';
	document.getElementById("campoLider").innerHTML=JSONObjectMontana[num].PRIMERO;
	document.getElementById("primero").innerHTML=JSONObjectMontana[num].PRIMERO;
	document.getElementById("segundo").innerHTML=JSONObjectMontana[num].SEGUNDO;
	document.getElementById("tercero").innerHTML=JSONObjectMontana[num].TERCERO;
 	cargarDatos(num);
 	actualizarGraficoMontana();
 }

 function cargarDatosPuntos(num){

	var conc=JSONObjectPuntos[num].PRIMERO;
	var elem=conc.split(" ");
	var wiki="http://es.wikipedia.org/wiki/";
	var lider=wiki.concat(elem[1].concat("_"+elem[2]));
	document.getElementById("referencia").innerHTML=conc;
	var btn=document.getElementById("lider");
	btn.href=lider;

	document.getElementById("tipoLider").innerHTML='puntos';
	document.getElementById("campoLider").innerHTML=JSONObjectPuntos[num].PRIMERO;
	document.getElementById("primero").innerHTML=JSONObjectPuntos[num].PRIMERO;
	document.getElementById("segundo").innerHTML="-";
	document.getElementById("tercero").innerHTML="-";
 	cargarDatos(num);
 	actualizarGraficoPuntos();
 }

 function cargarDatosJoven(num){

	var conc=JSONObjectJoven[num].NOMBRE;
	var elem=conc.split(" ");
	var wiki="http://es.wikipedia.org/wiki/";
	var lider=wiki.concat(elem[1].concat("_"+elem[2]));
	document.getElementById("referencia").innerHTML=conc;
	var btn=document.getElementById("lider");
	btn.href=lider;

	document.getElementById("tipoLider").innerHTML='joven';
	document.getElementById("campoLider").innerHTML=JSONObjectJoven[num].NOMBRE;
	document.getElementById("primero").innerHTML=JSONObjectJoven[num].NOMBRE;
	document.getElementById("segundo").innerHTML="-";
	document.getElementById("tercero").innerHTML="-";
 	cargarDatos(num);
 	actualizarGraficoJoven();
 }


		//tenemos el JSON con los datos de los ganadores de los maillots
 		var JSONObject=[{"AÑO":2016,"LIDER":"Froome Chris","JOVEN":"Uran Rigoberto","MONTANA":"Majka Rafal","PUNTOS":"Sagan Peter","DISTANCIA":3465,"VEL_MEDIA":39,"LARGA":243,"CONTRARRELOJ":90,"":56},
{"AÑO":2015,"LIDER":"Froome Chris","JOVEN":"Quintana Nairo","MONTANA":"Froome Chris","PUNTOS":"Sagan Peter","DISTANCIA":3398,"VEL_MEDIA":39,"LARGA":243,"CONTRARRELOJ":90,"":56},
{"AÑO":2014,"LIDER":"Nibali Vincenzo","JOVEN":"Quintana Nairo","MONTANA":"Majka Rafal","PUNTOS":"Sagan Peter","DISTANCIA":3425,"VEL_MEDIA":39,"LARGA":243,"CONTRARRELOJ":90,"":56},
{"AÑO":2013,"LIDER":"Froome Chris","JOVEN":"Quintana Nairo","MONTANA":"Quintana Nairo","PUNTOS":"Sagan Peter","DISTANCIA":3465,"VEL_MEDIA":39,"LARGA":243,"CONTRARRELOJ":90,"":56},
{"AÑO":2012,"LIDER":"Wiggins Bradley","JOVEN":"VAN G. Tejay","MONTANA":"Voeckler Thomas","PUNTOS":"Sagan Peter","DISTANCIA":3488,"VEL_MEDIA":39,"LARGA":83,"CONTRARRELOJ":220,"":96},
{"AÑO":2011,"LIDER":"Evans Cadel","JOVEN":"Rolland Pierre","MONTANA":"Sanchez Samuel","PUNTOS":"Cavendish Mark","DISTANCIA":3430,"VEL_MEDIA":39,"LARGA":788,"CONTRARRELOJ":226,"":64},
{"AÑO":2010,"LIDER":"Contador Alberto  *  ","JOVEN":"Schleck Andy","MONTANA":"Charteau Anthony","PUNTOS":"Petacchi Alessandro","DISTANCIA":3642,"VEL_MEDIA":39,"LARGA":585,"CONTRARRELOJ":227,"":60},
{"AÑO":2009,"LIDER":"Contador Alberto","JOVEN":"Schleck Andy","MONTANA":"Pellizotti Franco","PUNTOS":"Hushovd Thor","DISTANCIA":3460,"VEL_MEDIA":40,"LARGA":31,"CONTRARRELOJ":224,"":55},
{"AÑO":2008,"LIDER":"Sastre Carlos","JOVEN":"Contador Alberto","MONTANA":"Soler Juan Mauricio","PUNTOS":"Boonen Tom","DISTANCIA":3560,"VEL_MEDIA":40,"LARGA":5,"CONTRARRELOJ":232,"":82},
{"AÑO":2007,"LIDER":"Contador Alberto","JOVEN":"Cunego Damiano","MONTANA":"Rasmussen Michael","PUNTOS":"MCEWEN Robbie","DISTANCIA":3547,"VEL_MEDIA":38,"LARGA":98,"CONTRARRELOJ":236,"":118},
{"AÑO":2006,"LIDER":"LANDIS Floyd  *  ","JOVEN":"POPOVYCH Yaroslav","MONTANA":"RASMUSSEN Michael","PUNTOS":"HUSHOVD Thor","DISTANCIA":3657,"VEL_MEDIA":40,"LARGA":781,"CONTRARRELOJ":231,"":116},
{"AÑO":2005,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"KARPETS Vladimir","MONTANA":"VIRENQUE Richard","PUNTOS":"MCEWEN Robbie","DISTANCIA":3608,"VEL_MEDIA":41,"LARGA":654,"CONTRARRELOJ":240,"":286},
{"AÑO":2004,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"MENCHOV Denis","MONTANA":"VIRENQUE Richard","PUNTOS":"COOKE Baden","DISTANCIA":3391,"VEL_MEDIA":40,"LARGA":553,"CONTRARRELOJ":237,"":141},
{"AÑO":2003,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"BASSO Ivan","MONTANA":"JALABERT Laurent","PUNTOS":"MCEWEN Robbie","DISTANCIA":3427,"VEL_MEDIA":40,"LARGA":94,"CONTRARRELOJ":231,"":172},
{"AÑO":2002,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"MANCEBO Francisco","MONTANA":"JALABERT Laurent","PUNTOS":"ZABEL Erik","DISTANCIA":3282,"VEL_MEDIA":39,"LARGA":93,"CONTRARRELOJ":227,"":177},
{"AÑO":2001,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"MARTíN Antonio","MONTANA":"SEVILLA Oscar","PUNTOS":"ZABEL Erik","DISTANCIA":3446,"VEL_MEDIA":40,"LARGA":2,"CONTRARRELOJ":233,"":168},
{"AÑO":2000,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"BOUWMANS Eddy","MONTANA":"BOTERO Santiago","PUNTOS":"ZABEL Erik","DISTANCIA":3662,"VEL_MEDIA":39,"LARGA":556,"CONTRARRELOJ":255,"":145},
{"AÑO":1999,"LIDER":"ARMSTRONG Lance  *  ","JOVEN":"MEJIA Alvaro","MONTANA":"RINERO Christophe","PUNTOS":"ABDUZHAPAROV Djamolidine","DISTANCIA":3686,"VEL_MEDIA":40,"LARGA":273,"CONTRARRELOJ":237,"":120},
{"AÑO":1998,"LIDER":"PANTANI Marco","JOVEN":"DELION Gilles","MONTANA":"ROMINGER Tony","PUNTOS":"JALABERT Laurent","DISTANCIA":3875,"VEL_MEDIA":39,"LARGA":983,"CONTRARRELOJ":252,"":6},
{"AÑO":1997,"LIDER":"ULLRICH Jan","JOVEN":"PHILIPOT Fabrice","MONTANA":"CHIAPPUCCI Claudio","PUNTOS":"ABDUZHAPAROV Djamolidine","DISTANCIA":3950,"VEL_MEDIA":39,"LARGA":23,"CONTRARRELOJ":239,"":87},
{"AÑO":1996,"LIDER":"RIIS Bjarne","JOVEN":"BREUKINK Erik","MONTANA":"CHIAPPUCCI Claudio","PUNTOS":"LUDWIG Olaf","DISTANCIA":3907,"VEL_MEDIA":39,"LARGA":227,"CONTRARRELOJ":262,"":9},
{"AÑO":1995,"LIDER":"INDURAIN Miguel","JOVEN":"ALCALA Raul","MONTANA":"CLAVEYROLAT Thierry","PUNTOS":"KELLY Sean","DISTANCIA":3653,"VEL_MEDIA":39,"LARGA":193,"CONTRARRELOJ":264,"":107},
{"AÑO":1994,"LIDER":"INDURAIN Miguel","JOVEN":"HAMPSTEN Andrew","MONTANA":"THEUNISSE Gert-jan","PUNTOS":"PLANCKAERT Eddy","DISTANCIA":3978,"VEL_MEDIA":38,"LARGA":383,"CONTRARRELOJ":271,"":339},
{"AÑO":1993,"LIDER":"INDURAIN Miguel","JOVEN":"ANDERSON Phil","MONTANA":"ROOKS Steven","PUNTOS":"VAN POPPEL Jean-Paul","DISTANCIA":3714,"VEL_MEDIA":38,"LARGA":709,"CONTRARRELOJ":286,"":195},
{"AÑO":1992,"LIDER":"INDURAIN Miguel","JOVEN":"WINNEN Peter","MONTANA":"HERRERA Luis Alberto","PUNTOS":"VANDERAERDEN Eric","DISTANCIA":3983,"VEL_MEDIA":39,"LARGA":504,"CONTRARRELOJ":255,"":198},
{"AÑO":1991,"LIDER":"INDURAIN Miguel","JOVEN":"VAN DER VELDE Johan","MONTANA":"HINAULT Bernard","PUNTOS":"KELLY Sean","DISTANCIA":3914,"VEL_MEDIA":38,"LARGA":747,"CONTRARRELOJ":286,"":172},
{"AÑO":1990,"LIDER":"LEMOND Greg","JOVEN":"THURAU Dietrich","MONTANA":"HERRERA Luis Alberto","PUNTOS":"HOSTE Frank","DISTANCIA":3504,"VEL_MEDIA":38,"LARGA":261,"CONTRARRELOJ":301,"":203},
{"AÑO":1989,"LIDER":"LEMOND Greg","JOVEN":"","MONTANA":"MILLAR Robert","PUNTOS":"KELLY Sean","DISTANCIA":3285,"VEL_MEDIA":37,"LARGA":487,"CONTRARRELOJ":259,"":151},
{"AÑO":1988,"LIDER":"DELGADO Pedro","JOVEN":"","MONTANA":"VAN IMPE Lucien","PUNTOS":"KELLY Sean","DISTANCIA":3286,"VEL_MEDIA":38,"LARGA":909,"CONTRARRELOJ":232,"":185},
{"AÑO":1987,"LIDER":"ROCHE Stephen","JOVEN":"","MONTANA":"VALLET Bernard","PUNTOS":"MAERTENS Freddy","DISTANCIA":4231,"VEL_MEDIA":36,"LARGA":645,"CONTRARRELOJ":260,"":209},
{"AÑO":1986,"LIDER":"LEMOND Greg","JOVEN":"","MONTANA":"VAN IMPE Lucien","PUNTOS":"PEVENAGE Rudy","DISTANCIA":4083,"VEL_MEDIA":37,"LARGA":2,"CONTRARRELOJ":259,"":180},
{"AÑO":1985,"LIDER":"HINAULT Bernard","JOVEN":"","MONTANA":"MARTIN Raymond","PUNTOS":"HINAULT Bernard","DISTANCIA":4127,"VEL_MEDIA":36,"LARGA":232,"CONTRARRELOJ":269,"":234},
{"AÑO":1984,"LIDER":"FIGNON Laurent","JOVEN":"","MONTANA":"BATTAGLIN Giovanni","PUNTOS":"MAERTENS Freddy","DISTANCIA":4021,"VEL_MEDIA":35,"LARGA":882,"CONTRARRELOJ":338,"":196},
{"AÑO":1983,"LIDER":"FIGNON Laurent","JOVEN":"","MONTANA":"VAN IMPE Lucien","PUNTOS":"ESCLASSAN Jacques","DISTANCIA":3962,"VEL_MEDIA":36,"LARGA":23,"CONTRARRELOJ":299,"":243},
{"AÑO":1982,"LIDER":"HINAULT Bernard","JOVEN":"","MONTANA":"VAN IMPE Lucien","PUNTOS":"VAN LINDEN Rik","DISTANCIA":3512,"VEL_MEDIA":38,"LARGA":59,"CONTRARRELOJ":251,"":389},
{"AÑO":1981,"LIDER":"HINAULT Bernard","JOVEN":"","MONTANA":"PERURENA Domingo","PUNTOS":"SERCU Patrick","DISTANCIA":3757,"VEL_MEDIA":38,"LARGA":96,"CONTRARRELOJ":264,"":356},
{"AÑO":1980,"LIDER":"ZOETEMELK Joop","JOVEN":"","MONTANA":"TORRES Damaso","PUNTOS":"VAN SPRINGEL Herman","DISTANCIA":3946,"VEL_MEDIA":35,"LARGA":144,"CONTRARRELOJ":282,"":236},
{"AÑO":1979,"LIDER":"HINAULT Bernard","JOVEN":"","MONTANA":"VAN IMPE Lucien","PUNTOS":"MERCKX Eddy","DISTANCIA":3720,"VEL_MEDIA":36,"LARGA":513,"CONTRARRELOJ":248,"":342},
{"AÑO":1978,"LIDER":"HINAULT Bernard","JOVEN":"","MONTANA":"VAN IMPE Lucien","PUNTOS":"MERCKX Eddy","DISTANCIA":3914,"VEL_MEDIA":36,"LARGA":84,"CONTRARRELOJ":244,"":5},
{"AÑO":1977,"LIDER":"THéVENET Bernard","JOVEN":"","MONTANA":"MERCKX Eddy","PUNTOS":"MERCKX Eddy","DISTANCIA":4092,"VEL_MEDIA":35,"LARGA":419,"CONTRARRELOJ":256,"":109},
{"AÑO":1976,"LIDER":"VAN IMPE Lucien","JOVEN":"","MONTANA":"JIMéNEZ Julio","PUNTOS":"JANSSEN Jan","DISTANCIA":4016,"VEL_MEDIA":34,"LARGA":518,"CONTRARRELOJ":258,"":94},
{"AÑO":1975,"LIDER":"THéVENET Bernard","JOVEN":"","MONTANA":"JIMéNEZ Julio","PUNTOS":"PLANCKAERT Willy","DISTANCIA":3999,"VEL_MEDIA":34,"LARGA":906,"CONTRARRELOJ":260,"":100},
{"AÑO":1974,"LIDER":"MERCKX Eddy","JOVEN":"","MONTANA":"JIMéNEZ Julio","PUNTOS":"JANSSEN Jan","DISTANCIA":4098,"VEL_MEDIA":35,"LARGA":241,"CONTRARRELOJ":249,"":16},
{"AÑO":1973,"LIDER":"OCANA Luis","JOVEN":"","MONTANA":"BAHAMONTES Federico","PUNTOS":"VAN LOOY Rik","DISTANCIA":4090,"VEL_MEDIA":33,"LARGA":407,"CONTRARRELOJ":248,"":71},
{"AÑO":1972,"LIDER":"MERCKX Eddy","JOVEN":"","MONTANA":"BAHAMONTES Federico","PUNTOS":"ALTIG Rudi","DISTANCIA":3846,"VEL_MEDIA":35,"LARGA":514,"CONTRARRELOJ":258,"":78},
{"AÑO":1971,"LIDER":"MERCKX Eddy","JOVEN":"","MONTANA":"MASSIGNAN Imerio","PUNTOS":"DARRIGADE André","DISTANCIA":3608,"VEL_MEDIA":38,"LARGA":84,"CONTRARRELOJ":258,"":11},
{"AÑO":1970,"LIDER":"MERCKX Eddy","JOVEN":"","MONTANA":"BAHAMONTES Federico","PUNTOS":"DARRIGADE André","DISTANCIA":4254,"VEL_MEDIA":35,"LARGA":589,"CONTRARRELOJ":270,"":89},
{"AÑO":1969,"LIDER":"MERCKX Eddy","JOVEN":"","MONTANA":"BAHAMONTES Federico","PUNTOS":"GRACZYK Jean","DISTANCIA":4117,"VEL_MEDIA":35,"LARGA":409,"CONTRARRELOJ":329,"":82},
{"AÑO":1968,"LIDER":"JANSSEN Jan","JOVEN":"","MONTANA":"NENCINI Gastone","PUNTOS":"FORESTIER Jean","DISTANCIA":4492,"VEL_MEDIA":33,"LARGA":556,"CONTRARRELOJ":251,"":83},
{"AÑO":1967,"LIDER":"PINGEON Roger","JOVEN":"","MONTANA":"GAUL Charly","PUNTOS":"OCKERS Stan","DISTANCIA":4758,"VEL_MEDIA":34,"LARGA":756,"CONTRARRELOJ":359,"":69},
{"AÑO":1966,"LIDER":"AIMAR Lucien","JOVEN":"","MONTANA":"GAUL Charly","PUNTOS":"OCKERS Stan","DISTANCIA":4322,"VEL_MEDIA":36,"LARGA":76,"CONTRARRELOJ":265,"":92},
{"AÑO":1965,"LIDER":"GIMONDI Felice","JOVEN":"","MONTANA":"BAHAMONTES Federico","PUNTOS":"KüBLER Ferdinand","DISTANCIA":4177,"VEL_MEDIA":35,"LARGA":886,"CONTRARRELOJ":240,"":111},
{"AÑO":1964,"LIDER":"ANQUETIL Jacques","JOVEN":"","MONTANA":"LORONO Jesus","PUNTOS":"SCHAR Fritz","DISTANCIA":4504,"VEL_MEDIA":35,"LARGA":419,"CONTRARRELOJ":311,"":112}];

//Datos de los ganadores del maillot de la montaña
var JSONObjectMontana=[{"AÑO":2016,"PRIMERO":" Rafal Majka","SEGUNDO":" Mikel Nieve","TERCERO":" Omar Fraile"},
{"AÑO":2015,"PRIMERO":" Chris Froome","SEGUNDO":" Giovanni Visconti","TERCERO":" Omar Fraile"},
{"AÑO":2014,"PRIMERO":" Rafal Majka","SEGUNDO":" Julián Arredondo","TERCERO":" Luis León Sánchez"},
{"AÑO":2013,"PRIMERO":" Nairo Quintana","SEGUNDO":" Stefano Pirazzi","TERCERO":" Nicolas Edet"},
{"AÑO":2012,"PRIMERO":" Thomas Voeckler","SEGUNDO":" Matteo Rabottini","TERCERO":" Simon Clarke"},
{"AÑO":2011,"PRIMERO":" Samuel Sánchez","SEGUNDO":" Stefano Garzelli","TERCERO":" David Moncoutié"},
{"AÑO":2010,"PRIMERO":" Anthony Charteau","SEGUNDO":" Matthew Lloyd","TERCERO":" David Moncoutié"},
{"AÑO":2009,"PRIMERO":" Franco Pellizotti","SEGUNDO":" Stefano Garzelli","TERCERO":" David Moncoutié"},
{"AÑO":2008,"PRIMERO":" Juan Mauricio Soler","SEGUNDO":" Emanuele Sella","TERCERO":" David Moncoutié"},
{"AÑO":2007,"PRIMERO":" Michael Rasmussen","SEGUNDO":" Leonardo Piepoli","TERCERO":" Denis Menchov"},
{"AÑO":2006,"PRIMERO":" Michael Rasmussen","SEGUNDO":" Juan Manuel Gárate","TERCERO":" Egoi Martínez"},
{"AÑO":2005,"PRIMERO":" Richard Virenque","SEGUNDO":" José Rujano","TERCERO":" Joaquim Rodríguez"},
{"AÑO":2004,"PRIMERO":" Richard Virenque","SEGUNDO":" Fabian Wegmann","TERCERO":" Félix Cárdenas"},
{"AÑO":2003,"PRIMERO":" Laurent Jalabert","SEGUNDO":" Freddy González","TERCERO":" Félix Cárdenas"},
{"AÑO":2002,"PRIMERO":" Laurent Jalabert","SEGUNDO":" Julio Alberto Pérez Cuapio","TERCERO":" Aitor Osa"},
{"AÑO":2001,"PRIMERO":" Oscar Sevilla","SEGUNDO":" Freddy González","TERCERO":" José Maria Jiménez"},
{"AÑO":2000,"PRIMERO":" Santiago Botero","SEGUNDO":" Francesco Casagrande","TERCERO":" Carlos Sastre"},
{"AÑO":1999,"PRIMERO":" Richard Virenque","SEGUNDO":" José Jaime González","TERCERO":" José Maria Jiménez"},
{"AÑO":1998,"PRIMERO":" Christophe Rinero","SEGUNDO":" Marco Pantani","TERCERO":" José Maria Jiménez"},
{"AÑO":1997,"PRIMERO":" Richard Virenque","SEGUNDO":" José Jaime González","TERCERO":" José Maria Jiménez"},
{"AÑO":1996,"PRIMERO":" Richard Virenque","SEGUNDO":" Mariano Piccoli","TERCERO":" Tony Rominger"},
{"AÑO":1995,"PRIMERO":" Richard Virenque","SEGUNDO":" Mariano Piccoli","TERCERO":" Laurent Jalabert"},
{"AÑO":1994,"PRIMERO":" Richard Virenque","SEGUNDO":" Pascal Richard","TERCERO":" Luc Leblanc"},
{"AÑO":1993,"PRIMERO":" Tony Rominger","SEGUNDO":" Claudio Chiappucci","TERCERO":" Tony Rominger"},
{"AÑO":1992,"PRIMERO":" Claudio Chiappucci","SEGUNDO":" Claudio Chiappucci","TERCERO":" Carlos Hernández"},
{"AÑO":1991,"PRIMERO":" Claudio Chiappucci","SEGUNDO":" Inaki Gaston","TERCERO":" Luis Herrera"},
{"AÑO":1990,"PRIMERO":" Thierry Claveyrolat","SEGUNDO":" Claudio Chiappucci","TERCERO":" Martin Farfan"},
{"AÑO":1989,"PRIMERO":" Gert-Jan Theunisse","SEGUNDO":" Luis Herrera","TERCERO":" Óscar Vargas"},
{"AÑO":1988,"PRIMERO":" Steven Rooks","SEGUNDO":" Andrew Hampsten","TERCERO":" Álvaro Pino"},
{"AÑO":1987,"PRIMERO":" Luis Herrera","SEGUNDO":" Robert Millar","TERCERO":" Luis Herrera"},
{"AÑO":1986,"PRIMERO":" Bernard Hinault","SEGUNDO":" Pedro Munoz","TERCERO":" Jose Luis Laguia"},
{"AÑO":1985,"PRIMERO":" Luis Herrera","SEGUNDO":" Jose Luis Navarro","TERCERO":" Jose Luis Laguia"},
{"AÑO":1984,"PRIMERO":" Robert Millar","SEGUNDO":" Laurent Fignon","TERCERO":" Felipe Yanez"},
{"AÑO":1983,"PRIMERO":" Lucien Van Impe","SEGUNDO":" Lucien Van Impe","TERCERO":" Jose Luis Laguia"},
{"AÑO":1982,"PRIMERO":" Bernard Vallet","SEGUNDO":" Lucien Van Impe","TERCERO":" Jose Luis Laguia"},
{"AÑO":1981,"PRIMERO":" Lucien Van Impe","SEGUNDO":" Claudio Bortolotto","TERCERO":" Jose Luis Laguia"},
{"AÑO":1980,"PRIMERO":" Raymond Martin","SEGUNDO":" Claudio Bortolotto","TERCERO":" Juan Fernández"},
{"AÑO":1979,"PRIMERO":" Giovanni Battaglin","SEGUNDO":" Claudio Bortolotto","TERCERO":" Felipe Yanez"},
{"AÑO":1978,"PRIMERO":" Mariano Martínez","SEGUNDO":" Ueli Sutter","TERCERO":" Andres Oliva"},
{"AÑO":1977,"PRIMERO":" Lucien Van Impe","SEGUNDO":" Faustino Fernandez Ovies","TERCERO":" Pedro Torres"},
{"AÑO":1976,"PRIMERO":" Giancarlo Bellini","SEGUNDO":" Andres Oliva","TERCERO":" Andres Oliva"},
{"AÑO":1975,"PRIMERO":" Lucien Van Impe","SEGUNDO":" Francisco Galdos","TERCERO":" Andres Oliva"},
{"AÑO":1974,"PRIMERO":" Domingo Perurena","SEGUNDO":" José Manuel Fuente","TERCERO":" Jose Luis Abilleira"},
{"AÑO":1973,"PRIMERO":" Pedro Torres","SEGUNDO":" José Manuel Fuente","TERCERO":" Jose Luis Abilleira"},
{"AÑO":1972,"PRIMERO":" Lucien Van Impe","SEGUNDO":" José Manuel Fuente","TERCERO":" José Manuel Fuente"},
{"AÑO":1971,"PRIMERO":" Lucien Van Impe","SEGUNDO":" José Manuel Fuente","TERCERO":" Joop Zoetemelk"},
{"AÑO":1970,"PRIMERO":" Eddy Merckx","SEGUNDO":" Martin Vandenbossche","TERCERO":" Agustín Tamames"},
{"AÑO":1969,"PRIMERO":" Eddy Merckx","SEGUNDO":" Claudio Michelotto","TERCERO":" Luis Ocaña"},
{"AÑO":1968,"PRIMERO":" Aurelio González Puente","SEGUNDO":" Eddy Merckx","TERCERO":" Francisco Gabica"},
{"AÑO":1967,"PRIMERO":" Julio Jiménez","SEGUNDO":" Aurelio González Puente","TERCERO":" Mariano Diaz"},
{"AÑO":1966,"PRIMERO":" Julio Jiménez","SEGUNDO":" Franco Bitossi","TERCERO":" Gregorio San Miguel"},
{"AÑO":1965,"PRIMERO":" Julio Jiménez","SEGUNDO":" Franco Bitossi","TERCERO":" Julio Jiménez"},
{"AÑO":1964,"PRIMERO":" Federico Bahamontes","SEGUNDO":" Franco Bitossi","TERCERO":" Julio Jiménez"},
{"AÑO":1963,"PRIMERO":" Federico Bahamontes","SEGUNDO":" Vito Taccone","TERCERO":" Julio Jiménez"},
{"AÑO":1962,"PRIMERO":" Federico Bahamontes","SEGUNDO":" Angelino Soler","TERCERO":" Antonio Karmany"},
{"AÑO":1961,"PRIMERO":" Imerio Massignan","SEGUNDO":" Vito Taccone","TERCERO":" Antonio Karmany"},
{"AÑO":1960,"PRIMERO":" Imerio Massignan","SEGUNDO":" Rik Van Looy","TERCERO":" Antonio Karmany"},
{"AÑO":1959,"PRIMERO":" Federico Bahamontes","SEGUNDO":" Charly Gaul","TERCERO":" Antonio Suárez"},
{"AÑO":1958,"PRIMERO":" Federico Bahamontes","SEGUNDO":" Jean Brankart","TERCERO":" Federico Bahamontes"},
{"AÑO":1957,"PRIMERO":" Gastone Nencini","SEGUNDO":" Raphaël Géminiani","TERCERO":" Federico Bahamontes"},
{"AÑO":1956,"PRIMERO":" Charly Gaul","SEGUNDO":" Federico Bahamontes","TERCERO":" Nino Defilippis"},
{"AÑO":1955,"PRIMERO":" Charly Gaul","SEGUNDO":" Gastone Nencini","TERCERO":" Giusseppe Buratti"},
{"AÑO":1954,"PRIMERO":" Federico Bahamontes","SEGUNDO":" Fausto Coppi","TERCERO":"-"},
{"AÑO":1953,"PRIMERO":" Jesús Loroño","SEGUNDO":" Pasquale Fornara","TERCERO":"-"},
{"AÑO":1952,"PRIMERO":" Fausto Coppi","SEGUNDO":" Raphaël Géminiani","TERCERO":"-"},
{"AÑO":1951,"PRIMERO":" Raphaël Géminiani","SEGUNDO":" Louison Bobet","TERCERO":"-"},
{"AÑO":1950,"PRIMERO":" Louison Bobet","SEGUNDO":" Hugo Koblet","TERCERO":" Emilio Rodríguez"},
{"AÑO":1949,"PRIMERO":" Fausto Coppi","SEGUNDO":" Fausto Coppi","TERCERO":"-"},
{"AÑO":1948,"PRIMERO":" Gino Bartali","SEGUNDO":" Fausto Coppi","TERCERO":" Bernardo Ruiz"},
{"AÑO":1947,"PRIMERO":" Pierre Brambilla","SEGUNDO":" Gino Bartali","TERCERO":" Emilio Rodríguez"},
{"AÑO":1946,"PRIMERO":"-","SEGUNDO":" Gino Bartali","TERCERO":" Emilio Rodríguez"},
{"AÑO":1945,"PRIMERO":"-","SEGUNDO":"-","TERCERO":" Julián Berrendero"},
{"AÑO":1944,"PRIMERO":"Ediciones suspendidas por la Segunda Guerra Mundial"},
{"AÑO":1943,"PRIMERO":"Ediciones suspendidas por la Segunda Guerra Mundial"},
{"AÑO":1942,"PRIMERO":"-","SEGUNDO":"-","TERCERO":" Julián Berrendero"},
{"AÑO":1941,"PRIMERO":"-","SEGUNDO":"-","TERCERO":" Fermin Trueba"},
{"AÑO":1940,"PRIMERO":"-","SEGUNDO":" Gino Bartali","TERCERO":"-"},
{"AÑO":1939,"PRIMERO":" Sylvere Maes","SEGUNDO":" Gino Bartali","TERCERO":"-"},
{"AÑO":1938,"PRIMERO":" Gino Bartali","SEGUNDO":" Giovanni Valetti","TERCERO":"-"},
{"AÑO":1937,"PRIMERO":" Félicien Vervaecke","SEGUNDO":" Gino Bartali","TERCERO":"-"},
{"AÑO":1936,"PRIMERO":" Julian Berrendero","SEGUNDO":" Gino Bartali","TERCERO":" Salvador Molina"},
{"AÑO":1935,"PRIMERO":" Félicien Vervaecke","SEGUNDO":" Gino Bartali","TERCERO":" Edoardo Molinar"},
{"AÑO":1934,"PRIMERO":" Rene Vietto","SEGUNDO":" Remo Bertoni","TERCERO":"-"},
{"AÑO":1933,"PRIMERO":" Vicente Trueba","SEGUNDO":" Alfredo Binda","TERCERO":"-"}];

//Datos de los ganadores de la general
var JSONObjectLider=[{"ANIO":2016,"PRIMERO":" Chris Froome","SEGUNDO":" Romain Bardet","TERCERO":" Nairo Quintana"},
{"ANIO":2015,"PRIMERO":" Chris Froome","SEGUNDO":" Nairo Quintana","TERCERO":" Alejandro Valverde"},
{"ANIO":2014,"PRIMERO":" Vincenzo Nibali","SEGUNDO":" Jean-Christophe Peraud","TERCERO":" Thibaut Pinot"},
{"ANIO":2013,"PRIMERO":" Chris Froome","SEGUNDO":" Nairo Quintana","TERCERO":" Joaquim Rodríguez"},
{"ANIO":2012,"PRIMERO":" Bradley Wiggins","SEGUNDO":" Chris Froome","TERCERO":" Vincenzo Nibali"},
{"ANIO":2011,"PRIMERO":" Cadel Evans","SEGUNDO":" Andy Schleck","TERCERO":" Fränk Schleck"},
{"ANIO":2010,"PRIMERO":" Andy Schleck 13","SEGUNDO":" Denis Menchov","TERCERO":" Samuel Sánchez"},
{"ANIO":2009,"PRIMERO":" Alberto Contador","SEGUNDO":" Andy Schleck","TERCERO":" Bradley Wiggins"},
{"ANIO":2008,"PRIMERO":" Carlos Sastre","SEGUNDO":" Cadel Evans","TERCERO":" Denis Menchov"},
{"ANIO":2007,"PRIMERO":" Alberto Contador","SEGUNDO":" Cadel Evans","TERCERO":" Levi Leipheimer"},
{"ANIO":2006,"PRIMERO":" Óscar Pereiro 12","SEGUNDO":" Andreas Klöden","TERCERO":" Carlos Sastre"},
{"ANIO":2005,"PRIMERO":"Lance Amstrong","SEGUNDO":" Ivan Basso","TERCERO":" Francisco Mancebo 11"},
{"ANIO":2004,"PRIMERO":"Lance Amstrong","SEGUNDO":" Andreas Klöden","TERCERO":" Ivan Basso"},
{"ANIO":2003,"PRIMERO":"Lance Amstrong","SEGUNDO":" Jan Ullrich","TERCERO":" Alexander Vinokourov"},
{"ANIO":2002,"PRIMERO":"Lance Amstrong","SEGUNDO":" Joseba Beloki","TERCERO":" Raimondas Rumsas"},
{"ANIO":2001,"PRIMERO":"Lance Amstrong","SEGUNDO":" Jan Ullrich","TERCERO":" Joseba Beloki"},
{"ANIO":2000,"PRIMERO":"Lance Amstrong","SEGUNDO":" Jan Ullrich","TERCERO":" Joseba Beloki"},
{"ANIO":1999,"PRIMERO":"Lance Amstrong","SEGUNDO":" Alex Zülle","TERCERO":" Fernando Escartín"},
{"ANIO":1998,"PRIMERO":" Marco Pantani","SEGUNDO":" Jan Ullrich","TERCERO":" Bobby Julich"},
{"ANIO":1997,"PRIMERO":" Jan Ullrich","SEGUNDO":" Richard Virenque","TERCERO":" Marco Pantani"},
{"ANIO":1996,"PRIMERO":" Bjarne Riis 8","SEGUNDO":" Jan Ullrich","TERCERO":" Richard Virenque"},
{"ANIO":1995,"PRIMERO":" Miguel Induráin","SEGUNDO":" Alex Zülle","TERCERO":" Bjarne Riis"},
{"ANIO":1994,"PRIMERO":" Miguel Induráin","SEGUNDO":" Piotr Ugrumov","TERCERO":" Marco Pantani"},
{"ANIO":1993,"PRIMERO":" Miguel Induráin","SEGUNDO":" Tony Rominger","TERCERO":" Zenon Jaskula"},
{"ANIO":1992,"PRIMERO":" Miguel Induráin","SEGUNDO":" Claudio Chiappucci","TERCERO":" Gianni Bugno"},
{"ANIO":1991,"PRIMERO":" Miguel Induráin","SEGUNDO":" Gianni Bugno","TERCERO":" Claudio Chiappucci"},
{"ANIO":1990,"PRIMERO":" Greg Lemond","SEGUNDO":" Claudio Chiappucci","TERCERO":" Erik Breukink"},
{"ANIO":1989,"PRIMERO":" Greg Lemond","SEGUNDO":" Laurent Fignon","TERCERO":" Pedro Delgado"},
{"ANIO":1988,"PRIMERO":" Pedro Delgado","SEGUNDO":" Steven Rooks","TERCERO":" Fabio Parra"},
{"ANIO":1987,"PRIMERO":" Stephen Roche","SEGUNDO":" Pedro Delgado","TERCERO":" Jean François Bernard"},
{"ANIO":1986,"PRIMERO":" Greg Lemond","SEGUNDO":" Bernard Hinault","TERCERO":" Urs Zimmermann"},
{"ANIO":1985,"PRIMERO":" Bernard Hinault","SEGUNDO":" Greg Lemond","TERCERO":" Stephen Roche"},
{"ANIO":1984,"PRIMERO":" Laurent Fignon","SEGUNDO":" Bernard Hinault","TERCERO":" Greg Lemond"},
{"ANIO":1983,"PRIMERO":" Laurent Fignon","SEGUNDO":" Ángel Arroyo","TERCERO":" Peter Winnen"},
{"ANIO":1982,"PRIMERO":" Bernard Hinault","SEGUNDO":" Joop Zoetemelk","TERCERO":" Johan van der Velde"},
{"ANIO":1981,"PRIMERO":" Bernard Hinault","SEGUNDO":" Lucien Van Impe","TERCERO":" Robert Alban"},
{"ANIO":1980,"PRIMERO":" Joop Zoetemelk","SEGUNDO":" Hennie Kuiper","TERCERO":" Raymond Martin"},
{"ANIO":1979,"PRIMERO":" Bernard Hinault","SEGUNDO":" Joop Zoetemelk","TERCERO":" Joaquim Agostinho"},
{"ANIO":1978,"PRIMERO":" Bernard Hinault","SEGUNDO":" Joop Zoetemelk","TERCERO":" Joaquim Agostinho"},
{"ANIO":1977,"PRIMERO":" Bernard Thévenet","SEGUNDO":" Hennie Kuiper","TERCERO":" Lucien Van Impe"},
{"ANIO":1976,"PRIMERO":" Lucien Van Impe","SEGUNDO":" Joop Zoetemelk","TERCERO":" Raymond Poulidor"},
{"ANIO":1975,"PRIMERO":" Bernard Thévenet","SEGUNDO":" Eddy Merckx","TERCERO":" Lucien Van Impe"},
{"ANIO":1974,"PRIMERO":" Eddy Merckx","SEGUNDO":" Raymond Poulidor","TERCERO":" Vicente López Carril"},
{"ANIO":1973,"PRIMERO":" Luis Ocaña","SEGUNDO":" Bernard Thévenet","TERCERO":" José Manuel Fuente"},
{"ANIO":1972,"PRIMERO":" Eddy Merckx","SEGUNDO":" Felice Gimondi","TERCERO":" Raymond Poulidor"},
{"ANIO":1971,"PRIMERO":" Eddy Merckx","SEGUNDO":" Joop Zoetemelk","TERCERO":" Lucien Van Impe"},
{"ANIO":1970,"PRIMERO":" Eddy Merckx","SEGUNDO":" Joop Zoetemelk","TERCERO":" Gösta Pettersson"},
{"ANIO":1969,"PRIMERO":" Eddy Merckx","SEGUNDO":" Roger Pingeon","TERCERO":" Raymond Poulidor"},
{"ANIO":1968,"PRIMERO":" Jan Janssen","SEGUNDO":" Herman Van Springel","TERCERO":" Ferdinand Bracke"},
{"ANIO":1967,"PRIMERO":" Roger Pingeon","SEGUNDO":" Julio Jiménez","TERCERO":" Franco Balmamion"},
{"ANIO":1966,"PRIMERO":" Lucien Aimar","SEGUNDO":" Jan Janssen","TERCERO":" Raymond Poulidor"},
{"ANIO":1965,"PRIMERO":" Felice Gimondi","SEGUNDO":" Raymond Poulidor","TERCERO":" Gianni Motta"},
{"ANIO":1964,"PRIMERO":" Jacques Anquetil","SEGUNDO":" R. Poulidor","TERCERO":" F. Martín Bahamontes"},
{"ANIO":1963,"PRIMERO":" Jacques Anquetil","SEGUNDO":" F. Martín Bahamonte","TERCERO":" José Pérez-Francés"},
{"ANIO":1962,"PRIMERO":" Jacques Anquetil","SEGUNDO":" Jozef Planckaert","TERCERO":" Raymond Poulidor"},
{"ANIO":1961,"PRIMERO":" Jacques Anquetil","SEGUNDO":" Guido Carlesi","TERCERO":" Charly Gaul"},
{"ANIO":1960,"PRIMERO":" Gastone Nencini","SEGUNDO":" Graziano Battistini","TERCERO":" Jan Adriaensens"},
{"ANIO":1959,"PRIMERO":" F. Martín Bahamontes","SEGUNDO":" Henri Anglade","TERCERO":" Jacques Anquetil"},
{"ANIO":1958,"PRIMERO":" Charly Gaul","SEGUNDO":" Vito Favero","TERCERO":" Raphaël Geminiani"},
{"ANIO":1957,"PRIMERO":" Jacques Anquetil","SEGUNDO":" Marcel Janssens","TERCERO":" Adolf Christian"},
{"ANIO":1956,"PRIMERO":" Roger Walkowiak","SEGUNDO":" Gilbert Bauvin","TERCERO":" Jan Adriaenssens"},
{"ANIO":1955,"PRIMERO":" Louison Bobet","SEGUNDO":" Jean Brankart","TERCERO":" Charly Gaul"},
{"ANIO":1954,"PRIMERO":" Louison Bobet","SEGUNDO":" Ferdi Kübler","TERCERO":" Fritz Schaer"},
{"ANIO":1953,"PRIMERO":" Louison Bobet","SEGUNDO":" Jean Malléjac","TERCERO":" Giancarlo Astrua"},
{"ANIO":1952,"PRIMERO":" Fausto Coppi","SEGUNDO":" Stan Ockers","TERCERO":" Bernardo Ruiz"},
{"ANIO":1951,"PRIMERO":" Hugo Koblet","SEGUNDO":" Raphaël Geminiani","TERCERO":" Lucien Lazaridès"},
{"ANIO":1950,"PRIMERO":" Ferdi Kübler","SEGUNDO":" Stan Ockers","TERCERO":" Louison Bobet"},
{"ANIO":1949,"PRIMERO":" Fausto Coppi","SEGUNDO":" Gino Bartali","TERCERO":" Jacques Marinelli"},
{"ANIO":1948,"PRIMERO":" Gino Bartali","SEGUNDO":" Briek Schotte","TERCERO":" Guy Lapébie"},
{"ANIO":1947,"PRIMERO":" Jean Robic","SEGUNDO":" Edouard Fachleitner","TERCERO":" Pierre Brambilla"},
{"ANIO":1945,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1944,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1943,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1942,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1941,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1940,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1940,"PRIMERO":"II Guerra Mundial","SEGUNDO":"II Guerra Mundial","TERCERO":"II Guerra Mundial"},
{"ANIO":1939,"PRIMERO":" Sylvère Maes","SEGUNDO":" René Vietto","TERCERO":" Lucien Vlaemynck"},
{"ANIO":1938,"PRIMERO":" Gino Bartali","SEGUNDO":" Félicien Vervaecke","TERCERO":" Victor Cosson"},
{"ANIO":1937,"PRIMERO":" Roger Lapébie","SEGUNDO":" Mario Vicini","TERCERO":" Leo Amberg"},
{"ANIO":1936,"PRIMERO":" Sylvère Maes","SEGUNDO":" Antonin Magne","TERCERO":" Félicien Vervaecke"},
{"ANIO":1935,"PRIMERO":" Romain Maes","SEGUNDO":" Ambrogio Morelli","TERCERO":" Félicien Vervaecke"},
{"ANIO":1934,"PRIMERO":" Antonin Magne","SEGUNDO":" Giuseppe Martano","TERCERO":" Roger Lapébie"},
{"ANIO":1933,"PRIMERO":" Georges Speicher","SEGUNDO":" Learco Guerra","TERCERO":" Giuseppe Martano"},
{"ANIO":1932,"PRIMERO":" André Leducq","SEGUNDO":" Kurt Stoepel","TERCERO":" Francesco Camusso"},
{"ANIO":1931,"PRIMERO":" Antonin Magne","SEGUNDO":" Jef Demuysere","TERCERO":" Antonio Pesenti"},
{"ANIO":1930,"PRIMERO":" André Leducq","SEGUNDO":" Learco Guerra","TERCERO":" Antonin Magne"},
{"ANIO":1929,"PRIMERO":" Maurice De Waele","SEGUNDO":" Giuseppe Pancera","TERCERO":" Jef Demuysere"},
{"ANIO":1928,"PRIMERO":" Nicolas Frantz","SEGUNDO":" André Leducq","TERCERO":" Maurice De Waele"},
{"ANIO":1927,"PRIMERO":" Nicolas Frantz","SEGUNDO":" Maurice De Waele","TERCERO":" Julien Vervaecke"},
{"ANIO":1926,"PRIMERO":" Lucien Buysse","SEGUNDO":" Nicolas Frantz","TERCERO":" Bartolomeo Aymo"},
{"ANIO":1925,"PRIMERO":" Ottavio Bottecchia","SEGUNDO":" Lucien Buysse","TERCERO":" Bartolomeo Aymo"},
{"ANIO":1924,"PRIMERO":" Ottavio Bottecchia","SEGUNDO":" Nicolas Frantz","TERCERO":" Lucien Buysse"},
{"ANIO":1923,"PRIMERO":" Henri Pélissier","SEGUNDO":" Ottavio Bottecchia","TERCERO":" Romain Bellenger"},
{"ANIO":1922,"PRIMERO":" Firmin Lambot","SEGUNDO":" Jean Alavoine","TERCERO":" Félix Sellier"},
{"ANIO":1921,"PRIMERO":" Léon Scieur","SEGUNDO":" Hector Heusghem","TERCERO":" Honoré Barthélémy"},
{"ANIO":1920,"PRIMERO":" Philippe Thijs","SEGUNDO":" Hector Heusghem","TERCERO":" Firmin Lambot"},
{"ANIO":1919,"PRIMERO":" Firmin Lambot","SEGUNDO":" Jean Alavoine","TERCERO":" Eugène Christophe"},
{"ANIO":1918,"PRIMERO":"I Guerra Mundial","SEGUNDO":"I Guerra Mundial","TERCERO":"I Guerra Mundial"},
{"ANIO":1917,"PRIMERO":"I Guerra Mundial","SEGUNDO":"I Guerra Mundial","TERCERO":"I Guerra Mundial"},
{"ANIO":1916,"PRIMERO":"I Guerra Mundial","SEGUNDO":"I Guerra Mundial","TERCERO":"I Guerra Mundial"},
{"ANIO":1915,"PRIMERO":"I Guerra Mundial","SEGUNDO":"I Guerra Mundial","TERCERO":"I Guerra Mundial"},
{"ANIO":1914,"PRIMERO":" Philippe Thijs","SEGUNDO":" Henri Pélissier","TERCERO":" Jean Alavoine"},
{"ANIO":1913,"PRIMERO":" Philippe Thijs","SEGUNDO":" Gustave Garrigou","TERCERO":" Marcel Buysse"},
{"ANIO":1912,"PRIMERO":" Odile Defraye","SEGUNDO":" Eugène Christophe","TERCERO":" Gustave Garrigou"},
{"ANIO":1911,"PRIMERO":" Gustave Garrigou","SEGUNDO":" Paul Duboc","TERCERO":" Émile Georget"},
{"ANIO":1910,"PRIMERO":" Octave Lapize","SEGUNDO":" François Faber","TERCERO":" Gustave Garrigou"},
{"ANIO":1909,"PRIMERO":" François Faber","SEGUNDO":" Gustave Garrigou","TERCERO":" Jean Alavoine"},
{"ANIO":1908,"PRIMERO":" Lucien Petit-Breton","SEGUNDO":" François Faber","TERCERO":" Georges Passerieu"},
{"ANIO":1907,"PRIMERO":" Lucien Petit-Breton","SEGUNDO":" Gustave Garrigou","TERCERO":" Émile Georget"},
{"ANIO":1906,"PRIMERO":" René Pottier","SEGUNDO":" Georges Passerieu","TERCERO":" Louis Trousselier"},
{"ANIO":1905,"PRIMERO":" Louis Trousselier","SEGUNDO":" Hip. Aucouturier","TERCERO":" Jean-B. Dortignacq"},
{"ANIO":1904,"PRIMERO":" Henri Cornet 7","SEGUNDO":" Jean-B.Dortignacq","TERCERO":" Philippe Jousselin"},
{"ANIO":1903,"PRIMERO":" Maurice Garin","SEGUNDO":" Lucien Pothier","TERCERO":" Fernand Augereau"}];

//Datos de los ganadores del maillot de puntos
var JSONObjectPuntos=[{"AÑO":2016,"PRIMERO":" Peter Sagan","EQUIPO":"Tinkoff","PUNTOS":470,"OTRAS":"-"},
{"AÑO":2015,"PRIMERO":" Peter Sagan","EQUIPO":"Tinkoff-Saxo","PUNTOS":432,"OTRAS":"-"},
{"AÑO":2014,"PRIMERO":" Peter Sagan","EQUIPO":"Cannondale","PUNTOS":431,"OTRAS":"-"},
{"AÑO":2013,"PRIMERO":" Peter Sagan","EQUIPO":"Cannondale Pro Cycling","PUNTOS":409,"OTRAS":"-"},
{"AÑO":2012,"PRIMERO":" Peter Sagan","EQUIPO":"Liquigas-Cannondale","PUNTOS":421,"OTRAS":"-"},
{"AÑO":2011,"PRIMERO":" Mark Cavendish","EQUIPO":"HTC-Highroad","PUNTOS":334,"OTRAS":"-"},
{"AÑO":2010,"PRIMERO":" Alessandro Petacchi","EQUIPO":"Lampre-Farnese Vini","PUNTOS":243,"OTRAS":"Combatividad"},
{"AÑO":2009,"PRIMERO":" Thor Hushovd","EQUIPO":"Cervélo Test Team","PUNTOS":255,"OTRAS":"-"},
{"AÑO":2008,"PRIMERO":" Óscar Freire","EQUIPO":"Rabobank","PUNTOS":270,"OTRAS":"-"},
{"AÑO":2007,"PRIMERO":" Tom Boonen","EQUIPO":"Quick Step-Innergetic","PUNTOS":256,"OTRAS":"Combatividad"},
{"AÑO":2006,"PRIMERO":" Robbie McEwen","EQUIPO":"Davitamon-Lotto","PUNTOS":288,"OTRAS":"-"},
{"AÑO":2005,"PRIMERO":" Thor Hushovd","EQUIPO":"Crédit Agricole","PUNTOS":194,"OTRAS":"-"},
{"AÑO":2004,"PRIMERO":" Robbie McEwen","EQUIPO":"Lotto-Domo","PUNTOS":272,"OTRAS":"-"},
{"AÑO":2003,"PRIMERO":" Baden Cooke","EQUIPO":"Française des Jeux","PUNTOS":216,"OTRAS":"-"},
{"AÑO":2002,"PRIMERO":" Robbie McEwen","EQUIPO":"Lotto-Adecco","PUNTOS":280,"OTRAS":" Combinada"},
{"AÑO":2001,"PRIMERO":" Erik Zabel","EQUIPO":"Deutsche Telekom","PUNTOS":252,"OTRAS":" General"},
{"AÑO":2000,"PRIMERO":" Erik Zabel","EQUIPO":"Deutsche Telekom","PUNTOS":321,"OTRAS":" Combinada"},
{"AÑO":1999,"PRIMERO":" Erik Zabel","EQUIPO":"Deutsche Telekom","PUNTOS":323,"OTRAS":" General"},
{"AÑO":1998,"PRIMERO":" Erik Zabel","EQUIPO":"Deutsche Telekom","PUNTOS":327,"OTRAS":" Combinada"},
{"AÑO":1997,"PRIMERO":" Erik Zabel","EQUIPO":"Deutsche Telekom","PUNTOS":350,"OTRAS":" General"},
{"AÑO":1996,"PRIMERO":" Erik Zabel","EQUIPO":"Deutsche Telekom","PUNTOS":335,"OTRAS":" Combinada"},
{"AÑO":1995,"PRIMERO":" Laurent Jalabert","EQUIPO":"ONCE","PUNTOS":333,"OTRAS":"-"},
{"AÑO":1994,"PRIMERO":"Djamolidine Abdoujaparov","EQUIPO":"Team Polti","PUNTOS":322,"OTRAS":"-"},
{"AÑO":1993,"PRIMERO":"Djamolidine Abdoujaparov","EQUIPO":"Lampre-Polti","PUNTOS":298,"OTRAS":"-"},
{"AÑO":1992,"PRIMERO":" Laurent Jalabert","EQUIPO":"ONCE","PUNTOS":293,"OTRAS":"-"},
{"AÑO":1991,"PRIMERO":"Djamolidine Abdoujaparov","EQUIPO":"Carrera Jeans","PUNTOS":316,"OTRAS":"-"},
{"AÑO":1990,"PRIMERO":" Olaf Ludwig","EQUIPO":"Panasonic","PUNTOS":256,"OTRAS":"-"},
{"AÑO":1989,"PRIMERO":" Sean Kelly","EQUIPO":"PDM","PUNTOS":277,"OTRAS":" General"},
{"AÑO":1988,"PRIMERO":" Eddy Planckaert","EQUIPO":"AD Renting","PUNTOS":278,"OTRAS":" Sprints intermedios"},
{"AÑO":1987,"PRIMERO":" Jean-Paul van Poppel","EQUIPO":"Superconfex-Yoko","PUNTOS":263,"OTRAS":" Sprints intermedios"},
{"AÑO":1986,"PRIMERO":" Eric Vanderaerden","EQUIPO":"Panasonic","PUNTOS":277,"OTRAS":" Sprints intermedios"},
{"AÑO":1985,"PRIMERO":" Sean Kelly","EQUIPO":"Skil-Sem","PUNTOS":434,"OTRAS":" Sprints intermedios"},
{"AÑO":1984,"PRIMERO":" Frank Hoste","EQUIPO":"Europ Decor-Boule d'Or","PUNTOS":322,"OTRAS":"-"},
{"AÑO":1983,"PRIMERO":" Sean Kelly","EQUIPO":"Sem-France Loire","PUNTOS":360,"OTRAS":"-"},
{"AÑO":1982,"PRIMERO":" Sean Kelly","EQUIPO":"Sem-France Loire","PUNTOS":429,"OTRAS":"-"},
{"AÑO":1981,"PRIMERO":" Freddy Maertens","EQUIPO":"Sunair-Sport","PUNTOS":428,"OTRAS":"-"},
{"AÑO":1980,"PRIMERO":" Rudy Pevenage","EQUIPO":"IJsboerke-Warncke Eis","PUNTOS":194,"OTRAS":"-"},
{"AÑO":1979,"PRIMERO":" Bernard Hinault","EQUIPO":"Renault-Gitane","PUNTOS":253,"OTRAS":" Sprints intermedios"},
{"AÑO":1978,"PRIMERO":" Freddy Maertens","EQUIPO":"Velda-Lano-Flandria","PUNTOS":242,"OTRAS":"-"},
{"AÑO":1977,"PRIMERO":" Jacques Esclassan","EQUIPO":"Peugeot-Esso-Michelin","PUNTOS":236,"OTRAS":"-"},
{"AÑO":1976,"PRIMERO":" Freddy Maertens","EQUIPO":"Velda-Flandria","PUNTOS":293,"OTRAS":"-"},
{"AÑO":1975,"PRIMERO":" Rik Van Linden","EQUIPO":"Bianchi-Campagnolo","PUNTOS":342,"OTRAS":"-"},
{"AÑO":1974,"PRIMERO":" Patrick Sercu","EQUIPO":"Brooklyn","PUNTOS":283,"OTRAS":"-"},
{"AÑO":1973,"PRIMERO":" Herman Van Springel","EQUIPO":"Rokado-De Gribaldy","PUNTOS":187,"OTRAS":"-"},
{"AÑO":1972,"PRIMERO":" Eddy Merckx","EQUIPO":"Molteni","PUNTOS":196,"OTRAS":"-"},
{"AÑO":1971,"PRIMERO":" Eddy Merckx","EQUIPO":"Molteni","PUNTOS":202,"OTRAS":"-"},
{"AÑO":1970,"PRIMERO":" Walter Godefroot","EQUIPO":"Salvarani","PUNTOS":212,"OTRAS":"-"},
{"AÑO":1969,"PRIMERO":" Eddy Merckx","EQUIPO":"Faema","PUNTOS":244,"OTRAS":"-"},
{"AÑO":1968,"PRIMERO":" Franco Bitossi","EQUIPO":"Italia","PUNTOS":241,"OTRAS":"-"},
{"AÑO":1967,"PRIMERO":" Jan Janssen","EQUIPO":"Holanda","PUNTOS":154,"OTRAS":"-"},
{"AÑO":1966,"PRIMERO":" Willy Planckaert","EQUIPO":"Roméo-Smith's","PUNTOS":211,"OTRAS":"-"},
{"AÑO":1965,"PRIMERO":" Jan Janssen","EQUIPO":"Pelforth-Sauvage-Lejeune","PUNTOS":144,"OTRAS":"-"},
{"AÑO":1964,"PRIMERO":" Jan Janssen","EQUIPO":"Pelforth-Sauvage-Lejeune","PUNTOS":208,"OTRAS":"-"},
{"AÑO":1963,"PRIMERO":" Rik Van Looy","EQUIPO":"G.B.C.-Libertas","PUNTOS":275,"OTRAS":"-"},
{"AÑO":1962,"PRIMERO":" Rudi Altig","EQUIPO":"Saint-Raphaël-Helyett-Hutchinson","PUNTOS":173,"OTRAS":"-"},
{"AÑO":1961,"PRIMERO":" André Darrigade","EQUIPO":"Francia","PUNTOS":174,"OTRAS":"-"},
{"AÑO":1960,"PRIMERO":" Jean Graczyk","EQUIPO":"Francia","PUNTOS":74,"OTRAS":"-"},
{"AÑO":1959,"PRIMERO":" André Darrigade","EQUIPO":"Francia","PUNTOS":613,"OTRAS":"-"},
{"AÑO":1958,"PRIMERO":" Jean Graczyk","EQUIPO":"Francia","PUNTOS":347,"OTRAS":"-"},
{"AÑO":1957,"PRIMERO":" Jean Forestier","EQUIPO":"Francia","PUNTOS":301,"OTRAS":"-"},
{"AÑO":1956,"PRIMERO":" Stan Ockers","EQUIPO":"Bélgica","PUNTOS":280,"OTRAS":"-"},
{"AÑO":1955,"PRIMERO":" Stan Ockers","EQUIPO":"Bélgica","PUNTOS":322,"OTRAS":"-"},
{"AÑO":1954,"PRIMERO":" Ferdi Kübler","EQUIPO":"Suiza","PUNTOS":"215,5","OTRAS":"-"},
{"AÑO":1953,"PRIMERO":" Fritz Schär","EQUIPO":"Suiza","PUNTOS":271,"OTRAS":"-"}];

//Datos de los ganadores del maillot de joven
var JSONObjectJoven=[{"AÑO":2016,"NOMBRE":"Adam Yates","PAIS":" Reino Unido","EQUIPO":"Orica Bike Exchange"},
{"AÑO":2015,"NOMBRE":"Nairo Quintana","PAIS":" Colombia","EQUIPO":"Movistar Team"},
{"AÑO":2014,"NOMBRE":"Thibaut Pinot","PAIS":" Francia","EQUIPO":"FDJ"},
{"AÑO":2013,"NOMBRE":"Nairo Quintana","PAIS":" Colombia","EQUIPO":"Movistar Team"},
{"AÑO":2012,"NOMBRE":"Tejay van Garderen","PAIS":" Estados Unidos","EQUIPO":"BMC Racing"},
{"AÑO":2011,"NOMBRE":"Pierre Rolland","PAIS":" Francia","EQUIPO":"Europcar"},
{"AÑO":2010,"NOMBRE":"Andy Schleck","PAIS":" Luxemburgo","EQUIPO":"Team Saxo Bank"},
{"AÑO":2009,"NOMBRE":"Andy Schleck","PAIS":" Luxemburgo","EQUIPO":"Team Saxo Bank"},
{"AÑO":2008,"NOMBRE":"Andy Schleck","PAIS":" Luxemburgo","EQUIPO":"CSC-Saxo Bank"},
{"AÑO":2007,"NOMBRE":"Alberto Contador","PAIS":" España","EQUIPO":"Discovery Channel"},
{"AÑO":2006,"NOMBRE":"Damiano Cunego","PAIS":" Italia","EQUIPO":"Lampre-Fondital"},
{"AÑO":2005,"NOMBRE":"Yaroslav Popovych","PAIS":" Ucrania","EQUIPO":"Discovery Channel"},
{"AÑO":2004,"NOMBRE":"Vladímir Karpets","PAIS":" Rusia","EQUIPO":"Illes Balears"},
{"AÑO":2003,"NOMBRE":"Denis Menchov","PAIS":" Rusia","EQUIPO":"iBanesto.com"},
{"AÑO":2002,"NOMBRE":"Ivan Basso","PAIS":" Italia","EQUIPO":"Fassa Bortolo"},
{"AÑO":2001,"NOMBRE":"Óscar Sevilla","PAIS":" España","EQUIPO":"Kelme-Costa Blanca"},
{"AÑO":2000,"NOMBRE":"Francisco Mancebo","PAIS":" España","EQUIPO":"Banesto"},
{"AÑO":1999,"NOMBRE":"Benoît Salmon","PAIS":" Francia","EQUIPO":"Casino"},
{"AÑO":1998,"NOMBRE":"Jan Ullrich","PAIS":" Alemania","EQUIPO":"Team Telekom"},
{"AÑO":1997,"NOMBRE":"Jan Ullrich","PAIS":" Alemania","EQUIPO":"Team Telekom"},
{"AÑO":1996,"NOMBRE":"Jan Ullrich","PAIS":" Alemania","EQUIPO":"Team Telekom"},
{"AÑO":1995,"NOMBRE":"Marco Pantani","PAIS":" Italia","EQUIPO":"Carrera"},
{"AÑO":1994,"NOMBRE":"Marco Pantani","PAIS":" Italia","EQUIPO":"Carrera"},
{"AÑO":1993,"NOMBRE":"Antonio Martín Velasco","PAIS":" España","EQUIPO":"Amaya Seguros"},
{"AÑO":1992,"NOMBRE":"Eddy Bouwmans","PAIS":" Países Bajos","EQUIPO":"Panasonic"},
{"AÑO":1991,"NOMBRE":"Alvaro Mejia","PAIS":" Colombia","EQUIPO":"Ryalco"},
{"AÑO":1990,"NOMBRE":"Gilles Delion","PAIS":" Francia","EQUIPO":"Helvetia"},
{"AÑO":1989,"NOMBRE":"Fabrice Philipot","PAIS":" Francia","EQUIPO":"Toshiba"},
{"AÑO":1988,"NOMBRE":"Erik Breukink","PAIS":" Países Bajos","EQUIPO":"Panasonic"},
{"AÑO":1987,"NOMBRE":"Raúl Alcalá","PAIS":" México","EQUIPO":"7-Eleven"},
{"AÑO":1986,"NOMBRE":"Andrew Hampsten","PAIS":" Estados Unidos","EQUIPO":"La Vie Claire"},
{"AÑO":1985,"NOMBRE":"Fabio Parra","PAIS":" Colombia","EQUIPO":"Café de Colombia"},
{"AÑO":1984,"NOMBRE":"Greg LeMond","PAIS":" Estados Unidos","EQUIPO":"Renault"},
{"AÑO":1983,"NOMBRE":"Laurent Fignon","PAIS":" Francia","EQUIPO":"Renault"},
{"AÑO":1982,"NOMBRE":"Phil Anderson","PAIS":" Australia","EQUIPO":"Peugeot"},
{"AÑO":1981,"NOMBRE":"Peter Winnen","PAIS":" Países Bajos","EQUIPO":"Capri Sonne"},
{"AÑO":1980,"NOMBRE":"Johan Van der Velde","PAIS":" Países Bajos","EQUIPO":"Ti-Raleigh"},
{"AÑO":1979,"NOMBRE":"Jean-Rene Bernaudeau","PAIS":" Francia","EQUIPO":"Renault"},
{"AÑO":1978,"NOMBRE":"Henk Lubberding","PAIS":" Países Bajos","EQUIPO":"Ti-Raleigh"},
{"AÑO":1977,"NOMBRE":"Dietrich Thurau","PAIS":" Alemania","EQUIPO":"Ti-Raleigh"},
{"AÑO":1976,"NOMBRE":"Enrique Martínez Heredia","PAIS":" España","EQUIPO":"Kas-Campagnolo"},
{"AÑO":1975,"NOMBRE":"Francesco Moser","PAIS":" Italia","EQUIPO":"Filotex"},
{"AÑO":1974,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1973,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1972,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1971,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1970,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1969,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1968,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1967,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1966,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1965,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"},
{"AÑO":1964,"NOMBRE":"No atribuido","PAIS":"No atribuido","EQUIPO":"No atribuido"}];


var JSONObjectEstadisticasGanador=[{"AÑO":2016,"GANADOR":" Chris Froome","KMTOTALES":3.36,"VMEDIA":39.639,"ETAPASTOTALES":21,"PARTICIPANTES":198,"PARTICIPANTESFINALES":160},
{"AÑO":2015,"GANADOR":" Chris Froome","KMTOTALES":3.401,"VMEDIA":38.921 ,"ETAPASTOTALES":23,"PARTICIPANTES":188,"PARTICIPANTESFINALES":159},
{"AÑO":2014,"GANADOR":" Vincenzo Nibali","KMTOTALES":3.66,"VMEDIA":40.673,"ETAPASTOTALES":21,"PARTICIPANTES":198,"PARTICIPANTESFINALES":164},
{"AÑO":2013,"GANADOR":" Chris Froome","KMTOTALES":3.403,"VMEDIA":40.538,"ETAPASTOTALES":21,"PARTICIPANTES":198,"PARTICIPANTESFINALES":169},
{"AÑO":2012,"GANADOR":" Bradley Wiggins","KMTOTALES":3.479,"VMEDIA":39.723,"ETAPASTOTALES":21,"PARTICIPANTES":198,"PARTICIPANTESFINALES":152},
{"AÑO":2011,"GANADOR":" Cadel Evans","KMTOTALES":3.452,"VMEDIA":40.043,"ETAPASTOTALES":21,"PARTICIPANTES":198,"PARTICIPANTESFINALES":167},
{"AÑO":2010,"GANADOR":" Andy Schleck","KMTOTALES":3.641,"VMEDIA":39.584,"ETAPASTOTALES":21,"PARTICIPANTES":197,"PARTICIPANTESFINALES":168},
{"AÑO":2009,"GANADOR":" Alberto Contador","KMTOTALES":3.459,"VMEDIA":40.315,"ETAPASTOTALES":21,"PARTICIPANTES":180,"PARTICIPANTESFINALES":156},
{"AÑO":2008,"GANADOR":" Carlos Sastre","KMTOTALES":3.558,"VMEDIA":40.492,"ETAPASTOTALES":21,"PARTICIPANTES":180,"PARTICIPANTESFINALES":142},
{"AÑO":2007,"GANADOR":" Alberto Contador","KMTOTALES":3.569,"VMEDIA":39.228,"ETAPASTOTALES":21,"PARTICIPANTES":189,"PARTICIPANTESFINALES":141},
{"AÑO":2006,"GANADOR":" Óscar Pereiro","KMTOTALES":3.657,"VMEDIA":40.784,"ETAPASTOTALES":21,"PARTICIPANTES":176,"PARTICIPANTESFINALES":139},
{"AÑO":2005,"GANADOR":" Lance Armstrong","KMTOTALES":3.608,"VMEDIA":41.654,"ETAPASTOTALES":21,"PARTICIPANTES":189,"PARTICIPANTESFINALES":155},
{"AÑO":2004,"GANADOR":" Lance Armstrong","KMTOTALES":3.391,"VMEDIA":40.553,"ETAPASTOTALES":21,"PARTICIPANTES":188,"PARTICIPANTESFINALES":147},
{"AÑO":2003,"GANADOR":" Lance Armstrong","KMTOTALES":3.426,"VMEDIA":40.940,"ETAPASTOTALES":21,"PARTICIPANTES":198,"PARTICIPANTESFINALES":147},
{"AÑO":2002,"GANADOR":" Lance Armstrong","KMTOTALES":3.276,"VMEDIA":39.920,"ETAPASTOTALES":21,"PARTICIPANTES":189,"PARTICIPANTESFINALES":153},
{"AÑO":2001,"GANADOR":" Lance Armstrong","KMTOTALES":3.453,"VMEDIA":40.070,"ETAPASTOTALES":21,"PARTICIPANTES":189,"PARTICIPANTESFINALES":144},
{"AÑO":2000,"GANADOR":" Lance Armstrong","KMTOTALES":3.662,"VMEDIA":39.569,"ETAPASTOTALES":21,"PARTICIPANTES":177,"PARTICIPANTESFINALES":127},
{"AÑO":1999,"GANADOR":" Lance Armstrong","KMTOTALES":3.87,"VMEDIA":40.276,"ETAPASTOTALES":21,"PARTICIPANTES":180,"PARTICIPANTESFINALES":141},
{"AÑO":1998,"GANADOR":" Marco Pantani","KMTOTALES":3.85,"VMEDIA":39.983,"ETAPASTOTALES":22,"PARTICIPANTES":189,"PARTICIPANTESFINALES":96},
{"AÑO":1997,"GANADOR":" Jan Ullrich","KMTOTALES":3.95,"VMEDIA":39.237,"ETAPASTOTALES":22,"PARTICIPANTES":198,"PARTICIPANTESFINALES":139},
{"AÑO":1996,"GANADOR":" Bjarne Riis","KMTOTALES":3.907,"VMEDIA":39.227,"ETAPASTOTALES":22,"PARTICIPANTES":198,"PARTICIPANTESFINALES":129},
{"AÑO":1995,"GANADOR":" Miguel Indurain","KMTOTALES":3.653,"VMEDIA":39.193,"ETAPASTOTALES":21,"PARTICIPANTES":189,"PARTICIPANTESFINALES":115},
{"AÑO":1994,"GANADOR":" Miguel Indurain","KMTOTALES":3.978,"VMEDIA":38.383,"ETAPASTOTALES":22,"PARTICIPANTES":189,"PARTICIPANTESFINALES":117},
{"AÑO":1993,"GANADOR":" Miguel Indurain","KMTOTALES":3.714,"VMEDIA":38.709,"ETAPASTOTALES":21,"PARTICIPANTES":180,"PARTICIPANTESFINALES":136},
{"AÑO":1992,"GANADOR":" Miguel Indurain","KMTOTALES":3.914,"VMEDIA":39.504,"ETAPASTOTALES":22,"PARTICIPANTES":198,"PARTICIPANTESFINALES":130},
{"AÑO":1991,"GANADOR":" Miguel Indurain","KMTOTALES":3.914,"VMEDIA":38.747,"ETAPASTOTALES":23,"PARTICIPANTES":198,"PARTICIPANTESFINALES":158},
{"AÑO":1990,"GANADOR":" Greg Lemond","KMTOTALES":3.504,"VMEDIA":38.621,"ETAPASTOTALES":22,"PARTICIPANTES":198,"PARTICIPANTESFINALES":156},
{"AÑO":1989,"GANADOR":" Greg Lemond","KMTOTALES":3.285,"VMEDIA":37.487,"ETAPASTOTALES":22,"PARTICIPANTES":198,"PARTICIPANTESFINALES":138},
{"AÑO":1988,"GANADOR":" Pedro Delgado","KMTOTALES":3.286,"VMEDIA":38.909,"ETAPASTOTALES":23,"PARTICIPANTES":198,"PARTICIPANTESFINALES":151},
{"AÑO":1987,"GANADOR":" Stephen Roche","KMTOTALES":4.231,"VMEDIA":36.645,"ETAPASTOTALES":26,"PARTICIPANTES":207,"PARTICIPANTESFINALES":135},
{"AÑO":1986,"GANADOR":" Greg Lemond","KMTOTALES":4.094,"VMEDIA":37.020,"ETAPASTOTALES":24,"PARTICIPANTES":210,"PARTICIPANTESFINALES":132},
{"AÑO":1985,"GANADOR":" Bernard Hinault","KMTOTALES":4.109,"VMEDIA":36.232,"ETAPASTOTALES":23,"PARTICIPANTES":180,"PARTICIPANTESFINALES":144},
{"AÑO":1984,"GANADOR":" Laurent Fignon","KMTOTALES":4.021,"VMEDIA":35.882 ,"ETAPASTOTALES":23,"PARTICIPANTES":170,"PARTICIPANTESFINALES":124},
{"AÑO":1983,"GANADOR":" Laurent Fignon","KMTOTALES":3.809,"VMEDIA":36.230,"ETAPASTOTALES":23,"PARTICIPANTES":140,"PARTICIPANTESFINALES":88},
{"AÑO":1982,"GANADOR":" Bernard Hinault","KMTOTALES":3.507,"VMEDIA":38.059,"ETAPASTOTALES":23,"PARTICIPANTES":170,"PARTICIPANTESFINALES":125},
{"AÑO":1981,"GANADOR":" Bernard Hinault","KMTOTALES":3.753,"VMEDIA":38.960,"ETAPASTOTALES":25,"PARTICIPANTES":150,"PARTICIPANTESFINALES":121},
{"AÑO":1980,"GANADOR":" Joop Zoetemelk","KMTOTALES":3.842,"VMEDIA":35.144,"ETAPASTOTALES":25,"PARTICIPANTES":130,"PARTICIPANTESFINALES":85},
{"AÑO":1979,"GANADOR":" Bernard Hinault","KMTOTALES":3.765,"VMEDIA":36.513,"ETAPASTOTALES":25,"PARTICIPANTES":150,"PARTICIPANTESFINALES":89},
{"AÑO":1978,"GANADOR":" Bernard Hinault","KMTOTALES":4.908,"VMEDIA":36.084,"ETAPASTOTALES":25,"PARTICIPANTES":110,"PARTICIPANTESFINALES":78},
{"AÑO":1977,"GANADOR":" Bernard Thévenet","KMTOTALES":4.096,"VMEDIA":35.419,"ETAPASTOTALES":28,"PARTICIPANTES":100,"PARTICIPANTESFINALES":53},
{"AÑO":1976,"GANADOR":" Lucien Van Impe","KMTOTALES":4.017,"VMEDIA":34.518,"ETAPASTOTALES":28,"PARTICIPANTES":130,"PARTICIPANTESFINALES":87},
{"AÑO":1975,"GANADOR":" Bernard Thévenet","KMTOTALES":4,"VMEDIA":34.906,"ETAPASTOTALES":26,"PARTICIPANTES":140,"PARTICIPANTESFINALES":86},
{"AÑO":1974,"GANADOR":" Eddy Merckx","KMTOTALES":4.098,"VMEDIA":35.241,"ETAPASTOTALES":28,"PARTICIPANTES":130,"PARTICIPANTESFINALES":105},
{"AÑO":1973,"GANADOR":" Luis Ocaña","KMTOTALES":4.09,"VMEDIA":33.407,"ETAPASTOTALES":28,"PARTICIPANTES":132,"PARTICIPANTESFINALES":87},
{"AÑO":1972,"GANADOR":" Eddy Merckx","KMTOTALES":3.846,"VMEDIA":35.514,"ETAPASTOTALES":28,"PARTICIPANTES":132,"PARTICIPANTESFINALES":88},
{"AÑO":1971,"GANADOR":" Eddy Merckx","KMTOTALES":3.604,"VMEDIA":38.084,"ETAPASTOTALES":25,"PARTICIPANTES":130,"PARTICIPANTESFINALES":94},
{"AÑO":1970,"GANADOR":" Eddy Merckx","KMTOTALES":4.254,"VMEDIA":35.409,"ETAPASTOTALES":30,"PARTICIPANTES":150,"PARTICIPANTESFINALES":100},
{"AÑO":1969,"GANADOR":" Eddy Merckx","KMTOTALES":4.117,"VMEDIA":35.409,"ETAPASTOTALES":26,"PARTICIPANTES":130,"PARTICIPANTESFINALES":86},
{"AÑO":1968,"GANADOR":" Jan Janssen","KMTOTALES":4.758,"VMEDIA":33.556,"ETAPASTOTALES":26,"PARTICIPANTES":110,"PARTICIPANTESFINALES":63},
{"AÑO":1967,"GANADOR":" Roger Pingeon","KMTOTALES":4.758,"VMEDIA":34.756,"ETAPASTOTALES":25,"PARTICIPANTES":130,"PARTICIPANTESFINALES":88},
{"AÑO":1966,"GANADOR":" Lucien Aimar","KMTOTALES":4.322,"VMEDIA":36.760,"ETAPASTOTALES":26,"PARTICIPANTES":132,"PARTICIPANTESFINALES":82},
{"AÑO":1965,"GANADOR":" Felice Gimondi","KMTOTALES":4.177,"VMEDIA":35.886,"ETAPASTOTALES":24,"PARTICIPANTES":130,"PARTICIPANTESFINALES":96},
{"AÑO":1964,"GANADOR":" Jacques Anquetil","KMTOTALES":4.504,"VMEDIA":35.419,"ETAPASTOTALES":25,"PARTICIPANTES":132,"PARTICIPANTESFINALES":81}] ;


var JSONObjectMontanaPuntos =[{"AÑO":2016,"PRIMERO":" Rafal Majka","EQUIPO":"Tinkoff","PUNTOS":209,"OTROS":"-"},
{"AÑO":2015,"PRIMERO":" Chris Froome","EQUIPO":"Team Sky","PUNTOS":119,"OTROS":" Maillot amarillo"},
{"AÑO":2014,"PRIMERO":" Rafal Majka","EQUIPO":"Tinkoff-Saxo","PUNTOS":181,"OTROS":"-"},
{"AÑO":2013,"PRIMERO":" Nairo Quintana","EQUIPO":"Movistar Team","PUNTOS":147,"OTROS":" Maillot blanco"},
{"AÑO":2012,"PRIMERO":" Thomas Voeckler","EQUIPO":"Europcar","PUNTOS":135,"OTROS":"-"},
{"AÑO":2011,"PRIMERO":" Samuel Sánchez","EQUIPO":"Euskaltel-Euskadi","PUNTOS":108,"OTROS":"-"},
{"AÑO":2010,"PRIMERO":" Anthony Charteau","EQUIPO":"Bbox Bouygues Telecom","PUNTOS":143,"OTROS":"-"},
{"AÑO":2009,"PRIMERO":" Egoi Martínez","EQUIPO":"Euskaltel-Euskadi","PUNTOS":135,"OTROS":"-"},
{"AÑO":2008,"PRIMERO":" Carlos Sastre","EQUIPO":"Team CSC-Saxo Bank","PUNTOS":80,"OTROS":" Maillot amarillo"},
{"AÑO":2007,"PRIMERO":" Mauricio Soler","EQUIPO":"Barloworld","PUNTOS":206,"OTROS":"-"},
{"AÑO":2006,"PRIMERO":" Michael Rasmussen","EQUIPO":"Rabobank","PUNTOS":166,"OTROS":"-"},
{"AÑO":2005,"PRIMERO":" Michael Rasmussen","EQUIPO":"Rabobank","PUNTOS":185,"OTROS":"-"},
{"AÑO":2004,"PRIMERO":" Richard Virenque","EQUIPO":"Quick Step-Davitamon","PUNTOS":266,"OTROS":"Combatividad"},
{"AÑO":2003,"PRIMERO":" Richard Virenque","EQUIPO":"Quick Step-Davitamon","PUNTOS":324,"OTROS":"-"},
{"AÑO":2002,"PRIMERO":" Laurent Jalabert","EQUIPO":"Team CSC-Tiscali","PUNTOS":262,"OTROS":"Combatividad"},
{"AÑO":2001,"PRIMERO":" Laurent Jalabert","EQUIPO":"Team CSC-Tiscali","PUNTOS":258,"OTROS":"Combatividad"},
{"AÑO":2000,"PRIMERO":" Santiago Botero","EQUIPO":"Kelme-Costa Blanca","PUNTOS":347,"OTROS":"-"},
{"AÑO":1999,"PRIMERO":" Richard Virenque","EQUIPO":"Team Polti","PUNTOS":279,"OTROS":"-"},
{"AÑO":1998,"PRIMERO":" Christophe Rinero","EQUIPO":"Cofidis","PUNTOS":200,"OTROS":"-"},
{"AÑO":1997,"PRIMERO":" Richard Virenque","EQUIPO":"Festina","PUNTOS":579,"OTROS":"Combatividad"},
{"AÑO":1996,"PRIMERO":" Richard Virenque","EQUIPO":"Festina","PUNTOS":383,"OTROS":"Combatividad"},
{"AÑO":1995,"PRIMERO":" Richard Virenque","EQUIPO":"Festina","PUNTOS":438,"OTROS":"-"},
{"AÑO":1994,"PRIMERO":" Richard Virenque","EQUIPO":"Festina","PUNTOS":392,"OTROS":"-"},
{"AÑO":1993,"PRIMERO":" Tony Rominger","EQUIPO":"CLAS-Cajastur","PUNTOS":449,"OTROS":"-"},
{"AÑO":1992,"PRIMERO":" Claudio Chiappucci","EQUIPO":"Carrera Jeans-Tassoni","PUNTOS":410,"OTROS":"Combatividad"},
{"AÑO":1991,"PRIMERO":" Claudio Chiappucci","EQUIPO":"Carrera Jeans","PUNTOS":312,"OTROS":"Combatividad"},
{"AÑO":1990,"PRIMERO":" Thierry Claveyrolat","EQUIPO":"RMO","PUNTOS":321,"OTROS":"-"},
{"AÑO":1989,"PRIMERO":" Gert-Jan Theunisse","EQUIPO":"PDM","PUNTOS":441,"OTROS":"-"},
{"AÑO":1988,"PRIMERO":" Steven Rooks","EQUIPO":"PDM","PUNTOS":326,"OTROS":"Combinada"},
{"AÑO":1987,"PRIMERO":" Luis Herrera","EQUIPO":"Varta-Café de Colombia","PUNTOS":452,"OTROS":"-"},
{"AÑO":1986,"PRIMERO":" Bernard Hinault","EQUIPO":"La Vie Claire-Radar","PUNTOS":351,"OTROS":"Combatividad"},
{"AÑO":1985,"PRIMERO":" Luis Herrera","EQUIPO":"Varta-Café de Colombia-Mavic","PUNTOS":440,"OTROS":"-"},
{"AÑO":1984,"PRIMERO":" Robert Millar","EQUIPO":"Peugeot","PUNTOS":284,"OTROS":"-"},
{"AÑO":1983,"PRIMERO":" Lucien Van Impe","EQUIPO":"Metauro Mobili-Pinarello","PUNTOS":272,"OTROS":"-"},
{"AÑO":1982,"PRIMERO":" Bernard Vallet","EQUIPO":"La Redoute-Motobecane","PUNTOS":278,"OTROS":"-"},
{"AÑO":1981,"PRIMERO":" Lucien Van Impe","EQUIPO":"Boston-Mavic","PUNTOS":284,"OTROS":"-"},
{"AÑO":1980,"PRIMERO":" Raymond Martin","EQUIPO":"Miko-Mercier-Vivagel","PUNTOS":223,"OTROS":"-"},
{"AÑO":1979,"PRIMERO":" Giovanni Battaglin","EQUIPO":"Inoxpran","PUNTOS":239,"OTROS":"-"},
{"AÑO":1978,"PRIMERO":" Mariano Martínez","EQUIPO":"Jobo-Superia","PUNTOS":187,"OTROS":"-"},
{"AÑO":1977,"PRIMERO":" Lucien Van Impe","EQUIPO":"Lejeune-BP","PUNTOS":244,"OTROS":"-"},
{"AÑO":1976,"PRIMERO":" Giancarlo Bellini","EQUIPO":"Brooklyn","PUNTOS":170,"OTROS":"-"},
{"AÑO":1975,"PRIMERO":" Lucien Van Impe","EQUIPO":"Gitane-Campagnolo","PUNTOS":342,"OTROS":"-"},
{"AÑO":1974,"PRIMERO":" Domingo Perurena","EQUIPO":"Kas","PUNTOS":161,"OTROS":"-"},
{"AÑO":1973,"PRIMERO":" Pedro Torres","EQUIPO":"La Casera-Bahamontes","PUNTOS":225,"OTROS":"-"},
{"AÑO":1972,"PRIMERO":" Lucien Van Impe","EQUIPO":"Sonolor","PUNTOS":229,"OTROS":"-"},
{"AÑO":1971,"PRIMERO":" Lucien Van Impe","EQUIPO":"Sonolor-Lejeune","PUNTOS":228,"OTROS":"-"},
{"AÑO":1970,"PRIMERO":" Eddy Merckx","EQUIPO":"Faema-Faemino","PUNTOS":128,"OTROS":" Maillot amarillo"},
{"AÑO":1969,"PRIMERO":" Eddy Merckx","EQUIPO":"Faema","PUNTOS":155,"OTROS":" Maillot amarillo"},
{"AÑO":1968,"PRIMERO":" Aurelio González","EQUIPO":"España","PUNTOS":96,"OTROS":"-"},
{"AÑO":1967,"PRIMERO":" Julio Jiménez","EQUIPO":"España","PUNTOS":122,"OTROS":"-"},
{"AÑO":1966,"PRIMERO":" Julio Jiménez","EQUIPO":"Ford-France–Hutchinson","PUNTOS":123,"OTROS":"-"},
{"AÑO":1965,"PRIMERO":" Julio Jiménez","EQUIPO":"KAS-Kaskol","PUNTOS":133,"OTROS":"-"},
{"AÑO":1964,"PRIMERO":" Federico Bahamontes","EQUIPO":"Margnat–Paloma–Dunlop","PUNTOS":173,"OTROS":"-"},
{"AÑO":1963,"PRIMERO":" Federico Bahamontes","EQUIPO":"Margnat–Paloma–Dunlop","PUNTOS":147,"OTROS":"-"},
{"AÑO":1962,"PRIMERO":" Federico Bahamontes","EQUIPO":"Margnat–Paloma–d'Alessandro","PUNTOS":137,"OTROS":"-"},
{"AÑO":1961,"PRIMERO":" Imerio Massignan","EQUIPO":"Italia","PUNTOS":95,"OTROS":"-"},
{"AÑO":1960,"PRIMERO":" Imerio Massignan","EQUIPO":"Italia","PUNTOS":56,"OTROS":"-"},
{"AÑO":1959,"PRIMERO":" Federico Bahamontes","EQUIPO":"España","PUNTOS":73,"OTROS":" Maillot amarillo"},
{"AÑO":1958,"PRIMERO":" Federico Bahamontes","EQUIPO":"España","PUNTOS":79,"OTROS":"-"},
{"AÑO":1957,"PRIMERO":" Gastone Nencini","EQUIPO":"Italia","PUNTOS":44,"OTROS":"-"},
{"AÑO":1956,"PRIMERO":" Charly Gaul","EQUIPO":"Luxemburgo","PUNTOS":71,"OTROS":"-"},
{"AÑO":1955,"PRIMERO":" Charly Gaul","EQUIPO":"Luxemburgo","PUNTOS":84,"OTROS":"-"},
{"AÑO":1954,"PRIMERO":" Federico Bahamontes","EQUIPO":"España","PUNTOS":95,"OTROS":"-"},
{"AÑO":1953,"PRIMERO":" Jesús Loroño","EQUIPO":"España","PUNTOS":54,"OTROS":"-"},
{"AÑO":1952,"PRIMERO":" Fausto Coppi","EQUIPO":"Italia","PUNTOS":92,"OTROS":" Maillot amarillo"},
{"AÑO":1951,"PRIMERO":" Raphaël Géminiani","EQUIPO":"Francia","PUNTOS":66,"OTROS":"-"},
{"AÑO":1950,"PRIMERO":" Louison Bobet","EQUIPO":"França","PUNTOS":58,"OTROS":"-"},
{"AÑO":1949,"PRIMERO":" Fausto Coppi","EQUIPO":"Italia","PUNTOS":81,"OTROS":" Maillot amarillo"},
{"AÑO":1948,"PRIMERO":" Gino Bartali","EQUIPO":"Italia","PUNTOS":62,"OTROS":" Maillot amarillo"},
{"AÑO":1947,"PRIMERO":" Pierre Brambilla","EQUIPO":"Italia","PUNTOS":98,"OTROS":"-"},
{"AÑO":1939,"PRIMERO":" Sylvère Maes","EQUIPO":"Bélgica","PUNTOS":86,"OTROS":" Maillot amarillo"},
{"AÑO":1938,"PRIMERO":" Gino Bartali","EQUIPO":"Italia","PUNTOS":107,"OTROS":" Maillot amarillo"},
{"AÑO":1937,"PRIMERO":" Félicien Vervaecke","EQUIPO":"Bélgica","PUNTOS":114,"OTROS":"-"},
{"AÑO":1936,"PRIMERO":" Julián Berrendero","EQUIPO":"España-Luxemburgo","PUNTOS":132,"OTROS":"-"},
{"AÑO":1935,"PRIMERO":" Félicien Vervaecke","EQUIPO":"Bèlgica","PUNTOS":118,"OTROS":"-"},
{"AÑO":1934,"PRIMERO":" René Vietto","EQUIPO":"França","PUNTOS":111,"OTROS":"-"},
{"AÑO":1933,"PRIMERO":" Vicente Trueba","EQUIPO":"Touriste-routier","PUNTOS":134,"OTROS":"-"}] ;

//Datos de las etapas del tour de 2017
var JSONObjectStages=[
  {
    "ID": 1,
    "NAME": "STAGE 01",
    "DISTANCE": "14",
    "ROUTE": "KMDÜSSELDORF / DÜSSELDORF",
    "WINNER": "THOMAS G.",
    "UCI_CODE": "SKY",
    "TYPE": "Individual Time Trial",
    "DATE": "Saturday July 1st",
    "KEY_MOMENT": " Geraint Thomas takes his first win at 32"
  },
  {
    "ID": 2,
    "NAME": "STAGE 02",
    "DISTANCE": "203.5",
    "ROUTE": "DÜSSELDORF / LIÈGE",
    "WINNER": "KITTEL M.",
    "UCI_CODE": "QST",
    "TYPE": "Flat",
    "DATE": "Sunday July 2nd",
    "KEY_MOMENT": " Marcel Kittel makes it ten"
  },
  {
    "ID": 3,
    "NAME": "STAGE 03",
    "DISTANCE": "212.5",
    "ROUTE": "VERVIERS / LONGWY",
    "WINNER": "SAGAN P.",
    "UCI_CODE": "BOH",
    "TYPE": "Hilly",
    "DATE": "Monday July 3rd",
    "KEY_MOMENT": " Peter Sagan meets the expectations"
  },
  {
    "ID": 4,
    "NAME": "STAGE 04",
    "DISTANCE": "207.5",
    "ROUTE": "MONDORF-LES-BAINS / VITTEL",
    "WINNER": "DEMARE A.",
    "UCI_CODE": "FDJ",
    "TYPE": "Flat",
    "DATE": "Tuesday July 4th",
    "KEY_MOMENT": " Arnaud Démare takes his first Tour de France victory"
  },
  {
    "ID": 5,
    "NAME": "STAGE 05",
    "DISTANCE": "160.5",
    "ROUTE": "VITTEL / LA PLANCHE DES BELLES FILLES",
    "WINNER": "ARU F.",
    "UCI_CODE": "AST",
    "TYPE": "Hilly",
    "DATE": "Wednesday July 5th",
    "KEY_MOMENT": " Fabio Aru on the path of Vincenzo Nibali"
  },
  {
    "ID": 6,
    "NAME": "STAGE 06",
    "DISTANCE": "216",
    "ROUTE": "VESOUL / TROYES",
    "WINNER": "KITTEL M.",
    "UCI_CODE": "QST",
    "TYPE": "Flat",
    "DATE": "Thursday July 6th",
    "KEY_MOMENT": " Kittel makes it two in Troyes"
  },
  {
    "ID": 7,
    "NAME": "STAGE 07",
    "DISTANCE": "213.5",
    "ROUTE": "TROYES / NUITS-SAINT-GEORGES",
    "WINNER": "KITTEL M.",
    "UCI_CODE": "QST",
    "TYPE": "Flat",
    "DATE": "Friday July 7th",
    "KEY_MOMENT": " Marcel Kittel over the moon"
  },
  {
    "ID": 8,
    "NAME": "STAGE 08",
    "DISTANCE": "187.5",
    "ROUTE": "DOLE / STATION DES ROUSSES",
    "WINNER": "CALMEJANE L.",
    "UCI_CODE": "DEN",
    "TYPE": "Hilly",
    "DATE": "Saturday July 8th",
    "KEY_MOMENT": " Lilian Calmejane claims first Tour de France victory"
  },
  {
    "ID": 9,
    "NAME": "STAGE 09",
    "DISTANCE": "181.5",
    "ROUTE": "NANTUA / CHAMBÉRY",
    "WINNER": "URAN R.",
    "UCI_CODE": "CDT",
    "TYPE": "Mountain",
    "DATE": "Sunday July 9th",
    "KEY_MOMENT": " Rigoberto Uran takes his revenge"
  },
  {
    "ID": 10,
    "NAME": "STAGE 10",
    "DISTANCE": "178",
    "ROUTE": "PÉRIGUEUX / BERGERAC",
    "WINNER": "KITTEL M.",
    "UCI_CODE": "QST",
    "TYPE": "Flat",
    "DATE": "Tuesday July 11th",
    "KEY_MOMENT": " Marcel Kittel does it again"
  },
  {
    "ID": 11,
    "NAME": "STAGE 11",
    "DISTANCE": "203.5",
    "ROUTE": "EYMET / PAU",
    "WINNER": "KITTEL M.",
    "UCI_CODE": "QST",
    "TYPE": "Flat",
    "DATE": "Wednesday July 12th",
    "KEY_MOMENT": "Marcel Kittel is unstoppable"
  },
  {
    "ID": 12,
    "NAME": "STAGE 12",
    "DISTANCE": "214.5",
    "ROUTE": "PAU / PEYRAGUDES",
    "WINNER": "BARDET R.",
    "UCI_CODE": "ALM",
    "TYPE": "Mountain",
    "DATE": "Thursday July 13th",
    "KEY_MOMENT": " Bardet wins at Peyragudes &  Aru takes the yellow jersey"
  },
  {
    "ID": 13,
    "NAME": "STAGE 13",
    "DISTANCE": "101",
    "ROUTE": "SAINT-GIRONS / FOIX",
    "WINNER": "BARGUIL W.",
    "UCI_CODE": "SUN",
    "TYPE": "Mountain",
    "DATE": "Friday July 14th",
    "KEY_MOMENT": " Warren Barguil scores for France on Bastille Day"
  },
  {
    "ID": 14,
    "NAME": "STAGE 14",
    "DISTANCE": "181.5",
    "ROUTE": "BLAGNAC / RODEZ",
    "WINNER": "MATTHEWS M.",
    "UCI_CODE": "SUN",
    "TYPE": "Hilly",
    "DATE": "Saturday July 15th",
    "KEY_MOMENT": " Michael Matthews dethrones the Olympic champion"
  },
  {
    "ID": 15,
    "NAME": "STAGE 15",
    "DISTANCE": "189.5",
    "ROUTE": "LAISSAC-SÉVÉRAC L'ÉGLISE / LE PUY-EN-VELAY",
    "WINNER": "MOLLEMA B.",
    "UCI_CODE": "TFS",
    "TYPE": "Hilly",
    "DATE": "Sunday July 16th",
    "KEY_MOMENT": "Bauke Mollema takes his first Tour de France victory"
  },
  {
    "ID": 16,
    "NAME": "STAGE 16",
    "DISTANCE": "165",
    "ROUTE": "LE PUY-EN-VELAY / ROMANS-SUR-ISÈRE",
    "WINNER": "MATTHEWS M.",
    "UCI_CODE": "SUN",
    "TYPE": "Flat",
    "DATE": "Tuesday July 18th",
    "KEY_MOMENT": "Michael Matthews makes it two... Boasson Hagen also"
  },
  {
    "ID": 17,
    "NAME": "STAGE 17",
    "DISTANCE": "183",
    "ROUTE": "LA MURE / SERRE-CHEVALIER",
    "WINNER": "ROGLIC P.",
    "UCI_CODE": "TLJ",
    "TYPE": "Mountain",
    "DATE": "Wednesday July 19th",
    "KEY_MOMENT": " Primoz Roglic -  what a jump!"
  },
  {
    "ID": 18,
    "NAME": "STAGE 18",
    "DISTANCE": "179.5",
    "ROUTE": "BRIANÇON / IZOARD",
    "WINNER": "BARGUIL W.",
    "UCI_CODE": "SUN",
    "TYPE": "Mountain",
    "DATE": "Thursday July 20th",
    "KEY_MOMENT": " Warren Barguil takes the polka dot jersey very high"
  },
  {
    "ID": 19,
    "NAME": "STAGE 19",
    "DISTANCE": "222.5",
    "ROUTE": "EMBRUN / SALON-DE-PROVENCE",
    "WINNER": "BOASSON HAGEN E.",
    "UCI_CODE": "DDD",
    "TYPE": "Flat",
    "DATE": "Friday July 21st",
    "KEY_MOMENT": " Boasson Hagen spoils Belgium's national day party"
  },
  {
    "ID": 20,
    "NAME": "STAGE 20",
    "DISTANCE": "22.5",
    "ROUTE": "MARSEILLE / MARSEILLE",
    "WINNER": "BODNAR M.",
    "UCI_CODE": "BOH",
    "TYPE": "Individual Time Trial ",
    "DATE": "Saturday July 22nd",
    "KEY_MOMENT": "Bodnar wins Marseille time trial Froome retains the lead"
  },
  {
    "ID": 21,
    "NAME": "STAGE 21",
    "DISTANCE": "103",
    "ROUTE": "MONTGERON / PARIS CHAMPS-ÉLYSÉES",
    "WINNER": "GROENEWEGEN D.",
    "UCI_CODE": "TLJ",
    "TYPE": "Flat",
    "DATE": "Sunday July 23rd",
    "KEY_MOMENT": " Last sprint for Groenewegen &  Froome wins his fourth Tour"
  }
];


var JSONObjectTeams=[
  {
    "ID": 1,
    "UCI_CODE": "SKY",
    "NAME": " TEAM SKY",
    "COUNTRY": "Great Britain",
    "STAGE_VICTORIES": 1,
    "RIDERS": 8
  },
  {
    "ID": 2,
    "UCI_CODE": "ALM",
    "NAME": "AG2R LA MONDIALE",
    "COUNTRY": "France",
    "STAGE_VICTORIES": 1,
    "RIDERS": 9
  },
  {
    "ID": 3,
    "UCI_CODE": "TFS",
    "NAME": "TREK - SEGAFREDO",
    "COUNTRY": "United States",
    "STAGE_VICTORIES": 1,
    "RIDERS": 8
  },
  {
    "ID": 4,
    "UCI_CODE": "BMC",
    "NAME": "BMC RACING TEAM",
    "COUNTRY": "United States",
    "STAGE_VICTORIES": 0,
    "RIDERS": 8
  },
  {
    "ID": 5,
    "UCI_CODE": "ORS",
    "NAME": "ORICA - SCOTT",
    "COUNTRY": "Australia",
    "STAGE_VICTORIES": 0,
    "RIDERS": 8
  },
  {
    "ID": 6,
    "UCI_CODE": "MOV",
    "NAME": "MOVISTAR TEAM",
    "COUNTRY": "Spain",
    "STAGE_VICTORIES": 1,
    "RIDERS": 8
  },
  {
    "ID": 7,
    "UCI_CODE": "CDT",
    "NAME": "CANNONDALE DRAPAC PROFESSIONAL",
    "COUNTRY": "United States",
    "STAGE_VICTORIES": 1,
    "RIDERS": 9
  },
  {
    "ID": 8,
    "UCI_CODE": "FVC",
    "NAME": "TEAM FORTUNEO - OSCARO",
    "COUNTRY": "France",
    "STAGE_VICTORIES": 0,
    "RIDERS": 8
  },
  {
    "ID": 9,
    "UCI_CODE": "LTS",
    "NAME": "LOTTO SOUDAL",
    "COUNTRY": "Belgium",
    "STAGE_VICTORIES": 0,
    "RIDERS": 7
  },
  {
    "ID": 10,
    "UCI_CODE": "AST",
    "NAME": "ASTANA PRO TEAM",
    "COUNTRY": "Kazakhstan",
    "STAGE_VICTORIES": 1,
    "RIDERS": 7
  },
  {
    "ID": 11,
    "UCI_CODE": "UAD",
    "NAME": "UAE TEAM EMIRATES",
    "COUNTRY": "United Arab Emirates",
    "STAGE_VICTORIES": 0,
    "RIDERS": 8
  },
  {
    "ID": 12,
    "UCI_CODE": "SUN",
    "NAME": "TEAM SUNWEB",
    "COUNTRY": "Germany",
    "STAGE_VICTORIES": 4,
    "RIDERS": 9
  },
  {
    "ID": 13,
    "UCI_CODE": "DEN",
    "NAME": "DIRECT ENERGIE",
    "COUNTRY": "France",
    "STAGE_VICTORIES": 1,
    "RIDERS": 9
  },
  {
    "ID": 14,
    "UCI_CODE": "WGG",
    "NAME": "WANTY - GROUPE GOBERT",
    "COUNTRY": "Belgium",
    "STAGE_VICTORIES": 0,
    "RIDERS": 9
  },
  {
    "ID": 15,
    "UCI_CODE": "QST",
    "NAME": "QUICK - STEP FLOORS",
    "COUNTRY": "Belgium",
    "STAGE_VICTORIES": 5,
    "RIDERS": 6
  },
  {
    "ID": 16,
    "UCI_CODE": "COF",
    "NAME": "COFIDIS - SOLUTIONS CREDITS",
    "COUNTRY": "France",
    "STAGE_VICTORIES": 0,
    "RIDERS": 9
  },
  {
    "ID": 17,
    "UCI_CODE": "TLJ",
    "NAME": "TEAM LOTTO NL - JUMBO",
    "COUNTRY": "Netherlands",
    "STAGE_VICTORIES": 2,
    "RIDERS": 5
  },
  {
    "ID": 18,
    "UCI_CODE": "BOH",
    "NAME": " BORA - HANSGROHE",
    "COUNTRY": "Germany",
    "STAGE_VICTORIES": 2,
    "RIDERS": 6
  },
  {
    "ID": 19,
    "UCI_CODE": "KAT",
    "NAME": "TEAM KATUSHA ALPECIN",
    "COUNTRY": "Switzerland",
    "STAGE_VICTORIES": 0,
    "RIDERS": 9
  },
  {
    "ID": 20,
    "UCI_CODE": "TBM",
    "NAME": "BAHRAIN - MERIDA",
    "COUNTRY": "Bahrein",
    "STAGE_VICTORIES": 0,
    "RIDERS": 7
  },
  {
    "ID": 21,
    "UCI_CODE": "DDD",
    "NAME": "TEAM DIMENSION DATA",
    "COUNTRY": "South Africa",
    "STAGE_VICTORIES": 1,
    "RIDERS": 7
  },
  {
    "ID": 22,
    "UCI_CODE": "FDJ",
    "NAME": "FDJ FRANCE",
    "COUNTRY": "France",
    "STAGE_VICTORIES": 1,
    "RIDERS": 3
  }
];