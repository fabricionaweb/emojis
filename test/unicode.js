var assert = require('assert')
  , emojis = require('../index.js')

describe('emojis', function () {
  describe('replaceWithUnicode', function () {
    it('should replace an emoji on the beginning of the line', function () {

      // act
      var actual = emojis.replaceWithUnicode(':beer: is the answer')

      // assert
      assert.strictEqual(actual, '🍺 is the answer')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithUnicode', function () {
    it('should replace an emoji on the middle of the line', function () {

      // act
      var actual = emojis.replaceWithUnicode('Stop... :hammer: time!')

      // assert
      assert.strictEqual(actual, 'Stop... 🔨 time!')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithUnicode', function () {
    it('should replace an emoji on the end of the line', function () {

      // act
      var actual = emojis.replaceWithUnicode('Patience is :key:')

      // assert
      assert.strictEqual(actual, 'Patience is 🔑')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithUnicode', function () {
    it('should replace consecutive emojis', function () {

      // act
      var actual = emojis.replaceWithUnicode(':game_die::game_die:')

      // assert
      assert.strictEqual(actual, '🎲🎲')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithUnicode', function () {
    it('should replace lines with just emojis', function () {

      // act
      var actual = emojis.replaceWithUnicode(':eyes:/n:tongue:')

      // assert
      assert.strictEqual(actual, '👀/n👅')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithUnicode', function () {
    it('should replace even with colons on text', function () {

      // act
      var actual = emojis.replaceWithUnicode('Here\'s a math for you: :beer: + :beer: = :beers:')

      // assert
      assert.strictEqual(actual, 'Here\'s a math for you: 🍺 + 🍺 = 🍻')

    })
  })
})