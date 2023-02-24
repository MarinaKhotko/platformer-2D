import type Game from '../game-canvas';
import { generatelevel1, generatelevel2 } from './generate-levels';
import type { Level } from './class-level';

export class AllLevels {
  level1: Level;
  level2: Level;
  levels: Level[];

  public constructor(game: Game) {
    this.level1 = generatelevel1(game);
    this.level2 = generatelevel2(game);
    this.levels = [this.level1, this.level2];
  }
}
