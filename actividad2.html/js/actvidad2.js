	function procesoinicial(){
	fase1 = prompt("Antes de inciar favor ingrese la clave que se le asigno en campaña");
	clave = 2345612;
	if (fase1 == clave) {
		alert("Contraseña correcta");
		document.write("<h1>Bienvenido al sistema de votación favor ingrese su postre favorito</h1>")
		document.write("<img src=img/helado.jpg>");
		document.write("<input type=submit value=Vote id=Voto1>");
		document.write("<img src=img/pastellava.jpg>");
		document.write("<input type=submit value=Vote id=Voto2>");
		document.write("<img src=img/pastelqueso.jpg>");
		document.write("<input type=submit value=Vote id=Voto3>");
		document.write("<img src=img/flan.jpg>");
		document.write("<input type=submit value=Vote id=Voto4>")
		document.write("<br><br><br><button onclick='Funcion()'>PARAR ELECCIONES</button>")


	}else{
		alert("Contraseña Incorrecta")
	}

	function Funcion(){
		button.addEventListener("button",Funcion);
		alert("Se han detenido las votaciones");
	}
}

procesoinicial();