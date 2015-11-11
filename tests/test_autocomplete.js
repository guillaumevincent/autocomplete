var assert = chai.assert;

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
    it('could call mine from minion', function (done) {
        var minion = new Minion();
        minion.mine = function () {
            done();
        };
        var autocomplete = new AutoComplete([minion]);
        autocomplete.help();
    });
    it('should return answers depending on the trigger', function () {
        var minion1 = new Minion();
        var minion2 = new Minion('#');
        minion2.mine = function () {
            return ['a2']
        };
        var autocomplete = new AutoComplete([minion1, minion2]);
        var answers = autocomplete.help('#');
        assert.deepEqual(['a2'], answers)
    });
    it('should return available minions', function () {
        var minion1 = new Minion('&');
        var minion2 = new Minion('#');
        var autocomplete = new AutoComplete([minion1, minion2]);
        var minions = autocomplete._getMinions('#');
        assert.deepEqual([minion2], minions)
    });
    it('should return one minion even if trigger doesnt match', function () {
        var minion1 = new Minion();
        var autocomplete = new AutoComplete([minion1]);
        var minions = autocomplete._getMinions();
        assert.deepEqual([minion1], minions)
    });
});

