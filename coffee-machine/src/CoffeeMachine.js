export default class CoffeeMachine {
    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
        this.type = "";
    }
    coffee(){
        this.type = "C"
    }

    tea(){
        this.type = "T"
    }
    make(){
        this.drinkMaker.receive(this.type+"::")
    }
}
