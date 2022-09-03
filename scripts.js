const slidesTime = 5000;

//Slide ---------------------------
function slide(arr, fordward) {
    arr.map((elem) => {
        let currPos = elem.classList[1].charAt(3);
        elem.classList.remove("pos" + currPos);
        if (fordward) {
            currPos++;
            if (currPos > arr.length - 1) currPos = 0;
        } else {
            currPos--;
            if (currPos < 0) currPos = arr.length - 1;
        }
        elem.classList.add("pos" + currPos);
    });
}

//Info Cards Slider -----------------------------------------------
const infoCards = [...document.getElementsByClassName("info-card")];
const infoCards_bckBtn = document.getElementById("infoCards_bckBtn");
const infoCards_nxtBtn = document.getElementById("infoCards_nxtBtn");

//add classes from pos0 to pos4
infoCards.reduce((acc, card) => {
    card.classList.add("pos" + acc);
    acc++;
    return acc;
}, 0);

infoCards_bckBtn.addEventListener("click", () => infoCardsSlide(true));
infoCards_nxtBtn.addEventListener("click", () => infoCardsSlide(false));

var infoCardsInterval = setInterval(infoCardsSlide, slidesTime);

function infoCardsSlide(fordward) {
    //Clear the interval
    clearInterval(infoCardsInterval);
    //rotate the slider
    slide(infoCards, fordward);
    //Call again the interval
    infoCardsInterval = setInterval(() => infoCardsSlide(fordward), slidesTime);
}

//Info Cards Slider -----------------------------------------------
const perks = [...document.getElementsByClassName("perk")];
const perks_bckBtn = document.getElementById("perks_bckBtn");
const perks_nxtBtn = document.getElementById("perks_nxtBtn");

//add classes from pos0 to pos4
perks.reduce((acc, card) => {
    card.classList.add("pos" + acc);
    acc++;
    return acc;
}, 0);

perks_bckBtn.addEventListener("click", () => perksSlide(true));
perks_nxtBtn.addEventListener("click", () => perksSlide(false));

var perksInterval = setInterval(perksSlide, slidesTime);

function perksSlide(fordward) {
    //Clear the interval
    clearInterval(perksInterval);
    //rotate the slider
    slide(perks, fordward);
    //Call again the interval
    perksInterval = setInterval(() => perksSlide(fordward), slidesTime);
}

//Testimony Cards Slider -----------------------------------------------
const testimony = [...document.getElementsByClassName("testimony")];
const testimony_bckBtn = document.getElementById("testimonials_bckBtn");
const testimony_nxtBtn = document.getElementById("testimonials_nxtBtn");

//add classes from pos0 to pos4
testimony.reduce((acc, card) => {
    card.classList.add("pos" + acc);
    acc++;
    return acc;
}, 0);

testimony_bckBtn.addEventListener("click", () => testimonySlide(true));
testimony_nxtBtn.addEventListener("click", () => testimonySlide(false));

var testimonyInterval = setInterval(testimonySlide, slidesTime);

function testimonySlide(fordward) {
    //Clear the interval
    clearInterval(testimonyInterval);
    //rotate the slider
    slide(testimony, fordward);
    //Call again the interval
    testimonyInterval = setInterval(() => testimonySlide(fordward), slidesTime);
}

// NAVBAR ---------------------------
const navbar = document.getElementsByClassName("navbar")[0];
const user = document.getElementsByClassName("user-buttons")[0];
const closeOpenButton = document.getElementsByClassName("open-close-navbar")[0];

closeOpenButton.addEventListener("click", () => {
    navbar.classList.toggle("closed");
    user.classList.toggle("closed");
    closeOpenButton.classList.toggle("closed");
    document.body.style.overflowY =
        document.body.style.overflowY === "hidden" ? "visible" : "hidden";
});
