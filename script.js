const btn = document.querySelector(".app__button");
const adviceNumber = document.querySelector(".app__advice");
const quote = document.querySelector(".app__quote");

function fetchAndDisplayQuote() {
  fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
    .then(res => res.json())
    .then(data => {
      const advice = data.slip.advice;
      const quoteNumber = data.slip.id;
      adviceNumber.textContent = `ADVICE #${quoteNumber}`;
      quote.textContent = `“${advice}”`;
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

btn.addEventListener('click', fetchAndDisplayQuote);
