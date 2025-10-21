// Inizializza l'indice della slide a 1 (la prima slide)
let slideIndex = 1;

// Mostra la prima slide quando la pagina viene caricata
showSlides(slideIndex);

// Funzione per avanzare o tornare indietro tra le slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Funzione per visualizzare una slide specifica (cliccando sui pallini)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Funzione principale che gestisce la logica dello slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Se l'indice 'n' supera il numero di slide, torna alla prima
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  // Se l'indice 'n' è minore di 1, va all'ultima slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // 1. Nasconde tutte le slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 2. Rimuove la classe "active" da tutti i pallini
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // 3. Mostra la slide corrente
  slides[slideIndex - 1].style.display = "block";
  
  // 4. Aggiunge la classe "active" al pallino corrispondente
  dots[slideIndex - 1].className += " active";
}
