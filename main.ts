function right () {
    pins.servoSetPulse(AnalogPin.P13, 1300)
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function left () {
    pins.servoSetPulse(AnalogPin.P13, 1700)
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function sencor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance <= 2) {
        left()
    } else {
        forward()
    }
}
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
let distance = 0
basic.showIcon(IconNames.Angry)
distance = 0
basic.forever(function () {
    sencor()
    basic.showNumber(distance)
})
