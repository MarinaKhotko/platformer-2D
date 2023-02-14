import { game } from '../../../components/game-canvas';
import type { Vector } from '../../interfaces';
import { Sprite } from '../Sprite';

export class StaticSprite extends Sprite {
  rotateAngle: number;

  public constructor(
    position: Vector,
    sizeFinal: Vector,
    rotateAngle: number,
    frames: Vector,
    spriteSize: Vector,
    path: string,
  ) {
    super(position, sizeFinal, spriteSize, path, frames);
    this.rotateAngle = rotateAngle;
  }

  render(): void {
    game.ctx.save();
    game.ctx.translate(0, 0);
    game.ctx.rotate((this.rotateAngle * Math.PI) / 180);
    this.draw();
    game.ctx.restore();
  }
}

export class Platform extends StaticSprite {
  public constructor(
    position: Vector,
    sizeFinal: Vector,
    rotateAngle: number,
    frames: Vector = { x: 0, y: 0 },
    spriteSize: Vector = { x: 578, y: 111 },
    path: string = '../../../../assets/platform.png',
  ) {
    super(position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }
}

export class Logo extends StaticSprite {
  public constructor(
    position = { x: 10, y: 10 },
    sizeFinal = { x: 400, y: 200 },
    rotateAngle = 60,
    frames = { x: 0, y: 0 },
    spriteSize = { x: 4000, y: 2000 },
    path: string = '../../../../assets/logo_rs.png',
  ) {
    super(position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }
}

export class GitHubs extends StaticSprite {
  public constructor(
    position = { x: window.innerWidth * 0.9, y: window.innerHeight * 0.9 },
    sizeFinal = { x: 250, y: 100 },
    rotateAngle = 0,
    frames = { x: 0, y: 0 },
    spriteSize = { x: 1001, y: 401 },
    path: string = '../../../../assets/gitHubs.png',
  ) {
    super(position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }
}
