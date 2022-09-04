//FETCH DATA AND CREATE THE ELEMENTS------------------------
const carousel = document.getElementById("carousel");

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((promise) => {
        const bpi = promise.bpi;
        elemsArr = [];
        Object.entries(bpi).map((item, i) => {
            const data = item[1];
            currencies[data.code] = data.rate_float;
            const newElement = elementConstructor(
                data.rate,
                data.symbol,
                data.code,
                data.description,
                i
            );
            elemsArr.push(newElement);
        });
        startSlider(elemsArr);
    });

function elementConstructor(
    fPrice = "9999",
    fSymbol = "$",
    fCode = "USD",
    fDesc = "United States Dollar",
    i
) {
    const mainContainer = document.createElement("div");
    mainContainer.className = "carousel-item pos" + i;

    const title = document.createElement("h1");
    title.className = "iso-price";
    title.innerHTML = fSymbol + fPrice;
    mainContainer.append(title);

    const isoContainer = document.createElement("div");
    isoContainer.className = "iso-container";

    const isoCode = document.createElement("h2");
    isoCode.className = "iso-code";
    isoCode.innerHTML = fCode;
    isoContainer.append(isoCode);

    const isoDesc = document.createElement("p");
    isoDesc.className = "iso-description";
    isoDesc.innerHTML = fDesc;
    isoContainer.append(isoDesc);

    mainContainer.append(isoContainer);

    carousel.append(mainContainer);

    return mainContainer;
}

//CREATE THE CAROUSEL-------------------------

const btnUp = document.getElementById("upButton");
const btnDwn = document.getElementById("downButton");

function startSlider(arr) {
    btnUp.addEventListener("click", () => cryptoSlide(arr, true));
    btnDwn.addEventListener("click", () => cryptoSlide(arr, false));

    cryptoSlide(arr, true);
}

var cryptoInterval;

function cryptoSlide(arr, fordward) {
    if (cryptoInterval) clearInterval(cryptoInterval);

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

    cryptoInterval = setInterval(() => cryptoSlide(arr, true), 4000);
}

//Calculator
const btcInput = document.getElementById("btc-amount");
const currencyInput = document.getElementById("currency-amount");
const selectCurrency = document.getElementById("currency");
var currencies = {};

btcInput.addEventListener("change", () => {
    currencyInput.value = currencies[selectCurrency.value] * btcInput.value;
});

currencyInput.addEventListener("change", () => {
    btcInput.value = currencyInput.value / currencies[selectCurrency.value];
});

selectCurrency.addEventListener("change", () => {
    currencyInput.value = currencies[selectCurrency.value] * btcInput.value;
});
