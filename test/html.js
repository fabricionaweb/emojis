var assert = require('assert')
  , emojis = require('../lib/emojis.js')

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace an emoji on the beginning of the line', function () {

      // act
      var actual = emojis.replaceWithHtml(':beer: is the answer')

      // assert
      assert.strictEqual(actual, '\
<img class="emoji" width="20" height="20" src="beer.png" alt="beer"> \
is the answer')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace an emoji on the middle of the line', function () {

      // act
      var actual = emojis.replaceWithHtml('Stop... :hammer: time!')

      // assert
      assert.strictEqual(actual, 'Stop... \
<img class="emoji" width="20" height="20" src="hammer.png" alt="hammer"> \
time!')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace an emoji on the end of the line', function () {

      // act
      var actual = emojis.replaceWithHtml('Patience is :key:')

      // assert
      assert.strictEqual(actual, 'Patience is \
<img class="emoji" width="20" height="20" src="key.png" alt="key">')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace consecutive emojis', function () {

      // act
      var actual = emojis.replaceWithHtml(':game_die::game_die:')

      // assert
      assert.strictEqual(actual, '\
<img class="emoji" width="20" height="20" src="game_die.png" alt="game_die">\
<img class="emoji" width="20" height="20" src="game_die.png" alt="game_die">')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace lines with just emojis', function () {

      // act
      var actual = emojis.replaceWithHtml(':eyes:\n:tongue:')

      // assert
      assert.strictEqual(actual, '\
<img class="emoji" width="20" height="20" src="eyes.png" alt="eyes">\n\
<img class="emoji" width="20" height="20" src="tongue.png" alt="tongue">')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace even with colons on text', function () {

      // act
      var actual = emojis.replaceWithHtml('Here\'s a math for you: :beer: + :beer: = :beers:')

      // assert
      assert.strictEqual(actual, 'Here\'s a math for you: <img class="emoji" width="20" height="20" src="beer.png" alt="beer"> + <img class="emoji" width="20" height="20" src="beer.png" alt="beer"> = <img class="emoji" width="20" height="20" src="beers.png" alt="beers">')

    })
  })
})

