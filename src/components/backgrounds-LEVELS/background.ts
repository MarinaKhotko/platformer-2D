import type Game from '../game-canvas';
import { AllLayers } from './AllLayers';
import { layersL1, speedModifiersL1 } from './data/img-background-1';

export const gameSpeed: number = 5;

export class BackgroundParallax {
  game: Game;
  allLayers: AllLayers;

  constructor(game: Game) {
    this.game = game;
    this.allLayers = new AllLayers(this.game, layersL1, speedModifiersL1);
  }

  animateParallax(): void {
    this.game.ctx.clearRect(
      0,
      0,
      this.game.canvas.width,
      this.game.canvas.height,
    );

    this.allLayers.getlayers().forEach((obj) => {
      obj.update();
      // obj.scroll();
    });
  }
}
