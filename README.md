# La Chute

Translate a French sentence into English before a ball finishes falling.

Play it here: [cgoldstein27-maker.github.io/Hackathon_Frenchgame](https://cgoldstein27-maker.github.io/Hackathon_Frenchgame/)

## How to play

A French sentence appears, and a ball drops through a peg board. Type the English meaning and press Enter. The round lasts until the ball stops moving. There is no clock.

A wrong guess can be tried again while the ball is still in motion. When it rests, the round ends and the translation is shown. **Reset** clears the score and starts the deck over.

There are 33 sentences. They are shuffled, and none repeats until the full set has been used. Longer sentences get a slightly longer drop.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8753
```

Then visit [http://127.0.0.1:8753](http://127.0.0.1:8753).

The physics timer uses [Matter.js](https://brm.io/matter-js/), included in `vendor/matter.min.js`.
