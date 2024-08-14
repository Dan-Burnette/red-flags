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

const pageElements = [ ...body.querySelectorAll("*") ];

detectedRedFlags.forEach(flag => {
  const elementsDirectlyContainingFlag = pageElements.filter(e => {
    const containsFlag = e.textContent.includes(flag);
    const childContainsFlag = [...e.children].some(child => child.textContent.includes(flag));
    const directlyContainsFlag = containsFlag && !childContainsFlag;
    return directlyContainsFlag;
  })

  elementsDirectlyContainingFlag.forEach(e => {
    const newInnerHTML = e.innerHTML.replace(flag, `<span class='red-flag-extension'>${flag}</span>`)
    e.innerHTML = newInnerHTML;
  });
});

