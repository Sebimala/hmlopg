input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Angry)
        basic.showString("MARS")
    }
})
input.onButtonPressed(Button.AB, function () {
    bitbot.buzz(true)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    bitbot.buzz(false)
    bitbot.goms(BBDirection.Reverse, 60, 300)
    bitbot.goms(BBDirection.Forward, 60, 300)
    bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    bitbot.rotatems(BBRobotDirection.Right, 60, 200)
    bitbot.rotate(BBRobotDirection.Left, 60)
})
input.onButtonPressed(Button.B, function () {
    bitbot.setLedColor(0x18E600)
    basic.pause(200)
    bitbot.setLedColor(0xFFFFFF)
    basic.pause(200)
    bitbot.setLedColor(0x18E600)
    basic.pause(200)
    bitbot.ledClear()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("" + (randint(1, 10)))
})
bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
