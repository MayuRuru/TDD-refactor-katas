export default class CoffeeMachine {
    constructor(drinkMaker) {
        this.drinkMaker = drinkMaker;
        this.type = "";
        this.sugar = 0;
    }
    coffee(){
        this.type = "C"
    }
    tea(){
        this.type = "T"
    }

    addOneSugar(){
        this.sugar++
    }
    make(){
        if(this.sugar === 0) {
            this.drinkMaker.receive(this.type + "::")
        }else{
            this.drinkMaker.receive(this.type + ":" + this.sugar + ":0")
        }
    }
}
