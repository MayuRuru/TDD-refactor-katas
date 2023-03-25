import CoffeeMachine from "./CoffeeMachine";

describe('Coffe Machine', ()=>{
    let drinkMaker;
    let coffeeMachine;

    beforeEach(()=>{
        drinkMaker = {receive: jest.fn()};
        coffeeMachine = new CoffeeMachine(drinkMaker);
    })

    test('Make one coffee', () =>{
        coffeeMachine.coffee()
        coffeeMachine.make()
        expect(drinkMaker.receive).toHaveBeenCalledTimes(1);
        expect(drinkMaker.receive).toHaveBeenCalledWith("C::")
    })

    test('Make one tea', () =>{
        coffeeMachine.tea()
        coffeeMachine.make()
        expect(drinkMaker.receive).toHaveBeenCalledTimes(1);
        expect(drinkMaker.receive).toHaveBeenCalledWith("T::")
    })
})