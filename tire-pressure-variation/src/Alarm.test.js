import Alarm from "./Alarm";

describe('Alarm', () => {

  let sensor;
  let notifier;
  let alarm;

  beforeEach(()=>{
    sensor = {popNextValue: jest.fn()};
    notifier = {notifyActiveState: jest.fn()};
    alarm = new Alarm(sensor, notifier);
  });

  test("Alarm notifies if pressure is below threshold", () => {

    //const sensor = {popNextValue: jest.fn()};
    sensor.popNextValue.mockReturnValue(16);

    //const notifier = {notifyActiveState: jest.fn()};

    //const alarm = new Alarm(sensor, notifier);
    alarm.check();

    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
  });


});