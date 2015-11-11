var assert = chai.assert;

describe('minions', function () {
    it('should have a trigger', function () {
        var minion = new Minion();
        assert.isDefined(minion.trigger);
    });
    describe('mine', function () {
        it('should be defined', function () {
            var minion = new Minion();
            assert.isDefined(minion.mine());
        });
        it('should return an array', function () {
            var minion = new Minion();
            assert(Array.isArray(minion.mine()));
        });
    });
    describe('minion range', function () {
        it('should be a minion', function () {
            var minionDate = new MinionRange();
            assert.equal('Minion', Object.getPrototypeOf(minionDate.constructor).name);
        });
    });
});

