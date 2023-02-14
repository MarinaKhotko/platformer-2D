import type Game from '../../../../components/game-canvas';
import type { Vector } from '../../../interfaces';
import { RotatingSprite } from './rotating-sprite';

export class MillingCutter extends RotatingSprite {
  protected rotateAngle = 0;
  protected rotationSpeed: number;
  protected rotationAxis: Vector;

  public constructor(
    game: Game,
    sizeFinal: Vector,
    rotationAxis: Vector,
    spriteSize: Vector = { x: 594, y: 628 },
    rotationSpeed: number = 0.01,
    position: Vector = { x: -sizeFinal.x / 2, y: -sizeFinal.y / 2 },
    path: string = '../../assets/фреза.png',
  ) {
    super(
      game,
      sizeFinal,
      spriteSize,
      rotationSpeed,
      rotationAxis,
      position,
      path,
    );
    this.rotationSpeed = rotationSpeed;
    this.rotationAxis = rotationAxis;
  }
}
