basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
})
