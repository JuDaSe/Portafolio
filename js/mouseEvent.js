
let mediaQuerySmall = window.matchMedia("(max-width: 600px)");
let mediaQueryLarge = window.matchMedia("(max-width: 601px)");
const languageContent = document.querySelectorAll(".languageInfo");
    if(mediaQuerySmall <= mediaQueryLarge){

        languageContent.forEach(image => {
            image.addEventListener('click', () => {
                if (!image.querySelector("p")) {
                    const textElement = document.createElement("p"); 
                    
                    textElement.textContent = "Lenguaje: " + image.alt; 
                    textElement.style.textAlign = "center"; 
                    textElement.style.position = "relative";
                    textElement.style.top = "-0.5em";
                    image.parentElement.appendChild(textElement);
                    switch (image.alt) {
                        case "java" : 
                        console.log("Este es el lenguaje java");
                        break;
                        case "javascript" : 
                        console.log("Este es el lenguaje javascript");
                        break;
                        case "css" : 
                        console.log("Este es el lenguaje css");
                        break;
                        case "sql" : 
                        console.log("Este es el lenguaje sql");
                        break;
                        case "nodejs" : 
                        console.log("Este es el lenguaje nodejs");
                        break;
                        case "vuejs" : 
                        console.log("Este es el lenguaje vuejs");
                        break;
                    }
                }
            });            
            image.addEventListener('mouseout', () => {
                const textElement = image.parentElement.querySelector("p");
                if (textElement) {
                    image.parentElement.removeChild(textElement);
                }
            });
        });

    } else {

        languageContent.forEach(image => {
            image.addEventListener('mouseover', () => {
                if (!image.querySelector("p")) {
                    const textElement = document.createElement("p"); 
                    
                    textElement.textContent = "Lenguaje: " + image.alt; 
                    textElement.style.textAlign = "center"; 
                    textElement.style.position = "relative";
                    textElement.style.top = "-0.5em";
                    image.parentElement.appendChild(textElement);
                    switch (image.alt) {
                        case "java" : 
                        console.log("Este es el lenguaje java");
                        break;
                        case "javascript" : 
                        console.log("Este es el lenguaje javascript");
                        break;
                        case "css" : 
                        console.log("Este es el lenguaje css");
                        break;
                        case "sql" : 
                        console.log("Este es el lenguaje sql");
                        break;
                        case "nodejs" : 
                        console.log("Este es el lenguaje nodejs");
                        break;
                        case "vuejs" : 
                        console.log("Este es el lenguaje vuejs");
                        break;
                    }
                }
            });   
            image.addEventListener('mouseout', () => {
                const textElement = image.parentElement.querySelector("p");
                if (textElement) {
                    image.parentElement.removeChild(textElement);
                }
            });
        });
    }

    const espacio = document.getElementById('contenedor');
    const tam = espacio.getBoundingClientRect();
    const foto = document.getElementById("fotoPerfil");
    const photoPosition = foto.getBoundingClientRect();
    

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('span');
        star.classList.add('estrella');
        star.style.position = 'absolute';
        star.style.top = Math.random() * tam.height + 'px';
        star.style.left = Math.random() * tam.width + 'px';
        espacio.appendChild(star);

        const tamStar = star.getBoundingClientRect();
        if((tamStar.bottom > photoPosition.top && tamStar.top < photoPosition.bottom &&
            tamStar.right > photoPosition.left && tamStar.left < photoPosition.right)){
            star.style.opacity = "0";
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        const estrellas = document.querySelectorAll('.estrella');

        estrellas.forEach(star => {
            star.style.boxShadow = "0px 0px 10px white";
        });
    })


