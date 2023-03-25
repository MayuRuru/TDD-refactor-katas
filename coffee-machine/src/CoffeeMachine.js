export default class CoffeeMachine {
    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
    }
    coffee(){

    }

    tea(){

    }
    make(){
        this.drinkMaker.receive("C::")
    }
}
