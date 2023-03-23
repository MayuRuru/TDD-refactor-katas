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
    sensor.popNextValue.mockReturnValue(16);

    alarm.check();

    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
  });

  test("Alarm notifies if pressure is above threshold", ()=> {
    sensor.popNextValue.mockReturnValue(22);

    alarm.check();

    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);

  })

});