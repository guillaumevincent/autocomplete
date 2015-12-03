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
        it('should implement fuzzy search', function () {
            var text = 'la semaine dernière';
        assert.ok(AutoComplete.fuzzysearch('sd', text));
            assert.ok(AutoComplete.fuzzysearch('semaine d', text));
            assert.ok(AutoComplete.fuzzysearch('s d', text));
            assert.ok(AutoComplete.fuzzysearch('ls d', text));
        });
    });
    describe('minion range', function () {
        it('should be a minion', function () {
            var minionDate = new MinionRange();
            assert.equal('Minion', Object.getPrototypeOf(minionDate.constructor).name);
        });
        it('should have default answers', function () {
            var minion = new MinionRange();
            assert.isDefined(minion._defaultAnswers);
        });
        it('could match an answer', function () {
            var answer = {
                'id': 'sameDay',
                'text': 'today'
            };
            var todayMatch = 't_to_tod_toda_today'.split('_');
            for (var i = 0; i < todayMatch.length; i++) {
                assert.ok(MinionRange._match(todayMatch[i], answer));
            }
        });
        it('could match an answer uppercase', function () {
            var answer = {
                'id': 'sameDay',
                'text': 'today'
            };
            assert.ok(MinionRange._match('T', answer));
        });
        it('should translate answers', function () {
            var answersTranslated = MinionRange._translate([{'id': 'sameDay'}]);
            assert.equal('today', answersTranslated[0].text)
        });
        it('should translate answers in french', function () {
            var answersTranslated = MinionRange._translate([{'id': 'lastDay'}], 'fr');
            assert.equal('hier', answersTranslated[0].text)
        });
        it('should translate and filter answers', function () {
            var minion = new MinionRange();
            var answers = minion.mine('today');
            assert.equal(1, answers.length);
            assert.equal('sameDay', answers[0].id);
        });
    });
});

