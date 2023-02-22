import type Game from '../game-canvas';
import { Layer } from './Layer';

export const gameSpeed: number = 5;

export class BackgroundParallax {
  game: Game;
  layersARR: Layer[] = [];
  speedModifiers: number[];
  layers: HTMLImageElement[];

  constructor(
    game: Game,
    layers: HTMLImageElement[],
    speedModifiers: number[],
  ) {
    this.game = game;
    this.layers = layers;
    this.speedModifiers = speedModifiers;

    for (let i = 0; i < this.layers.length; i++) {
      this.layersARR[i] = new Layer(
        this.game,
        this.layers[i],
        this.speedModifiers[i],
      );
    }
  }

  animate(): void {
    this.game.ctx.clearRect(
      0,
      0,
      this.game.canvas.width,
      this.game.canvas.height,
    );
    
    this.layersARR.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  }
}
