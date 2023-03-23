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

  test("Alarm deactivates if pressure is back to normal range", ()=> {
    sensor.popNextValue.mockReturnValueOnce(22).mockReturnValueOnce(21);

    alarm.check();

    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
  })

  test("Alarm does not notify if a changing pressure value is within range", ()=> {
    sensor.popNextValue.mockReturnValueOnce(18).mockReturnValueOnce(17);

    alarm.check();

    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(0);
  })

  xtest("Alarm already notifiyin out of range does not notify again if a changing pressure value is still out of range", ()=> {
    sensor.popNextValue.mockReturnValueOnce(23).mockReturnValueOnce(25);

    alarm.check();

    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(0);
  })

});