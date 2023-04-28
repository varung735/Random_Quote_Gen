const content = document.querySelector(".content");
const author = document.querySelector(".author");
const button = document.querySelector(".button");

//function to call random quote
const quote = async () => {
    try {
        const getQuote = await fetch("https://api.quotable.io/random");
        const quote = await getQuote.json();
        content.innerText = quote.content;
        author.innerText = quote.author;
    } catch (error) {
        console.log(error);
    }
}

quote();

button.addEventListener('click', () => {quote()});