import type Game from '../../../../components/game-canvas';
import type { Vector } from '../../../interfaces';
import { Sprite } from '../../Sprite';

export class MovingSprite extends Sprite {
  protected velocityX: number;
  protected velocityY: number;

  public constructor(
    game: Game,
    position: Vector,
    sizeFinal: Vector,
    spriteSize: Vector,
    path: string,
    frames: Vector,
    velocityX: number,
    velocityY: number,
  ) {
    super(game, position, sizeFinal, spriteSize, path, frames);
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }
}
