document.body.style.overflowX = 'hidden';
$(document).ready(function () {
    $(window).scroll(function () {
        let window_y = $(window).scrollTop();  

    
        let textImportant = document.getElementById("textAnimation");  

        if (textImportant) {
            
            let scroll_critical = textImportant.offsetTop - $(window).height() + 20; 

            if (window_y >= scroll_critical) {
                
                textImportant.style.animationDuration = "2s";  
                textImportant.style.animationName = "slidein"; 
                textImportant.style.animationFillMode = "forwards"; 
                textImportant.style.opacity = "1"; 
                textImportant.style.transform = "translateX(0)"; 
            }
        }
    });
});

let style = document.createElement("style");
style.innerHTML = `
    @keyframes slidein {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

