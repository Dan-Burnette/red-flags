const redFlags = [
  "hustle",
  "work hard play hard",
  "sense of urgency",
  "relentless"
]

const yellowFlags = [
  "shipping fast",
  "scrappy"
]

const body = document.querySelector("body");

const text = body.textContent;
const wordMatchRegExp = /[^\s]+/g;
const wordsIterator = text.matchAll(wordMatchRegExp);
const wordsArray = [ ...wordsIterator ];

// const wordCount = [...words].length;
// const readingTime = Math.round(wordCount / 200);
console.log("wordsArray", wordsArray);
// TODO: detect red flags, locate the element, append a red flag icon.

// TODO: detect yellow flags, locate the element, append a yellow flag icon.

const badge = document.createElement("p");
// Use the same styling as the publish information in an article's header
// badge.classList.add("color-secondary-text", "type--caption");
// badge.textContent = `⏱️ ${readingTime} min read`;

// Support for API reference docs
// const heading = article.querySelector("h1");
// Support for article docs with date
// const date = article.querySelector("time")?.parentNode;

// (date ?? heading).insertAdjacentElement("afterend", badge);
