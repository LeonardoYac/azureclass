function miTab1(){ // home
	document.getElementById("tab1").style.display="block";
	document.getElementById("tab2").style.display="none";
	document.getElementById("tab3").style.display="none";
	//document.getElementById("tab5").style.display="none";
	document.getElementById("tab6").style.display="none";
	scrollSuave('#tab1', 400, 200);
}
function miTab2(){ // about 
	document.getElementById("tab2").style.display="block";
	document.getElementById("tab1").style.display="none";
	document.getElementById("tab3").style.display="none";
	//document.getElementById("tab5").style.display="none";
	document.getElementById("tab6").style.display="none";
	scrollSuave('#tab2', 400, 200);
}
function miTab3(){ // services 
	document.getElementById("tab3").style.display="block";
	document.getElementById("tab1").style.display="none";
	document.getElementById("tab2").style.display="none";
	//document.getElementById("tab5").style.display="none";
	document.getElementById("tab6").style.display="none";
	scrollSuave('#tab3', 400, 200);
}

function miTab4(){ // contact
	document.getElementById("tab1").style.display="block";
	document.getElementById("tab2").style.display="none";
	document.getElementById("tab3").style.display="none";
	//document.getElementById("tab5").style.display="none";
	document.getElementById("tab6").style.display="none";
	//document.location.href="#idContact";
	scrollSuave('#idContact', 400, 68);
}

const scrollSuave = (objetivo, duracion, compensacion) => {
	let elemObj = document.querySelector(objetivo)
	let elemPos = elemObj.getBoundingClientRect().top - compensacion
	let posInicial = window.pageYOffset
	let tiempoInicial = null
  
	const animacion = tiempoAhora => {
	  if (tiempoInicial === null) tiempoInicial = tiempoAhora
	  tiempoPasado = tiempoAhora - tiempoInicial
	  let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
	  window.scrollTo(0, auxAnimacion)
	  if (tiempoPasado < duracion) requestAnimationFrame(animacion)
	}
	requestAnimationFrame(animacion)
}
  
const easeInOutQuad = (t, b, c, d) => {
	t /= d / 2
	if (t < 1) return c / 2 * t * t + b
	t--
	return - c / 2 * (t * (t - 2) - 1) + b
}


function miTab5(){  // out staff 
	//document.getElementById("tab5").style.display="block"; // our staff
	document.getElementById("tab1").style.display="none"; // home
	document.getElementById("tab2").style.display="none"; // about
	document.getElementById("tab3").style.display="none"; // services
	document.getElementById("tab6").style.display="none"; // pay 
	scrollSuave('#tab5', 400, 200);
}

function miTab6(){ // pay 
	document.getElementById("tab6").style.display="block";
	document.getElementById("tab1").style.display="none";
	document.getElementById("tab2").style.display="none";
	document.getElementById("tab3").style.display="none";
	//document.getElementById("tab5").style.display="none";
	scrollSuave('#tab6', 400, 200);
}

