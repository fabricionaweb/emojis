# Emojis :frog:

[![NPM version](https://badge.fury.io/js/emojis.png)](http://npmjs.org/emojis)

This little package has a function (two actually) for replacing emoji codes (like `:smiley:`) for emoji images (or
unicode characters) in a given string. Similar to GitHub and other websites.

## Usage

```javascript
$ npm install emojis
emojis@1.0.0 node_modules/emojis
$ node
> var emojis = require('./emojis')
undefined
> emojis.replaceWithUnicode('I :green_heart: you!')
'I 💚 you!'
> emojis.replaceWithHtml('I :green_heart: you!', 'http://example.org/images/emoji/')
'I <img class="emoji" width="20" height="20" align="absmiddle" src="http://example.org/images/emoji/green_heart.png" alt=":green_heart:" /> you!'
```

## Emoji codes and images

The emoji codes used are the ones on [Emoji cheat sheet](http://emoji-cheat-sheet.com/).

Their images are also provided here for you to use
([images.zip](https://github.com/tallesl/emojis/blob/master/images.zip)), but consider
[their copyright](https://github.com/arvida/emoji-cheat-sheet.com/blob/master/LICENSE).
