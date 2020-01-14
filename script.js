const main = document.querySelector(".main");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");

const openPortfolio = document.querySelector(".main__button--openPortfolio");
const openAbout = document.querySelector(".main__button--openAbout");

const closePortfolio = document.querySelector(".portfolio__button");
const closeAbout = document.querySelector(".about__button");

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

openPortfolio.addEventListener("click", showPortfolio);
openAbout.addEventListener("click", showAbout);
closePortfolio.addEventListener("click", hidePortfolio);
closeAbout.addEventListener("click", hideAbout);   