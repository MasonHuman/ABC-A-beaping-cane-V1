let sonarPin = 0
const buzzerPin = DigitalPin.P8
basic.forever(function () {
    sonarPin = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P3,
        PingUnit.Centimeters
    )
    if(sonarPin == 0){

        beap(buzzerPin)
        basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
        basic.pause(200)
        basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # # # #
        # # . # #
        `)
        return
    }
    if (sonarPin >= 110) {
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
        beap(buzzerPin)
        basic.pause(250)
        pins.digitalWritePin(buzzerPin, 0)
    } else if (sonarPin >= 10) {
        beap(buzzerPin)
        basic.pause(125)
        pins.digitalWritePin(buzzerPin, 0)
    } else if (sonarPin >= 7) {
        beap(buzzerPin)
        basic.pause(62)
    } else if (sonarPin >= 4) {
        beap(buzzerPin)
        basic.pause(31)
    }
    let p = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
    led.plotBarGraph(p, 3);
})

function beap(buzzerPin: any) {
    pins.digitalWritePin(buzzerPin, 1)
    basic.pause(500)
    pins.digitalWritePin(buzzerPin, 0)
}