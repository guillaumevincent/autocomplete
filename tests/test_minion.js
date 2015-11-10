var assert = chai.assert;

describe('minions', function () {
    it('should have a trigger', function () {
        var minion = new Minion('#');
        assert.isDefined(minion.trigger);
    });
    it('should have a mine method', function () {
        var minion = new Minion();
        assert.isDefined(minion.mine());
    });
});

