var assert = chai.assert;

describe('worker', function () {
    it('should have a trigger', function () {
        var worker = new Worker('#');
        assert.isDefined(worker.trigger);
    });
});

