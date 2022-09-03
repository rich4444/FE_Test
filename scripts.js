const slidesTime = 5000;

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
    clearInterval(infoCardsInterval);

    infoCards.map((card) => {
        let newClass = card.classList[1].charAt(3);
        card.classList.remove("pos" + newClass);
        if (fordward) {
            newClass++;
            if (newClass > 4) newClass = 0;
        } else {
            newClass--;
            if (newClass < 0) newClass = 4;
        }
        if (newClass > 4) newClass = 0;
        card.classList.add("pos" + newClass);
    });

    infoCardsInterval = setInterval(() => infoCardsSlide(fordward), slidesTime);
}

//Remove posClasses if screen is bigger
