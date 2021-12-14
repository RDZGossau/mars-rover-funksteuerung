input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
