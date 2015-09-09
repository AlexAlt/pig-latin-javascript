var pigLatin = function(message) {
  var words = message.split(' ');
  var translatedMessage = [];

  words.forEach(function(word) {
    translatedMessage.push(translateWord(word));
  });

  return translatedMessage.join(' ');
}

var translateWord = function(word) {
  var splitWord = word.split("");
  var consonants = '';

  if (splitWord[0].toLowerCase() === 'y') {
    consonants += splitWord.shift();
  }
  while (splitWord[0].toLowerCase().match(/[aeiouy]/) === null) {
    consonants += splitWord.shift();
  }
  if (splitWord[0] === 'u') {
    consonants += splitWord.shift();
  }
  return splitWord.join('') + consonants + 'ay';
}
