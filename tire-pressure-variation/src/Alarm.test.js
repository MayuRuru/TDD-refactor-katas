import Alarm from "./Alarm";
import PressureSensor from "./PressureSensor";
import ConsoleNotifier from "./ConsoleNotifier";

describe('Alarm', () => {
  xtest("fixme", () => {
    const alarm = new Alarm();
    alarm.check();
    expect(false).toEqual(false);
  });

  test("Alarm notifies if pressure is below threshold", () => {
    const alarm = new Alarm(new PressureSensor(), new ConsoleNotifier());
    alarm.check();
    expect(false).toEqual(false);
  });


});