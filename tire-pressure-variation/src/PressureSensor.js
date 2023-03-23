function offset() {
  return 16; 
}

function samplePressure() {
  // placeholder implementation that simulate a real sensor in a real tire
  /*  const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
    return pressureTelemetryValue;*/
  return Math.floor(6 * Math.random() * Math.random());
}

export default class PressureSensor {
  popNextValue() {
    const pressureTelemetryValue = samplePressure();
    return offset() + pressureTelemetryValue;
  }
} 
