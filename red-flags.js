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

// TODO: locate the element, append a red/yellow flag icon.
