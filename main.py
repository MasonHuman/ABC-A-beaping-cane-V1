sonarPin = 0
buzzerPin = DigitalPin.P8

def on_forever():
    global sonarPin
    sonarPin = sonar.ping(DigitalPin.P2, DigitalPin.P3, PingUnit.CENTIMETERS)
    if sonarPin == 0:
        beap(buzzerPin)
        basic.show_leds("""
            . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
        """)
        basic.pause(200)
        basic.show_leds("""
            # # . # #
                    # # . # #
                    # # . # #
                    # # # # #
                    # # . # #
        """)
        return
    if sonarPin >= 110:
        beap(buzzerPin)
        basic.pause(1600)
    elif sonarPin >= 90:
        beap(buzzerPin)
        basic.pause(1400)
    elif sonarPin >= 70:
        beap(buzzerPin)
        basic.pause(1200)
    elif sonarPin >= 50:
        beap(buzzerPin)
        basic.pause(1000)
    elif sonarPin >= 30:
        beap(buzzerPin)
        basic.pause(700)
    elif sonarPin >= 20:
        beap(buzzerPin)
        basic.pause(500)
    elif sonarPin >= 15:
        beap(buzzerPin)
        basic.pause(250)
        pins.digital_write_pin(buzzerPin, 0)
    elif sonarPin >= 10:
        beap(buzzerPin)
        basic.pause(125)
        pins.digital_write_pin(buzzerPin, 0)
    elif sonarPin >= 7:
        beap(buzzerPin)
        basic.pause(62)
        led.toggle(3, 3)
    elif sonarPin >= 4:
        beap(buzzerPin)
        basic.pause(31)
    p = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.INCHES)
    led.plot_bar_graph(p, 3)
basic.forever(on_forever)

def beap(buzzerPin2: any):
    pins.digital_write_pin(buzzerPin2, 1)
    basic.pause(500)
    pins.digital_write_pin(buzzerPin2, 0)