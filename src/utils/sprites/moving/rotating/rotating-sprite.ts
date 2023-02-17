import type Game from '../../../../components/game-canvas';
import type { Vector } from '../../../interfaces';
import { Sprite } from '../../Sprite';

export class RotatingSprite extends Sprite {
  protected rotateAngle = 0;
  protected rotationSpeed: number;
  protected rotationAxis: Vector;

  public constructor(
    game: Game,
    sizeFinal: Vector,
    spriteSize: Vector,
    rotationSpeed: number,
    rotationAxis: Vector,
    position: Vector = { x: -sizeFinal.x / 2, y: -sizeFinal.y / 2 },
    path: string = '../../assets/фреза.png',
  ) {
    super(game, position, sizeFinal, spriteSize, path);
    this.rotationSpeed = rotationSpeed;
    this.rotationAxis = rotationAxis;
  }

  render(): void {
    this.game.ctx.save();
    this.game.ctx.translate(this.rotationAxis.x, this.rotationAxis.y);
    this.game.ctx.rotate((this.rotateAngle * Math.PI) / 180);
    this.draw();
    this.game.ctx.restore();
  }

  update(): void {
    setInterval(() => {
      this.rotateAngle += this.rotationSpeed;
      this.render();
    }, 500);
  }
}
