const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiquotes = [];

//show new quote

function newQuote() {
// Pick a random quotee from qpiQuotes array
const quote = apiquotes[Math.floor(Math.random() * apiquotes.length)];
// check if author field is blank and replace it with 'unknown'

if(!quote.author) {
 authorText.textContent = 'Unknown';
} else {
authorText.textContent = quote.author;

}
if (quote.text.length > 50) {

    quoteText.classList.add('long-quote');
} else {

    quoteText.classList.remove('long-quote');
}
quoteText.textContent = quote.text;


}

// Get Quotes from Api
async function getQuotes () {
    
    const apiurl ='https://type.fit/api/quotes';
    try {
    const response = await fetch(apiurl);
    apiquotes = await response.json();
    newQuote();
    
    } catch (error) {
    // This is where you handle the error 
    
    }

}

//On load

getQuotes();
