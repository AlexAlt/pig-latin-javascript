var pigLatin = function(message) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var splitMessage = message.split("");
  var consonants = '';

  var index = vowels.indexOf(splitMessage[0].toLowerCase());
  if (splitMessage[0].toLowerCase() === 'y') {
    consonants += splitMessage.shift();
  }
  while (index === -1) {
    consonants += splitMessage.shift();
    index = vowels.indexOf(splitMessage[0].toLowerCase());
  }
  if (splitMessage[0] === 'u') {
    consonants += splitMessage.shift();
  }
  var translation = splitMessage.join('') + consonants + 'ay';
  return translation;
}
