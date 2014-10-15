var url = require('url')
var emojis = require('./emojis')

exports.replaceWithUnicode = function (input) {
  return replace(input, unicodeForEmoji)
}

exports.replaceWithHtml = function (input, baseUrl) {
  return replace(input, htmlForEmoji, baseUrl)
}

function replace (input, fn, baseUrl) {
  
  // tokens split by colon
  var tokens = input.split(':')
  
  // parsed tokens
  var parsed = [ ]
  
  // flag indicating if previous iteration token is an emoji
  var emojiBefore = true;
  
  // for each token
  for (var i = 0; i < tokens.length; ++i) {

    // current iteration token
    var token = tokens[i]

    // flag indicating if current iteration token is an emoji
    var emojiCurrent = isEmoji(token)
    
    // if we are not dealing with an emoji
    if (!emojiBefore && !emojiCurrent) {
      
      // adds the colon back
      parsed.push(':')
      
    }
    
    // if current iteration token is an emoji
    if (emojiCurrent) {
      
      // parses the emoji and push it to the parsed array
      parsed.push(fn(tokens[i], baseUrl))
      
    }
    
    // if current iteration token isn't an emoji
    else {
      
      // push it without any parsing
      parsed.push(tokens[i])
      
    }
    
    // setting current flag as before flag
    emojiBefore = emojiCurrent
    
  }
  
  // joining the parsed tokens and returning it
  return parsed.join('')
}

function isEmoji(token) {
  return emojis[token] !== undefined
}

function unicodeForEmoji(token) {
  return emojis[token]
}

function htmlForEmoji (token, baseUrl) {
  var src = (baseUrl ? url.resolve(baseUrl, token)  : token) + '.png'
  return '<img class="emoji" width="20" height="20" align="absmiddle" src="' + src + '" alt="' + token + '" />'
}
