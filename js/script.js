/* =====================================
   REVIEW SLIDER
===================================== */
console.log("JavaScript Connected Successfully");

const reviewSlider =
    document.querySelector(".review-slider");

const reviewCards =
    document.querySelectorAll(".review-card");

const reviewDots =
    document.querySelectorAll(".review-dot");

const preReviewvBtn =
    document.querySelector(".prev-btn");

const nextReviewBtn =
    document.querySelector(".next-btn");


let currentReview = 0;




function showReview(index) {

    reviewSlider.style.transform =
        `translateX(-${index * 100}%)`;


    reviewDots.forEach(dot => {
        dot.classList.remove("active");
    });

    reviewDots[index]
        .classList.add("active");
}

/*NEXT BUTTON*/
nextReviewBtn.addEventListener("click", ()=>{

    currentReview++;

    if(currentReview >= reviewCards.length){

        currentReview = 0;
    }
    
    showReview(currentReview);
});

/*PREVIOUS BUTTON*/
prevReviewBtn.addEventListener("click", ()=>{

    currentReview--;

    if(currentReview < 0){

        currentReview = reviewCards.length - 1;
    }

    showReview(currentReview);
});


/*DOT NAVIGATION*/ 
reviewDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentReview = index;

        showReview(currentReview);

    });

});

/*AUTO SLIDE*/
function nextReview() {

    currentReview++;

    if(currentReview >= reviewCards.length){

        currentReview = 0;
    }

    showReview(currentReview);
}

let reviewInterval =
    setInterval(nextReview, 5000);

/* PAUSE ON HOVER */    
const reviewContainer =
    document.querySelector(
        ".review-slider-container"
    );

/* STOP AUTOPLAY */
reviewContainer.addEventListener(

    "mouseenter",

    () => {

        clearInterval(reviewInterval);

    }

);

reviewContainer.addEventListener(

    "mouseleave",

    () => {

        reviewInterval =
            setInterval(
                nextReview,
                5000
            );

    }

);

/*BACK TO TOP BUTTON*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,

        behavior: "smooth"
    });
});


/* =====================================
   SCROLL REVEAL
===================================== */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.2
    }
);

revealElements.forEach((element) => observer.observe(element));




/* =====================================
   HERO IMAGE SLIDER


const heroSlides =
document.querySelector(".hero-slides");

const heroImages =
document.querySelectorAll(".hero-slides img");

const heroDots =
document.querySelectorAll(".hero-dot");

let currentHeroSlide = 0;





function showHeroSlide(index) {

    heroSlides.style.transform =
        `translateX(-${index * 100}%)`;

    heroDots.forEach(dot => {

        dot.classList.remove("active");

    });

    heroDots[index]
        .classList.add("active");
}




function nextHeroSlide() {

    currentHeroSlide++;

    if (
        currentHeroSlide >=
        heroImages.length
    ) {

        currentHeroSlide = 0;
    }

    showHeroSlide(
        currentHeroSlide
    );
}




setInterval(() => {

    nextHeroSlide();

}, 3000);




heroDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",

            () => {

                currentHeroSlide =
                    index;

                showHeroSlide(
                    currentHeroSlide
                );

            }

        );

    }
);




console.log(heroSlides);
console.log(heroImages);
console.log(heroDots);


const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".hero-dot");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");
}



function nextSlide() {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
}


setInterval(() => {

    nextSlide();

}, 3000);



dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});






===================================== */


/* =====================================
   HERO SLIDER
===================================== */

const heroSlides =
document.querySelector(".hero-slides");

const heroDots =
document.querySelectorAll(".hero-dot");

const heroPrev =
document.querySelector(".hero-prev");

const heroNext =
document.querySelector(".hero-next");


let currentSlide = 0;

const totalSlides = heroDots.length;


function showSlide(index) {

    heroSlides.style.transform =
        `translateX(-${index * 100}%)`;

    heroDots.forEach(dot => {

        dot.classList.remove("active");

    });

    heroDots[index]
        .classList.add("active");
}



function nextSlide() {

    currentSlide++;

    if (
        currentSlide >= totalSlides
    ) {

        currentSlide = 0;
    }

    showSlide(currentSlide);
}



function previousSlide() {

    currentSlide--;

    if (
        currentSlide < 0
    ) {

        currentSlide =
            totalSlides - 1;
    }

    showSlide(currentSlide);
}



let sliderInterval =
setInterval(nextSlide, 3000);


heroNext.addEventListener(
    "click",

    () => {

        nextSlide();

    }
);




heroPrev.addEventListener(
    "click",

    () => {

        previousSlide();

    }
);



heroDots.forEach(
    (dot, index) => {

        dot.addEventListener(

            "click",

            () => {

                currentSlide =
                    index;

                showSlide(
                    currentSlide
                );

            }

        );

    }
);



const heroSlider =
document.querySelector(
    ".hero-slider"
);



heroSlider.addEventListener(

    "mouseenter",

    () => {

        clearInterval(
            sliderInterval
        );

    }

);



heroSlider.addEventListener(

    "mouseleave",

    () => {

        sliderInterval =
        setInterval(
            nextSlide,
            3000
        );

    }

);



document.addEventListener(

    "keydown",

    (event) => {

        if (
            event.key ===
            "ArrowRight"
        ) {

            nextSlide();

        }

        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousSlide();

        }

    }

);



showSlide(0);