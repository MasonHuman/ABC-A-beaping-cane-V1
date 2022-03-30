let sonarPin = 0
basic.forever(function () {
    sonarPin = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P3,
        PingUnit.Centimeters
    )
    const buzzerPin = DigitalPin.P8
    if (sonarPin >= 200) {
        led.plot(0, 0)
        beap(buzzerPin)
        basic.pause(2400)
    } else if (sonarPin >= 170) {
        beap(buzzerPin)
        basic.pause(2200)
    } else if (sonarPin >= 150) {
        beap(buzzerPin)
        basic.pause(2000)
    } else if (sonarPin >= 130) {
        beap(buzzerPin)
        basic.pause(1800)
    } else if (sonarPin >= 110) {
        beap(buzzerPin)
        basic.pause(1600)
    } else if (sonarPin >= 90) {
        beap(buzzerPin)
        basic.pause(1400)
    } else if (sonarPin >= 70) {
        beap(buzzerPin)
        basic.pause(1200)
    } else if (sonarPin >= 50) {
        beap(buzzerPin)
        basic.pause(1000)
    } else if (sonarPin >= 30) {
        beap(buzzerPin)
        basic.pause(700)
    } else if (sonarPin >= 20) {
        beap(buzzerPin)
        basic.pause(500)
    } else if (sonarPin >= 15) {
        pins.digitalWritePin(buzzerPin, 1)
        basic.pause(250)
        pins.digitalWritePin(buzzerPin, 0)
    } else if (sonarPin >= 10) {
        pins.digitalWritePin(buzzerPin, 1)
        basic.pause(125)
        pins.digitalWritePin(buzzerPin, 0)
    } else if (sonarPin >= 7) {
        pins.digitalWritePin(buzzerPin, 1)
        basic.pause(62)
        pins.digitalWritePin(buzzerPin, 0)
    } else if (sonarPin < 4) {
        pins.digitalWritePin(buzzerPin, 1)
        basic.pause(31)
    }
    led.toggle(3, 0)
})

function beap(buzzerPin: any) {
    pins.digitalWritePin(buzzerPin, 1)
    basic.pause(500)
    pins.digitalWritePin(buzzerPin, 0)
}