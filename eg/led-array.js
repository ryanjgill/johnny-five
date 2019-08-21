const {Board, Leds} = require("../lib/johnny-five.js");
const board = new Board();

board.on("ready", () => {
  const array = new Leds([3, 5, 6]);

  array.pulse();
});
/* @markdown

Control multiple LEDs at once by creating an LED collection (`Leds`).
All must be on PWM pins if you want to use methods such
as `pulse()` or `fade()`

@markdown */
