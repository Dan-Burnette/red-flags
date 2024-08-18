const redFlags = [
  "hustle",
  "work hard play hard",
  "urgency",
  "relentless",
  "scrappy",
  "fast-paced",
  "fast paced"
]

// TODO: Make it work on linkedin and sites that load via XHR:
//  it runs querySelectorAll on initial load, which will miss new content
//  inserted into the DOM. 
//  - Use MutationObserver to run on DOM insertions.
//  - Run the function on the insertions, scanning for red flags
// TODO: Make it case insensitive

function detectRedFlags(body) {
  const lowerCasedBodyText = body.textContent.toLowerCase();
  return redFlags.filter(flag => lowerCasedBodyText.includes(flag))
}

// window.addEventListener("load", (event) => {
//   const detectedRedFlags = detectedRedFlags(document);
//   const pageElements = [ ...body.querySelectorAll("*") ];
//
//   detectedRedFlags.forEach(flag => {
//     const elementsDirectlyContainingFlag = pageElements.filter(e => {
//       const containsFlag = e.textContent.includes(flag);
//       const childContainsFlag = [...e.children].some(child => child.textContent.includes(flag));
//
//       if (containsFlag) {
//         console.log("e contains flag:", e);
//       }
//       const directlyContainsFlag = containsFlag && !childContainsFlag;
//       return directlyContainsFlag;
//     })
//
//     console.log("elementsDirectlyContainingFlag", elementsDirectlyContainingFlag);
//     elementsDirectlyContainingFlag.forEach(e => {
//       const newInnerHTML = e.innerHTML.replace(flag, `<span class='red-flag-extension'>${flag}</span>`)
//       e.innerHTML = newInnerHTML;
//     });
//   });
// });

exports.detect = detectRedFlags;

