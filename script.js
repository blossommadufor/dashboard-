

// SELECTORS


const body = document.querySelector("body");

const toggle = document.querySelector("#toggle");

const dashHead = document.querySelector(".dashboard_header");


const infoBox = document.querySelector(".info-box")

const overview = document.querySelector(".overview")

const overviewContainer = document.querySelector("#overview-container")

const infoContainer = document.querySelector("#info-container")

const mode = document.querySelector(".mode");

const pageMode = document.querySelector('.page_mode')

const darkMode = document.querySelector('.darkmode')

const lightMode = document.querySelector('.lightmode')



// EVENT LISTENERS


toggle.addEventListener( 'click', changePageMode );




// FUNCTIONS


function changePageMode () {

    toggle.classList.toggle('active');

    body.classList.toggle('active');

    dashHead.classList.toggle('dashwhite');

    infoBox.classList.toggle('box-white');

    overview.classList.toggle('box-white');

    overviewContainer.classList.toggle('over-container');

    infoContainer.classList.toggle('over-container');
    

    if(darkMode.style.display === "none" && lightMode.style.display === "block")
    {
        darkMode.style.display = "block" ;
        lightMode.style.display = "none"
    } 
    
    else {
        darkMode.style.display = "none";
        lightMode.style.display = "block" ;

    }
};

