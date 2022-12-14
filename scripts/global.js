$(document).ready(function() {

    /**Ocultando os conteudos FAQ e Sobre nos*/
  $("#faq").hide();
  $("#about").hide();

  /**Codigo para a versao mobile */

  if($(window).width() < 1024){

    $("#menu-icon").show();
    $("#menu").hide();
    $("#menu-icon").click(function () {
      $("#menu").slideDown(300);
    });
    $("#exit-icon").click(function () {
      $("#menu").slideUp(300);
    });


    /**Codigo para mudanca de conteudo de pagina */
    $("#home").click(function() {
      $("#menu").slideUp(300);
      $("#slideshow").fadeIn(300);
      $("#faq").hide();
      $("#about").hide();
  
    });
    $("#about-us").click(function() {
      $("#menu").slideUp(300);
      $("#slideshow").hide();
      $("#faq").hide();
      $("#about").fadeIn(300);
  
    });
    $("#frequent").click(function() {
      $("#menu").slideUp(300);
      $("#slideshow").hide();
      $("#faq").fadeIn(300);
      $("#about").hide();
  
    });


      /**Codigo para a versao desktop */
  } else {

    /**Codigo para mudanca de conteudo de pagina */

    $("#home").click(function() {
      $("#about-us").css( {
        "color": "#78290f",
        "background-color": "#ffecd1"
      });
      $("#home").css( {
        "color": "white",
        "background-color": "#78290f"
      });
      $("#frequent").css( {
        "color": "#78290f",
        "background-color": "#ffecd1"
      });
  
      $("#slideshow").fadeIn(300);
      $("#faq").hide();
      $("#about").hide();
  
    });
    $("#about-us").click(function() {
      $("#about-us").css( {
        "color": "white",
        "background-color": "#78290f"
      });
      $("#home").css( {
        "color": "#78290f",
        "background": "#ffecd1",
      });
      $("#frequent").css( {
        "color": "#78290f",
        "background-color": "#ffecd1"
      });
  
      $("#slideshow").hide();
      $("#faq").hide();
      $("#about").fadeIn(300);
  
    });
    $("#frequent").click(function() {
      $("#about-us").css( {
        "color": "#78290f",
        "background-color": "#ffecd1"
      });
      $("#home").css( {
        "color": "#78290f",
        "background-color": "#ffecd1"
      });
      $("#frequent").css( {
        "color": "white",
        "background-color": "#78290f"
      });
  
      $("#slideshow").hide();
      $("#faq").fadeIn(300);
      $("#about").hide();
  
    });
  }


});

  /**Codigo para o slide show */

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }