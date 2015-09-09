describe("pigLatin", function() {
  it('adds an ay to the end of a word that starts with a vowel', function() {
    expect(pigLatin("Apple")).to.equal("Appleay");
  });

  it('moves all leading consonants to end of string and adds \'ay\' ', function() {
    expect(pigLatin("Grapefruit")).to.equal("apefruitGray")
  });
});
