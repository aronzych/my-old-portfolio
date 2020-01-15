const main = document.querySelector(".main");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const gallery = document.querySelector(".gallery");


const openPortfolio = document.querySelector(".main__button--openPortfolio");
const openAbout = document.querySelector(".main__button--openAbout");
const openGallery = document.querySelector(".projects__openGallery");

const closePortfolio = document.querySelector(".portfolio__button");
const closeAbout = document.querySelector(".about__button");
const closeGallery = document.querySelector(".gallery__button");

const showPortfolio = function () {
    main.style.transitionDelay = "0s";
    main.style.transform = "scale(0.75)";
    portfolio.style.transitionDelay = ".3s";
    portfolio.style.transform = "scale(1)";
};
const showAbout = function () {

    main.style.transitionDelay = "0s";
    main.style.transform = "scale(0.75)";
    about.style.transitionDelay = ".3s";
    about.style.transform = "scale(1)"
};

const showGallery = function () {

    // portfolio.style.transitionDelay = "0s";
    // portfolio.style.transform = "scale(0.75)";
    gallery.style.transitionDelay = ".3s";
    gallery.style.transform = "scale(1)"
};

const hidePortfolio = function () {
    main.style.transitionDelay = ".3s";
    main.style.transform = "scale(1)"
    portfolio.style.transitionDelay = "0s";
    portfolio.style.transform = "scale(0)"
};
const hideAbout = function () {

    main.style.transitionDelay = ".3s";
    main.style.transform = "scale(1)";
    about.style.transitionDelay = "0s";
    about.style.transform = "scale(0)";
};

const hideGallery = function () {

    // portfolio.style.transitionDelay = ".3s";
    // portfolio.style.transform = "scale(1)";
    gallery.style.transitionDelay = "0s";
    gallery.style.transform = "scale(0)";
};

openPortfolio.addEventListener("click", showPortfolio);
openAbout.addEventListener("click", showAbout);
openGallery.addEventListener("click", showGallery);
closePortfolio.addEventListener("click", hidePortfolio);
closeAbout.addEventListener("click", hideAbout);
closeGallery.addEventListener("click", hideGallery); 