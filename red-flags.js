const redFlags = [
  "hustle",
  "work hard play hard",
  "urgency",
  "relentless",
  "scrappy",
  "fast-paced",
  "fast paced"
]

function detectRedFlags(body) {
  const lowerCasedBodyText = body.textContent.toLowerCase();
  return redFlags.filter(flag => lowerCasedBodyText.includes(flag))
}

const commonTextContainingElementsTypes = [
"p", "span", "div", "li", "a", "h1", "h2", "h3", "h4", "h5", "h6", "article", "aside", "footer", "header", "hgroup", "main", "section"
]

function getElementsNeedingFlagInsertion(body, flag) {
  const pageElements = [
    ...body.querySelectorAll(commonTextContainingElementsTypes.toString())
  ];

  return pageElements.filter(e => {
    console.log("e.className", e.className);

    const visible = e.checkVisibility();
    const alreadyInserted = e.className.includes("red-flag-extension");
    const containsFlag = e.textContent.includes(flag);
    const childContainsFlag = [...e.children].some(child => child.textContent.includes(flag));

    const needsFlagInsertion =
      visible && !alreadyInserted && containsFlag && !childContainsFlag && !alreadyInserted;

    return needsFlagInsertion;
  })
}

function insertRedFlagStyle(body, detectedRedFlags) {
  detectedRedFlags.forEach(flag => {
    const elementsDirectlyContainingFlag =
      getElementsNeedingFlagInsertion(body, flag)

    console.log("elementsDirectlyContainingFlag", elementsDirectlyContainingFlag);
    elementsDirectlyContainingFlag.forEach(e => {
      const newInnerHTML = e.innerHTML.replace(flag, `<span class='red-flag-extension'>${flag}</span>`)
      e.innerHTML = newInnerHTML;
    });
  });
}

function doIt() {
  const body = document.body;
  const detectedRedFlags = detectRedFlags(body);
  insertRedFlagStyle(body, detectedRedFlags);
}

window.addEventListener("load", (event) => {
  doIt();
});

// Run periodically in case content gets added to the page
window.setInterval(doIt, 5000);

// When running specs, export via commonJS module so the spec can import.
// When running in context of chrome extension, do nothing
// Try/catch because `process` is not defined in chrome extension context.
try {
  const testingWithJest = process.env.JEST_WORKER_ID !== undefined;
  if (testingWithJest) exports.detectRedFlags = detectRedFlags;
} catch {
}
