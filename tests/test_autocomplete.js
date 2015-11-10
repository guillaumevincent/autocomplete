var assert = chai.assert;

describe('autocomplete', function () {
    it('should always return array', function () {
        var answers = AutoComplete.help();
        assert(Array.isArray(answers));
    });

    it('should have some workers', function () {
        var autocomplete = new AutoComplete([{}, {}]);
        assert.equal(2, autocomplete.workers.length);
    });
});

