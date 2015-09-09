describe("pigLatin", function() {
  it('adds an ay to the end of a word that starts with a vowel', function() {
    expect(pigLatin("Apple")).to.equal("Appleay");
    expect(pigLatin("Ukraine")).to.equal("Ukraineay")
  });

  it('moves all leading consonants to end of string and adds \'ay\' ', function() {
    expect(pigLatin("Grapefruit")).to.equal("apefruitGray")
  });

  it('moves three leading consonants to end of string and adds \'ay\' ', function() {
    expect(pigLatin("Stringbeans")).to.equal("ingbeansStray")
  });

  it('moves \'qu\' together if at beginning of word', function() {
    expect(pigLatin("Quasar")).to.equal("asarQuay")
  });

  it('treats \'y\' as a consonant if at beginning', function() {
    expect(pigLatin("Yellow")).to.equal("ellowYay")
  });

  it('treats \'y\' as a vowel if in middle', function() {
    expect(pigLatin("Skydive")).to.equal("ydiveSkay")
  });

  it('works for a sentence', function() {
    expect(pigLatin("Apples are skydiving")).to.equal("Applesay areay ydivingskay")
  });

});
