var fuzzysearch = require('fuzzysearch');

class AutoComplete {
    constructor(minions = []) {
        this._minions = minions;
    }

    help(input = '') {
        var answers = [];
        this._getMinions(input).forEach(function (minion) {
            minion.mine().forEach(answer => answers.push(answer));
        });
        return answers;
    }

    _getMinions(input = '') {
        return this._minions.filter(minion => minion.trigger && input.indexOf(minion.trigger) > -1)
    }

    static fuzzysearch(input, text){
        return fuzzysearch(text, input)
    }
}