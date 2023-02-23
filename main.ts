let Y = 0
let X = 0
let Pintar_X = 0
let Pintar_Y = 0
basic.forever(function () {
    basic.clearScreen()
    led.setBrightness(255)
    Y = input.acceleration(Dimension.Y)
    X = input.acceleration(Dimension.X)
    if (X < -700) {
        Pintar_X = 0
    } else if (X < -200) {
        Pintar_X = 1
    } else if (X < 0) {
        Pintar_X = 2
    } else if (X < 200) {
        Pintar_X = 3
    } else if (X < 200) {
        Pintar_X = 4
    }
    if (Y < -700) {
        Pintar_Y = 0
    } else if (Y < -200) {
        Pintar_Y = 1
    } else if (Y < 0) {
        Pintar_Y = 2
    } else if (Y < 200) {
        Pintar_Y = 3
    } else if (Y < 200) {
        Pintar_Y = 4
    }
    led.plot(Pintar_X, Pintar_Y)
})
