/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import "some-node-module";
// import SomeModule from "some-node-module";

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();



/**
 * Controls obertura i tancament menú hamburguesa
 */

const btn_open = document.querySelector(".js-open");
const btn_close = document.querySelector(".js-close");

btn_open.addEventListener("click", function () {
  openNav();
});

btn_close.addEventListener("click", function () {
  closeNav();
});

function openNav() {
  document.querySelector(".js-open").style.display = "none";
  document.querySelector(".js-close").style.display = "block";
  document.querySelector(".js-menu-content").style.width = "34rem";
}

function closeNav() {
  document.querySelector(".js-open").style.display = "block";
  document.querySelector(".js-close").style.display = "none";
  document.querySelector(".js-menu-content").style.width = "0";
}



/**
 * Listener per saber si s'ha redimensionat la finestra
 * i mostrar o no l'icona del menú hamburguesa
 */

function windowResizeListener() {
  if (window.innerWidth > 767) {
    document.querySelector(".js-open").style.display = "none";
    document.querySelector(".js-close").style.display = "none";
    document.querySelector(".js-menu-content").style.width = "100%";
  }else{
    document.querySelector(".js-open").style.display = "block";
    document.querySelector(".js-close").style.display = "none";
    document.querySelector(".js-menu-content").style.width = "0";
  }
}

window.addEventListener("resize", windowResizeListener);



/**
 * Com que header i footer són comuns a totes les pàgines
 * aplico l'estil active en la pàgina en la que estem amb Vanilla JS
 */

const url = new URL(window.location.href);
const page = url.pathname.split("/").pop();

switch (page) {
  case 'membres.html':
    document.querySelector(".js-membres").classList.add("header-nav-item");
    document.querySelector(".js-menu-permalink").classList.remove("active");
    document.querySelector(".js-membres").classList.add("active");
    document.querySelector(".js-footer-permalink").classList.remove("active");
    document.querySelector(".js-footer-membres").classList.add("active");
    break;
  case 'proposta.html':
    document.querySelector(".js-proposta").classList.add("header-nav-item");
    document.querySelector(".js-menu-permalink").classList.remove("active");
    document.querySelector(".js-proposta").classList.add("active");
    document.querySelector(".js-footer-permalink").classList.remove("active");
    document.querySelector(".js-footer-proposta").classList.add("active");
    break;
  case 'contacte.html':
    document.querySelector(".js-contacte").classList.add("header-nav-item");
    document.querySelector(".js-menu-permalink").classList.remove("active");
    document.querySelector(".js-contacte").classList.add("active");
    document.querySelector(".js-footer-permalink").classList.remove("active");
    document.querySelector(".js-footer-contacte").classList.add("active");
    break;
  case '':
    document.querySelector(".js-home").classList.add("header-nav-item");
    document.querySelector(".js-menu-permalink").classList.remove("active");
    document.querySelector(".js-home").classList.add("active");
    document.querySelector(".js-footer-permalink").classList.remove("active");
    document.querySelector(".js-footer-home").classList.add("active");
    break;
}
