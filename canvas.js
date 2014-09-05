var dibujo, lienzo;
function inicio()
{
	dibujo =  document.getElementById("dibujito"); 
	lienzo = dibujo.getContext("2d"); //obtengo el contexto bidireccionar
	lienzo.moveTo(100,100); //arranco en coordenadas 100, 100
	lienzo.lineTo(200,100); //muevo hasta 200,100
	lienzo.strokestyle = "green"; //defino el color del trazo
	lienzo.stroke(); //dibujo


	lienzo.beginPath();
	lienzo.strokeStyle = "blue";
	lienzo.arc(150,150,100, (Math.PI * 2), false);
	lienzo.closePath();
	lienzo.stroke();

}