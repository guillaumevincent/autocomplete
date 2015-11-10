class AutoComplete {
    constructor(minions = []) {
        this._minions = minions;
    }

    help(input = '') {
        var answers = [];
        this._get_minions(input).forEach(function (minion) {
            minion.mine().forEach(function (answer) {
                answers.push(answer)
            });
        });
        return answers;
    }

    _get_minions(input = '') {
        return this._minions.filter(function (minion) {
            return input.indexOf(minion.trigger) > -1
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