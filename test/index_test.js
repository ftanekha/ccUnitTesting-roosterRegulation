const assert = require('assert'),
rooster = require('../index.js')

describe('rooster', () => {
    it('contains two iterable methods', () => {
        assert.ok('announceDawn' in rooster, 'property "announceDawn" not found')
        assert.ok('timeAtDawn' in rooster, 'property "timeAtDawn" not found')
    })

    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            const expected = 'moo!',
            actual = rooster.announceDawn()
            assert.strictEqual(actual, expected, `announceDawn actually returns ${actual}`)
        })
    })

    describe('.timeAtDawn', () => {
        it('receives one argument', () => {
            assert.equal(rooster.timeAtDawn.length, 1, `timeAtDawn actually receives ${rooster.timeAtDawn.length}`)
        })
        it('returns its argument as a string', () => {
            const actual = rooster.timeAtDawn(7),
            expected = '7'
            assert.strictEqual(actual, expected, `rooster.timeAtDawn returned ${actual}, data type ${(typeof actual).toUpperCase()}`)
        })
        it('throws an error if passed a number lt 0', () => {
            const actual = rooster.timeAtDawn
            assert.throws(actual, 'RangeError')
        })
        it('throws an error if passed a number gt 23', () => {
            const actual = rooster.timeAtDawn
            assert.throws(actual, 'RangeError')
        })
    })
})