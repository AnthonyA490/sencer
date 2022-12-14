function right () {
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function backword () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function left () {
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.A, function () {
    forward()
})
function sencor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance <= 2.5) {
        pins.servoSetPulse(AnalogPin.P13, 0)
        pins.servoSetPulse(AnalogPin.P8, 0)
        basic.pause(500)
        left()
        basic.pause(2500)
        forward()
    }
}
input.onButtonPressed(Button.AB, function () {
    pins.servoSetPulse(AnalogPin.P13, 0)
    pins.servoSetPulse(AnalogPin.P8, 0)
})
input.onButtonPressed(Button.B, function () {
    backword()
})
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
let group = 0
let distance = 0
basic.showIcon(IconNames.Angry)
distance = 0
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        sencor()
    }
    group = 10
})
