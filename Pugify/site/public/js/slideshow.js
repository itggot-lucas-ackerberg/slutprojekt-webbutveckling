var i = 0; 			// Start
var images = [];	// Bild lista
var time = 3000;	// Tid mellan varje byte
	 
// Bild lista
images[0] = "img/pugclass1.jpg";
images[1] = "img/pugclass2.jpg";
images[2] = "img/pugclass3.jpg";
images[3] = "img/pugclass4.jpg";

// Byta bild
function changeImg(){
	document.slide.src = images[i];

	// Kolla om index är under max
	if(i < images.length - 1){
	  // Lägg till 1 till index
	  i++; 
	} else { 
		// Reseta tillbaks till 0
		i = 0;
	}

	// Kör funktionen varje x sekunder
	setTimeout("changeImg()", time);
}

// Kör funktionen när sidan startas
window.onload=changeImg;