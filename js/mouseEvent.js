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



    