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

const detectedRedFlags = redFlags.filter(flag => text.includes(flag))
const detectedYellowFlags = yellowFlags.filter(flag => text.includes(flag))
console.log("detectedRedFlags", detectedRedFlags);
console.log("detectedYellowFlags", detectedYellowFlags);

const pageElements = [ ...body.querySelectorAll("*") ];

detectedRedFlags.forEach(flag => {

  // 1) Select element containing the word.
  const elementsDirectlyContainingFlag = pageElements.filter(e => {
    const containsFlag = e.textContent.includes(flag);
    const childContainsFlag = [...e.children].some(child => child.textContent.includes(flag));
    const directlyContainsFlag = containsFlag && !childContainsFlag;
    return directlyContainsFlag;
  })

  // 2) Replace content with the same stuff but added HTML
  // content...<p> class="red-flag">some red flag</p>...content
  elementsDirectlyContainingFlag.forEach(e => {
    const newInnerHTML = e.innerHTML.replace(flag, `<span class='red-flag'>${flag}</span>`)
    e.innerHTML = newInnerHTML;
  });


});

// 3) Add a red flag popup on top of 'red-flag' class elements
