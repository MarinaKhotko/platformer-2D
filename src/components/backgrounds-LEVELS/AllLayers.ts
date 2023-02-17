import { Layer } from './Layer';
import type Game from '../game-canvas';

export class AllLayers {
  game: Game;
  layers: HTMLImageElement[];
  speedModifiers: number[];

  constructor(
    game: Game,
    layers: HTMLImageElement[],
    speedModifiers: number[],
  ) {
    this.game = game;
    this.layers = layers;
    this.speedModifiers = speedModifiers;
  }

  getlayers(): Layer[] {
    const Layers = [];
    for (let i = 0; i < this.layers.length; i++) {
      Layers[i] = new Layer(this.game, this.layers[i], this.speedModifiers[i]);
    }
    return Layers;
  }
}
