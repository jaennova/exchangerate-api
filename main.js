const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
//fetch exchange rate and updateDOM
function calculate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    fetch(
        `https://v6.exchangerate-api.com/v6/2d5f73cd2a14b1feec809bb8/latest/${currency_one}`
    )
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}

//event listener
currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});
calculate();




