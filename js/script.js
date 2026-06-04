/* =====================================
   REVIEW SLIDER
===================================== */
const reviewSlider =
    document.querySelector(".review-slider");

const reviewCards =
    document.querySelectorAll(".review-card");

const reviewDots =
    document.querySelectorAll(".review-dots");

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