//var list = $.getJSON("dynamicLisJSON.json");
//document.getElementById("list").innerHTML = list;
var list = JSON.stringify({
	"1" : [{"FatherId" : "none", "Name" : "Mantenimiento", "Url" : "mantenimiento/index.html", "id" : "mantenimiento1", "hasChild" : true}],
	"2" : [{"FatherId" : "none", "Name" : "Reporte", "Url" : "reportes/index.html", "id" : "report1", "hasChild" : true}],
	"3" : [{"FatherId" : "none", "Name" : "Proceso", "Url" : "proceso/index.html", "id" : "proceso1", "hasChild" : true}],
	"4" : [{"FatherId" : "none", "Name" : "Otro", "Url" : "otro/index.html", "id" : "otro1", "hasChild" : false}],
	"5" : [{"FatherId" : "mantenimiento1", "Name" : "Usuarios", "Url" : "usuarios/index.html", "id" : "usuarios1", "hasChild" : false}],
	"6" : [{"FatherId" : "mantenimiento1", "Name" : "Cuentas", "Url" : "cuentas/index.html", "id" : "cuentas1", "hasChild" : false}],
	"7" : [{"FatherId" : "report1", "Name" : "Estado General", "Url" : "estado general/index.html", "id" : "estadog1", "hasChild" : false}],
	"8" : [{"FatherId" : "report1", "Name" : "Ganancias", "Url" : "ganancias/index.html", "id" : "ganancias1", "hasChild" : false}],
	"9" : [{"FatherId" : "report1", "Name" : "Perdidas", "Url" : "perdidas/index.html", "id" : "perdidas1", "hasChild" : false}],
	"10" : [{"FatherId" : "proceso1", "Name" : "Proceso 1", "Url" : "proceso/proceso1/index.html", "id" : "proceso1_1", "hasChild" : true}],
	"11" : [{"FatherId" : "proceso1_1", "Name" : "Proceso 1.1", "Url" : "proceso/proceso1_1/index.html", "id" : "proceso1_1_1", "hasChild" : false}],
	"12" : [{"FatherId" : "proceso1", "Name" : "Proceso 2", "Url" : "proceso/proceso1_2/index.html", "id" : "proceso1_1_2", "hasChild" : false}]
	//"13":[{"FatherId":"otro1","Name":"Otro 1.1","Url":"otro/otro1_1/index.html","id":"otro1_1","hasChild":false}],
});
function load()
{
	var listf = JSON.parse(list); //convierte el json a objeto de javascript
	var posicion;
	for (var i = 1; i <= Object.keys(listf).length; i++)
	{
		posicion = i.toString();
		console.log(listf[posicion][0].Name);
		if (listf[posicion][0].hasChild )
		{
			if (listf[posicion][0].FatherId == "none")
				{
					document.getElementById("list").innerHTML += "<li name='"+listf[posicion][0].id+"'><a href = '"+listf[posicion][0].Url+"'>"+listf[posicion][0].Name+"</a></li>";
					document.getElementById("list").innerHTML += "<ul id='"+listf[posicion][0].id+"'></ul>";
				}
			else
				{
					document.getElementById(listf[posicion][0].FatherId).innerHTML +=  "<li name='"+listf[posicion][0].id+"'><a href = '"+listf[posicion][0].Url+"'>"+listf[posicion][0].Name+"</a></li>";
					document.getElementById(listf[posicion][0].FatherId).innerHTML += "<ul id='"+listf[posicion][0].id+"'></ul>";
				}			
		}
		else if(listf[posicion][0].FatherId == "none")
		{
			document.getElementById("list").innerHTML += "<li name='"+listf[posicion][0].id+"'><a href = '"+listf[posicion][0].Url+"'>"+listf[posicion][0].Name+"</a></li>";
		}
		else
		{
			document.getElementById(listf[posicion][0].FatherId).innerHTML += "<li name='"+listf[posicion][0].id+"'><a href = '"+listf[posicion][0].Url+"'>"+listf[posicion][0].Name+"</a></li>";
		}
	}
    style();
}
function style()
{
    
}