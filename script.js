/* =========================================
   MAIN JAVASCRIPT
   Portfolio Philippe ADJIYIDO
========================================= */


document.addEventListener("DOMContentLoaded", () => {



/* =========================================
   MENU MOBILE
========================================= */


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if(menuToggle && navLinks){


    menuToggle.addEventListener("click",()=>{


        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("open");



        const icon =
        menuToggle.querySelector("i");



        if(icon){


            if(menuToggle.classList.contains("open")){


                icon.classList.replace(
                    "fa-bars",
                    "fa-xmark"
                );


            }else{


                icon.classList.replace(
                    "fa-xmark",
                    "fa-bars"
                );


            }


        }


    });


}




/* =========================================
   FERMER MENU APRÈS NAVIGATION
========================================= */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks?.classList.remove("active");


        menuToggle?.classList.remove("open");



        const icon =
        menuToggle?.querySelector("i");



        if(icon){


            icon.classList.replace(
                "fa-xmark",
                "fa-bars"
            );


        }



    });


});







/* =========================================
   ANNÉE FOOTER AUTOMATIQUE
========================================= */


const year =
document.querySelector(".footer-year");


if(year){


    year.textContent =
    new Date().getFullYear();


}







/* =========================================
   THEME CLAIR / SOMBRE
   CLAIR PAR DÉFAUT
========================================= */


const themeButton =
document.getElementById("theme-toggle");


const icon =
themeButton?.querySelector("i");


const body =
document.body;



// Toujours en mode clair au chargement, quel que soit le choix précédent
body.classList.remove("dark");




function updateThemeIcon(){


    if(!icon) return;



    if(body.classList.contains("dark")){


        icon.classList.remove(
            "fa-moon"
        );


        icon.classList.add(
            "fa-sun"
        );


    }else{


        icon.classList.remove(
            "fa-sun"
        );


        icon.classList.add(
            "fa-moon"
        );


    }


}



updateThemeIcon();





themeButton?.addEventListener("click",()=>{


    body.classList.toggle("dark");



    const darkMode =
    body.classList.contains("dark");



    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );



    updateThemeIcon();


});







/* =========================================
   RETOUR EN HAUT + PROGRESSION
========================================= */


const backToTop =
document.getElementById("back-to-top");


const progressBar =
document.querySelector(".scroll-progress");




window.addEventListener("scroll",()=>{



    if(backToTop){


        if(window.scrollY > 400){


            backToTop.classList.add(
                "active"
            );


        }else{


            backToTop.classList.remove(
                "active"
            );


        }


    }





    if(progressBar){



        const scrollTop =
        window.scrollY;



        const height =
        document.documentElement.scrollHeight
        -
        document.documentElement.clientHeight;



        const progress =
        (scrollTop / height) * 100;



        progressBar.style.width =
        progress + "%";


    }



});





backToTop?.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});



});

/* =========================================
   ANIMATIONS GSAP + SCROLLREVEAL
   Portfolio Philippe ADJIYIDO
========================================= */


document.addEventListener("DOMContentLoaded", () => {



/* =========================================
   HERO ANIMATION GSAP
========================================= */


if(typeof gsap !== "undefined"){



    const heroTimeline =
    gsap.timeline();



    heroTimeline.from(
        ".hero-tag",
        {

            opacity:0,

            y:30,

            duration:.8

        }
    );



    heroTimeline.from(
        ".hero h1",
        {

            opacity:0,

            y:40,

            duration:1

        },

        "-=0.4"

    );



    heroTimeline.from(
        ".hero p",
        {

            opacity:0,

            y:30,

            duration:.8

        },

        "-=0.5"

    );



    heroTimeline.from(
        ".hero-buttons",
        {

            opacity:0,

            y:20,

            duration:.6

        },

        "-=0.4"

    );



    heroTimeline.from(
        ".hero-image",
        {

            opacity:0,

            scale:.8,

            duration:1

        },

        "-=0.8"

    );



}







/* =========================================
   SCROLL REVEAL
========================================= */


if(typeof ScrollReveal !== "undefined"){



    const reveal =
    ScrollReveal({


        distance:"50px",

        duration:900,

        delay:100,

        easing:"ease-out",

        reset:false


    });







    reveal.reveal(
        ".section-header",
        {

            origin:"bottom"

        }
    );




    reveal.reveal(
        ".skill-card",
        {

            origin:"bottom",

            interval:120

        }
    );




    reveal.reveal(
        ".service-card",
        {

            origin:"bottom",

            interval:120

        }
    );





    reveal.reveal(
        ".project-card",
        {

            origin:"bottom",

            interval:150

        }
    );





    reveal.reveal(
        ".small-project",
        {

            origin:"bottom",

            interval:100

        }
    );





    reveal.reveal(
        ".timeline-item",
        {

            origin:"left",

            interval:150

        }
    );





    reveal.reveal(
        ".testimonial-card",
        {

            origin:"bottom",

            interval:120

        }
    );





    reveal.reveal(
        ".testimonial-mini",
        {

            origin:"right",

            interval:150

        }
    );





    reveal.reveal(
        ".blog-card",
        {

            origin:"bottom",

            interval:120

        }
    );





    reveal.reveal(
        ".contact-form",
        {

            origin:"right"

        }
    );



}






});









/* =========================================
   SLIDER PROJETS
   Portfolio Philippe ADJIYIDO
========================================= */


document.addEventListener("DOMContentLoaded",()=>{



const sliders =
document.querySelectorAll(".projects-slider");





sliders.forEach(slider=>{



    const container =
    slider.querySelector(".slider-container");



    const next =
    slider.querySelector(".next-slide");



    const prev =
    slider.querySelector(".prev-slide");





    if(!container) return;







    // Bouton suivant


    next?.addEventListener("click",()=>{


        container.scrollBy({

            left:350,

            behavior:"smooth"

        });


    });







    // Bouton précédent


    prev?.addEventListener("click",()=>{


        container.scrollBy({

            left:-350,

            behavior:"smooth"

        });


    });









    // Déplacement souris


    let isDown=false;

    let startX;

    let scrollLeft;





    container.addEventListener(
    "mousedown",
    (e)=>{


        isDown=true;


        container.classList.add(
            "dragging"
        );



        startX =
        e.pageX -
        container.offsetLeft;



        scrollLeft =
        container.scrollLeft;



    });






    container.addEventListener(
    "mouseleave",
    ()=>{


        isDown=false;


    });






    container.addEventListener(
    "mouseup",
    ()=>{


        isDown=false;


    });






    container.addEventListener(
    "mousemove",
    (e)=>{


        if(!isDown) return;



        e.preventDefault();




        const x =
        e.pageX -
        container.offsetLeft;




        const walk =
        (x-startX)*2;



        container.scrollLeft =
        scrollLeft - walk;



    });




});



});


/* =========================================
   FAQ ACCORDION
   Portfolio Philippe ADJIYIDO
========================================= */


document.addEventListener("DOMContentLoaded",()=>{


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{



    const question =
    item.querySelector(".faq-question");



    if(!question) return;




    question.addEventListener("click",()=>{



        // Fermer les autres questions


        faqItems.forEach(otherItem=>{


            if(otherItem !== item){


                otherItem.classList.remove(
                    "active"
                );


            }


        });





        // Ouvrir / fermer la question


        item.classList.toggle(
            "active"
        );



    });



});





/* Animation FAQ */


if(typeof ScrollReveal !== "undefined"){



    ScrollReveal().reveal(
        ".faq-item",
        {


            distance:"50px",

            origin:"bottom",

            duration:800,

            interval:100


        }
    );



}



});









/* =========================================
   GESTION DES COOKIES
   Portfolio Philippe ADJIYIDO
========================================= */


document.addEventListener("DOMContentLoaded",()=>{



const cookieBanner =
document.getElementById(
    "cookie-banner"
);



const acceptCookies =
document.getElementById(
    "accept-cookies"
);



const rejectCookies =
document.getElementById(
    "reject-cookies"
);





if(!cookieBanner) return;





const cookieChoice =
localStorage.getItem(
    "cookieChoice"
);





if(cookieChoice){


    cookieBanner.style.display =
    "none";


}






// Accepter


acceptCookies?.addEventListener(
"click",
()=>{


    localStorage.setItem(
        "cookieChoice",
        "accepted"
    );


    cookieBanner.style.display =
    "none";


});






// Refuser


rejectCookies?.addEventListener(
"click",
()=>{


    localStorage.setItem(
        "cookieChoice",
        "rejected"
    );


    cookieBanner.style.display =
    "none";


});



});









/* =========================================
   ANIMATION PORTFOLIO
   PHILNOVA
========================================= */


document.addEventListener("DOMContentLoaded",()=>{



const elements =
document.querySelectorAll(
    ".project-card, .category-title"
);





if(elements.length === 0) return;






const observer =
new IntersectionObserver(


(entries)=>{


    entries.forEach(entry=>{



        if(entry.isIntersecting){



            entry.target.classList.add(
                "show-project"
            );



            observer.unobserve(
                entry.target
            );



        }



    });



},



{

    threshold:0.15

}



);






elements.forEach(element=>{


    observer.observe(element);


});



});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");
        const message = document.getElementById("form-message");

        button.disabled = true;
        button.textContent = "Envoi en cours...";

        message.textContent = "";
        message.className = "";

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: new FormData(contactForm),

                headers: {
                    Accept: "application/json"
                }

            });

            if (response.ok) {

                message.textContent = "✅ Merci ! Votre message a été envoyé avec succès.";
                message.classList.add("success");

                contactForm.reset();

            } else {

                message.textContent = "❌ Une erreur est survenue. Veuillez réessayer.";
                message.classList.add("error");

            }

        } catch (error) {

            message.textContent = "❌ Impossible d'envoyer le message. Vérifiez votre connexion.";
            message.classList.add("error");

        }

        button.disabled = false;
        button.textContent = "Envoyer le message";

    });

}


/* =========================================
   GOOGLE TRANSLATE
   Portfolio PhilNova
========================================= */

let googleTranslateReady = false;


/* Fonction appelée par Google Translate */

function googleTranslateElementInit() {

    new google.translate.TranslateElement({

        pageLanguage: "fr",

        includedLanguages: "en",

        autoDisplay: false

    }, "google_translate_element");


    googleTranslateReady = true;

}


/* Bouton EN */

document.addEventListener("DOMContentLoaded", () => {

    const languageButton =
        document.getElementById("language-toggle");


    if (!languageButton) return;


    languageButton.addEventListener("click", () => {

        const select =
            document.querySelector(".goog-te-combo");


        if (!select) {

            console.warn(
                "Google Translate n'est pas encore chargé."
            );

            return;

        }


        /* Passer en anglais */

        select.value = "en";


        select.dispatchEvent(
            new Event("change")
        );


        /* Modifier le bouton */

        languageButton.textContent = "FR";

        languageButton.title =
            "Revenir au français";

        languageButton.setAttribute(
            "aria-label",
            "Revenir au français"
        );

    });

});
