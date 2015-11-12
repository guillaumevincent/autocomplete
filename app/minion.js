class Minion {
    constructor(trigger = '') {
        this.trigger = trigger;
    }

    mine() {
        return [];
    }
}

class MinionRange extends Minion {
    constructor(trigger = '#') {
        super(trigger);
        this._defaultAnswers = [
            {'id': 'sameDay', "text": 'today'},
            {'id': 'lastDay', "text": 'yesterday'},
            {'id': 'lastWeek', "text": 'last week'},
            {'id': 'lastMonth', "text": 'last month'}
        ];
    }

    mine(input) {
        // answers = get_answers(input)
        // anwsers = translate_answers(answers)
        // return answer_match(input)
        return this._defaultAnswers
    }

    static match(input, answer) {
        return answer.text.indexOf(input.toLowerCase()) > -1;
    }
}