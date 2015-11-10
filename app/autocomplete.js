class AutoComplete {
    constructor(workers) {
        this.workers = workers;
    }
    static help() {
        return []
    }
}

class Worker{
    constructor(trigger){
        this.trigger = trigger;
    }
}