import Alarm from "./Alarm";
import PressureSensor from "./PressureSensor";
import ConsoleNotifier from "./ConsoleNotifier";
describe('Alarm', () => {

  test("Alarm notifies if pressure is below threshold", () => {

    const sensor = {popNextValue: jest.fn()};
    sensor.popNextValue.mockReturnValue(16);

    const notifier = {notifyActiveState: jest.fn()};

    const alarm = new Alarm(sensor, notifier);
    alarm.check();

    //expect(false).toEqual(false);
    expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
  });


});