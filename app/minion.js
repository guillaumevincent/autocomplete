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
            {'id': 'sameDay'},
            {'id': 'lastDay'},
            {'id': 'lastWeek'},
            {'id': 'lastMonth'}
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

    static translate(answers, lang = 'en') {
        var translations = {
            "en": {
                "sameDay": "today",
                "lastDay": "yesterday",
                "lastWeek": "last week",
                "lastMonth": "last month"
            },
            "fr": {
                "sameDay": "aujourd'hui",
                "lastDay": "hier",
                "lastWeek": "la semaine dernière",
                "lastMonth": "le mois dernier"
            }
        };
        answers.forEach(function (answer) {
            answer['text'] = translations[lang][answer.id]
        });
        return answers;
    }
}