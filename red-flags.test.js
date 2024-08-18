const redFlags = require('./red-flags.js');

describe('detect', () => {
  test('returns red flags present in the document', () => {
    document.body.innerHTML =
      "<p>We hustle... with a sense of relentless urgency!</p>";

    const results = redFlags.detect(document.body);

    expect(results).toContain("hustle", "relentless", "urgency");
  });

  xtest('works case insensitively', () => {
    document.body.innerHTML =
      "<html><p>We hustle... with a sense of ReLeNtLeSs UrGeNcY! Scrappy!</p></html>";

    const results = detectRedFlags(document);

    expect(results).toBe(["hustle", "relentless", "urgency", "scrappy"]);
  });

  xtest('does not return duplicate red flags', () => {
    document.body.innerHTML =
      "<html><p>We're fast-paced, scrappy, fast-paced and scrappy!</p></html>";
    const results = detectRedFlags(document);

    expect(results).toBe(["fast-paced", "scrappy"])
  });
});

