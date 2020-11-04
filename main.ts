let Light = 0
basic.forever(function () {
    Light = input.lightLevel()
    led.plotBarGraph(
    Light,
    255
    )
    if (Light > 50) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
