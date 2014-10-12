var url = require('url')
var emojis = require('./emojis')

exports.replaceWithUnicode = function (input) {
  return replace(unicodeForEmoji, input)
}

exports.replaceWithHtml = function (input, baseUrl) {
  return replace(htmlForEmoji, input, baseUrl)
}

function replace (fn, input, baseUrl) {
  var output = input
  output = replaceTokens(fn, output, ' ', baseUrl)
  output = replaceTokens(fn, output, '\n', baseUrl)
  return output
}

function replaceTokens (fn, input, separator, baseUrl) {
  var tokens = input.split(separator)
  for (var i = 0; i < tokens.length; ++i) tokens[i] = fn(tokens[i], baseUrl)
  return tokens.join(separator)
}

function unicodeForEmoji(token) {
  return emojis[token] === undefined ? token : emojis[token]
}

function htmlForEmoji (token, baseUrl) {
  if (emojis[token] === undefined) return token
  else {
      var emojiName = token.replace(/:/g, '')
      var src = (baseUrl ? url.resolve(baseUrl, emojiName)  : emojiName) + '.png'
      return '<img class="emoji" width="20" height="20" align="absmiddle" src="' + src + '" alt="' + token + '" />'
  }
}
