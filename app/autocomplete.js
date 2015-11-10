class AutoComplete {
    constructor(workers) {
        this.workers = workers;
    }

    help() {
        var answers = [];
        if (this.workers) {
            this.workers.forEach(function (worker) {
                answers.push(worker.mine())
            });
        }
        return answers;
    }
}

class Minion {
    constructor(trigger) {
        this.trigger = trigger;
    }

    mine() {
        return [];
    }
}