import Alarm from "./Alarm";

describe('Alarm', () => {
    let sensor;
    let notifier;
    let alarm;

    beforeEach(() => {
        sensor = {popNextValue: jest.fn()};
        notifier = {
            notifyActiveState: jest.fn(),
            notifyInactiveState: jest.fn()
        }
        alarm = new Alarm(sensor, notifier);
    });

    test("Alarm notifies if pressure is below threshold", () => {
        sensor.popNextValue.mockReturnValue(16);

        alarm.check();

        expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
    });

    test("Alarm notifies if pressure is above threshold", () => {
        sensor.popNextValue.mockReturnValue(22);

        alarm.check();

        expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
    })

    test("Alarm deactivates if pressure is back to normal range", () => {
        activateAlarm();
        alarm.check();
        expect(notifier.notifyInactiveState).toHaveBeenCalledTimes(1);
    })

    test("Alarm already notifiyin out of range does not notify again if a changing pressure value is still out of range", () => {
        //sensor.popNextValue.mockReturnValueOnce(23).mockReturnValueOnce(25);
        const alarm = activeAlarmReceiving(25);
        alarm.check();
        expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
    })


    test("Alarm does not notify if a changing pressure value is within range", () => {
        sensor.popNextValue.mockReturnValueOnce(18).mockReturnValueOnce(17);

        alarm.check();
        alarm.check();

        expect(notifier.notifyActiveState).toHaveBeenCalledTimes(0);
    })

    // Extracted methods:
    function activateAlarm() {
        sensor.popNextValue.mockReturnValueOnce(22).mockReturnValueOnce(21);
        alarm.check();
        expect(notifier.notifyActiveState).toHaveBeenCalledTimes(1);
    }

    function activeAlarmReceiving(value) {
        sensor.popNextValue.mockReturnValueOnce(22).mockReturnValueOnce(value);
        const alarm = new Alarm(sensor, notifier)
        alarm.check();
        return alarm
    }


});