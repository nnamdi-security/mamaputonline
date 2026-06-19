
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

const prevReviewBtn =
    document.querySelector(".prev-btn");

const nextReviewBtn =
    document.querySelector(".next-btn");


let currentReview = 0;




function showReview(index) {

    reviewSlider.style.transform =
        `translateX(-${index * 100}%)`;

    reviewSlider.style.transition =
        "0.5s ease";

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

/*AUTO SLIDE*/
setInterval(()=>{

    currentReview++;

    if(currentReview >= reviewCards.length){

        currentReview = 0;
    }

    showReview(currentReview);
},
5000);

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






/*
============================
TOUCH SWIPE SUPPORT
============================
*/
const reviewContainer = document.querySelector(".review-slider-container");

const nextReview = document.querySelector(".next-btn")

let touchStartX = 0;

let touchEndX = 0;

/* Select the container and create an event that listen for touch start */


reviewContainer.addEventListener("touchStartX", (event) => {

    touchStartX = event.changedTouches[0].screenX;
})

/* Listen for Touch End */
reviewContainer.addEventListener("touchEndX", (event) => {

    touchEndX = event.changedTouches[0].screenX;
})


/* Swipe Function */
function handleSwipe() {

    const handleSwipe = touchStartX - touchEndX;

    if(swipeDistance > 50) {

        nextReviewBtn
    }
}