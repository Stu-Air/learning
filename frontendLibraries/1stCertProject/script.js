const quoteBox = document.getElementById("quote-box");
const text = document.getElementById("text");
const author = document.getElementById("author");
const container = document.getElementById("container");
const quoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const url = `https://raw.githubusercontent.com/dwyl/quotes/refs/heads/main/quotes.json`;


window.addEventListener("load", quote)
quoteBtn.addEventListener("click", quote)
tweetBtn.addEventListener("click", twitter.com/intent/tweet)




function quote() {
 fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let num = Math.floor(Math.random()*json.length)
      author.innerHTML = json[num].author
      text.innerHTML = json[num].text
    });
  };

 

