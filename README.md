# [![logo](asset/logo/32.gif)](#-emojis) Emojis

[![build](https://travis-ci.org/tallesl/emojis.png)](https://travis-ci.org/tallesl/emojis)
[![coverage](https://coveralls.io/repos/tallesl/emojis/badge.png?branch=master)](https://coveralls.io/r/tallesl/emojis?branch=master)
[![dependencies](https://david-dm.org/tallesl/emojis.png)](https://david-dm.org/tallesl/emojis)
[![devDependencies](https://david-dm.org/tallesl/emojis/dev-status.png)](https://david-dm.org/tallesl/emojis#info=devDependencies)
[![npm module](https://badge.fury.io/js/emojis.png)](http://badge.fury.io/js/emojis)

[![npm](https://nodei.co/npm/emojis.png?mini=true)](https://nodei.co/npm/emojis/)

This little package has a function (two actually) for replacing emoji codes (like `:smiley:`) for emoji images (or
unicode characters) in a given string. Similar to GitHub and other websites.

## Usage

```javascript
$ npm install emojis
emojis@1.0.6 node_modules/emojis
$ node
> var emojis = require('emojis')
undefined
> emojis.replaceWithUnicode('I :heart: you!')
'I ❤️ you!'
> emojis.replaceWithHtml('I :heart: you!', 'http://example.org/images/')
'I <img class="emoji" width="20" height="20" src="http://example.org/images/heart.png" alt="heart"> you!'
```

## Emoji codes and images

The emoji codes used are the ones on [Emoji cheat sheet](http://emoji-cheat-sheet.com/).

Their images are also provided here for you to use
([images.zip](https://github.com/tallesl/emojis/blob/master/images.zip)), but consider
[their copyright](https://github.com/arvida/emoji-cheat-sheet.com/blob/master/LICENSE).

## Aligning the HTML image

One way to align the emoji image within the text would be using `align="absmiddle"`, just as GitHub does, but I didn't do it because [it's obsolete](https://html.spec.whatwg.org/multipage/obsolete.html#attr-img-align).

[A suggestion is to use the following CSS:](http://stackoverflow.com/a/5203632/1316620)

```css
.emoji {
  margin-bottom: .25em;
  vertical-align: middle;
}
```
