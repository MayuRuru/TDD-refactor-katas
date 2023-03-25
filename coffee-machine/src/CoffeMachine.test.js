import CoffeeMachine from "./CoffeeMachine";

describe('Coffe Machine', ()=>{
    let drinkMaker;
    let coffeeMachine;

    beforeEach(()=>{
        drinkMaker = {receive: jest.fn()};
        coffeeMachine = new CoffeeMachine(drinkMaker);
    });

    test('Make one coffe', () =>{
        coffeMachine.coffe()
        coffeMachine.make()
        expect(drinkMaker.receive()).toHaveBeenCalledTimes(1);
        expect(drinkMaker.receive()).toHaveBeenCalledWith("C::")
    })
})