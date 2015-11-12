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

    mine(input = '') {
        const translatedAnswers = this.constructor._translate(this._defaultAnswers);
        return translatedAnswers.filter(answer => this.constructor._match(input, answer));
    }

    static _match(input, answer) {
        return answer.text.indexOf(input.toLowerCase()) > -1;
    }

    static _translate(answers, lang = 'en') {
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