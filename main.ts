basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
