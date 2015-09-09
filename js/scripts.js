var pigLatin = function(message) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var splitMessage = message.split("");
  var consonants = '';

  var index = vowels.indexOf(splitMessage[0].toLowerCase());
  while (index === -1) {
    consonants += splitMessage.shift();
    index = vowels.indexOf(splitMessage[0].toLowerCase());
  }
  var translation = splitMessage.join('') + consonants + 'ay';
  return translation;
}
