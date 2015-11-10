var assert = chai.assert;

describe('autocomplete', function () {
    it('should always return array', function () {
        var autocomplete = new AutoComplete();
        var answers = autocomplete.help();
        assert(Array.isArray(answers));
    });
    it('should have some workers', function () {
        var autocomplete = new AutoComplete([{}, {}]);
        assert.equal(2, autocomplete.workers.length);
    });
    it('should call mine from minion', function (done) {
        var minion = new Minion();
        minion.mine = function () {
            done();
        };
        var autocomplete = new AutoComplete([minion]);
        autocomplete.help();
    });
});

