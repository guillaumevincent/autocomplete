var assert = require('chai').assert;
var AutoComplete = require('../app/autocomplete');
var Minion = require('../app/minions').Minion;

describe('autocomplete', function () {
    it('should have an array of answers', function () {
        var autocomplete = new AutoComplete();
        var answers = autocomplete.help();
        assert(Array.isArray(answers));
    });
    it('should have some minions', function () {
        var autocomplete = new AutoComplete([{}, {}]);
        assert.equal(2, autocomplete._minions.length);
    });
    it('should return answers depending on the trigger', function () {
        var minion1 = new Minion();
        minion1.mine = function () {
            return ['a1']
        };
        var minion2 = new Minion('#');
        minion2.mine = function () {
            return ['a2']
        };
        var autocomplete = new AutoComplete([minion1, minion2]);
        var answers = autocomplete.help('#');
        assert.deepEqual(['a2'], answers)
    });
    it('should return available minions', function () {
        var minion1 = new Minion();
        var minion2 = new Minion('#');
        var minion3 = new Minion('&');
        var autocomplete = new AutoComplete([minion1, minion2, minion3]);
        var minions = autocomplete._getMinions('#');
        assert.deepEqual([minion2], minions)
    });
});

