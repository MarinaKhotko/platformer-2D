import type { MillingCutter } from '../../utils/sprites/moving/rotating/milling-cutter';
import { Button } from '../../utils/common-classes/classButton';
import type Game from '../game-canvas';
import { Platform } from '../../utils/sprites/static/static-sprite';
import { styleNameGame } from './styleNameGame';
import { millingCuttersSTART } from './millingCuttersSTART';
import { Sprite } from '../../utils/sprites/Sprite';

export class StartPage {
  backgroundStart: Sprite;
  startGameButton: Button;
  platform1: Platform;
  millingCutters: MillingCutter[];

  constructor(game: Game) {
    this.backgroundStart = new Sprite(
      game,
      { x: 0, y: 0 },
      { x: window.innerWidth, y: window.innerHeight },
      { x: 2540, y: 1440 },
      './../assets/background_start.png',
    );

    this.startGameButton = new Button(
      { x: window.innerWidth * 0.15, y: window.innerHeight * 0.4 },
      { x: 220, y: 80 },
      60,
      'PLAY',
      'white',
      'black',
    );

    this.platform1 = new Platform(
      game,
      { x: 200, y: -500 },
      { x: 578, y: 111 },
      48,
    );

    this.millingCutters = millingCuttersSTART(game);
  }

  addListener(game: Game): void {
    game.canvas.addEventListener('click', (event: MouseEvent) => {
      const mouseX =
        event.pageX - (game.canvas.clientLeft + game.canvas.offsetLeft);
      const mouseY =
        event.pageY - (game.canvas.clientTop + game.canvas.offsetTop);
      if (this.startGameButton.inBounds(mouseX, mouseY) ) {
        game.startPageOpened = false;
        game.allLevels.level1.opened = true
      }
      return game.startPageOpened;
    });
  }

  update(game: Game): void {
    this.backgroundStart.draw();
    this.millingCutters.forEach((el: MillingCutter) => {
      el.update();
      el.render();
    });
    this.platform1.render(game);
    styleNameGame(game);
    this.startGameButton.draw(game);
  }
}
