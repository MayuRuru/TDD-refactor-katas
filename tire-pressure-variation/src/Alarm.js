//import PressureSensor from "./PressureSensor";
//import ConsoleNotifier from "./ConsoleNotifier";

var alarmOn = Symbol();
export default class Alarm {
  constructor(sensor, notifier) {
    this.lowPressureThreshold = 17;
    this.highPressureThreshold = 21;
    this.sensor = sensor;
    this.notifier = notifier;
    this[alarmOn] = false;
  }

  check() {
    //const psiPressureValue = this.sensor.popNextPressurePsiValue();
    const psiPressureValue = this.sensor.popNextValue();

    if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
      if(!this[alarmOn]) {
        this[alarmOn] = true;
        // console.log("Alarm activated!");
        this.notifier.notifyActiveState();
      }
    } else {
      if(this[alarmOn]) {
        this[alarmOn] = false;
        // console.log("Alarm deactivated!");
        this.notifier.notifyInactiveState();
      }
    }
  }
};

