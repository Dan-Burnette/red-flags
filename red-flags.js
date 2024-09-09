const redFlags = [
  "hustle",
  "work hard play hard",
  "work hard play harder",
  "urgency",
  "relentless",
  "scrappy",
  "fast-paced",
  "fast paced"
]

const detectRedFlags = (body) => {
  const lowerCasedBodyText = body.textContent.toLowerCase();
  return redFlags.filter(flag => lowerCasedBodyText.includes(flag))
}

const commonTextContainingElementsTypes = [
"p", "span", "div", "li", "a", "h1", "h2", "h3", "h4", "h5", "h6", "article", "aside", "footer", "header", "hgroup", "main", "section"
]

const elementsNeedingFlagInsertion = (body, flag) => {
  const pageTextElements = [
    ...body.querySelectorAll(commonTextContainingElementsTypes.toString())
  ];

  return pageTextElements.filter(e => {
    const alreadyInserted = e.className.includes("red-flag-extension");
    if (alreadyInserted) return false;

    const containsFlag = e.textContent.includes(flag);
    const childContainsFlag =
      [...e.children].some(child => child.textContent.includes(flag));

    return containsFlag && !childContainsFlag;
  })
}

const insertRedFlag = (element, flag) => {
  const newInnerHTML =
    element.innerHTML.replace(flag, `<span class='red-flag-extension'>${flag}</span>`)
  element.innerHTML = newInnerHTML;
}

const execute = () => { 
  const body = document.body;
  const detectedRedFlags = detectRedFlags(body);
  detectedRedFlags.forEach(flag => {
    const elements = elementsNeedingFlagInsertion(body, flag);
    elements.forEach(e => insertRedFlag(e, flag));
  });
}

window.addEventListener('load', () => {
  chrome.storage.sync.get(['isEnabled'], (result) => {
    if (result.isEnabled) {
      window.addEventListener("load", execute)
      window.setInterval(execute, 2000);
    }
  });
})

// When running specs, export via commonJS module so the spec can import.
// When running in context of chrome extension, do nothing
// Try/catch because `process` is not defined in chrome extension context.
try {
  const testingWithJest = process.env.JEST_WORKER_ID !== undefined;
  if (testingWithJest) {
    exports.detectRedFlags = detectRedFlags
    exports.elementsNeedingFlagInsertion = elementsNeedingFlagInsertion; 
    exports.insertRedFlag = insertRedFlag;
    exports.execute = execute;
  }
} catch {
}
