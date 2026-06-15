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

const prevBtn =
    document.querySelector(".prev-btn");

const nextBtn =
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
nextBtn.addEventListener("click", ()=>{

    currentReview++;

    if(currentReview >= reviewCards.length){

        currentReview = 0;
    }
    
    showReview(currentReview);
});

/*PREVIOUS BUTTON*/
prevBtn.addEventListener("click", ()=>{

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