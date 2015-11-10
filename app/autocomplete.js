class AutoComplete {
    constructor(minions = []) {
        this._minions = minions;
    }

    help(question = '') {
        var answers = [];
        this._get_minions(question).forEach(function (minion) {
            minion.mine().forEach(function (answer) {
                answers.push(answer)
            });
        });
        return answers;
    }

    _get_minions(filter = '') {
        return this._minions.filter(function (minion) {
            return filter.indexOf(minion.trigger) > -1
        })
    }
}

class Minion {
    constructor(trigger = '') {
        this.trigger = trigger;
    }

    mine() {
        return [];
    }
}