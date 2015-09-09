var pigLatin = function(message) {
  var words = message.split(' ');
  var translatedMessage = [];

  words.forEach(function(word) {
    translatedMessage.push(translateWord(word));
  });

  return translatedMessage.join(' ');
}

var translateWord = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var splitWord = word.split("");
  var consonants = '';

  var index = vowels.indexOf(splitWord[0].toLowerCase());
  if (splitWord[0].toLowerCase() === 'y') {
    consonants += splitWord.shift();
  }
  while (index === -1) {
    consonants += splitWord.shift();
    index = vowels.indexOf(splitWord[0].toLowerCase());
  }
  if (splitWord[0] === 'u') {
    consonants += splitWord.shift();
  }
  return splitWord.join('') + consonants + 'ay';
}
