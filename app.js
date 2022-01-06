scrollTop = window.pageYOffset || document.documentElement.scrollTop;
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    }; 


// const date = document.querySelector(".date");


var today = new Date();
var date = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' + today.getFullYear();


var node = document.createElement("span");
var textnode = document.createTextNode(date);
node.appendChild(textnode);
document.getElementById("date").appendChild(node);



//Api
const newQuoteButton = document.querySelector('#new_quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
// const endpoint = 'https://type.fit/api/quotes';

async function getQuote() {
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    displayQuote(json.message);
  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#quote');
  quoteText.textContent = quote;
}


// Prueba
