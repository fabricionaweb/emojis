var url = require('url')
var emojis = require('./emojis')

exports.replaceWithUnicode = function (input) {
  var words = input.split(' ')
  for (var i = 0; i < words.length; ++i) words[i] = unicodeForEmoji(words[i])
  return words.join(' ')
}

exports.replaceWithHtml = function (input, baseUrl) {
  var words = input.split(' ')
  for (var i = 0; i < words.length; ++i) words[i] = htmlForEmoji(words[i], baseUrl)
  return words.join(' ')
}

function unicodeForEmoji(word) {
  return emojis[word] === undefined ? word : emojis[word]
}

function htmlForEmoji (word, baseUrl) {
  if (emojis[word] === undefined) return word
  else {
      var emojiName = word.replace(/:/g, '')
      var src = (baseUrl ? url.resolve(baseUrl, emojiName)  : emojiName) + '.png'
      return '<img class="emoji" width="20" height="20" align="absmiddle" src="' + src + '" alt="' + word + '" />'
  }
}