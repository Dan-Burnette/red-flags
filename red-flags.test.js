const redFlags = require('./red-flags.js');

describe('detect', () => {
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

describe('insertFlag', () => {
  xtest('TODO', () => {

  });

  xtest('does not insert on invisible elements (i.e. <script> tags, etc)', () => {

  });

  xtest('does not insert on elements that already have the flag added already', () => {

  });
})
