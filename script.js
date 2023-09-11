const btn = document.querySelector(".app__quote");
const adviceNumber = document.querySelector(".app__advice");
const quote = document.querySelector(".app__quote");

function fetchAndDisplayQuote() {
  fetch("https://api.adviceslip.com/advice")
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

// Dodaj obsługę kliknięcia przycisku i wywołaj funkcję fetchAndDisplayQuote() przy każdym kliknięciu
btn.addEventListener('click', fetchAndDisplayQuote);

// Wywołaj funkcję fetchAndDisplayQuote() na początku, aby pobrać pierwszy cytat
fetchAndDisplayQuote();
