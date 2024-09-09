const redFlags = require('./red-flags.js');

describe('detectRedFlags', () => {
  test('returns red flags present in the document', () => {
    document.body.innerHTML =
      "<p>We hustle... with a sense of relentless urgency!</p>";

    const results = redFlags.detectRedFlags(document.body);

    const expected = ["hustle", "relentless", "urgency"];
    expected.forEach(r => expect(results).toContain(r));
  });

  test('does not return duplicates', () => {
    document.body.innerHTML =
      "<p>We're fast-paced, scrappy, fast-paced and scrappy!</p>";

    const results = redFlags.detectRedFlags(document.body);

    const expected = ["fast-paced", "scrappy"];
    expect(results).toHaveLength(expected.length);
    expected.forEach(r => expect(results).toContain(r));
  });

  test('works case insensitively', () => {
    document.body.innerHTML =
      "<p>We hustle... with a sense of ReLeNtLeSs UrGeNcY! Scrappy!</p>";

    const results = redFlags.detectRedFlags(document.body);

    const expected = ["hustle", "relentless", "urgency", "scrappy"];
    expected.forEach(r => expect(results).toContain(r));
  });
});

describe('elementsNeedingFlagInsertion', () => {
  xtest('does NOT return elements that already have the flag style', () => {
    // TODO
  });
  xtest('returns elements directly containing the flag', () => {
    // TODO
  });

  xtest('does NOT return elements containing the flag through their child nodes', () => {
    // TODO
  });
})

describe('insertFlag', () => {
  xtest("wraps the given flag text in a <span> with class of 'red-flag-extension'", () => {
    // TODO
  });
})

describe('execute', () => {
  test("it detects red flags and inserts the style", () => {
    document.body.innerHTML =
      "<p>We hustle... with a sense of relentless urgency!</p>";

    redFlags.execute();

    expect(document.body.innerHTML).toBe(
      "<p>We <span class=\"red-flag-extension\">hustle</span>... with a sense of <span class=\"red-flag-extension\">relentless</span> <span class=\"red-flag-extension\">urgency</span>!</p>"
    );
  });
})
