var assert = chai.assert;

describe('worker', function () {
    it('should have a char trigger', function () {
        var worker = new Worker('#');
        assert.isDefined(worker.trigger);
    });
});

