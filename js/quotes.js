const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote: "Life is a risk.",
    author: "Diane Frolov",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
  },
  {
    quote: "Change your thinking, change your life.",
    author: "Ernest Holmes",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[randomNum].quote;
author.innerText = quotes[randomNum].author;
