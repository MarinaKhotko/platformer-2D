import type Game from '../../../components/game-canvas';
import type { Vector } from '../../interfaces';
import { Sprite } from '../Sprite';

export class StaticSprite extends Sprite {
  rotateAngle: number;

  public constructor(
    game: Game,
    position: Vector,
    sizeFinal: Vector,
    rotateAngle: number,
    frames: Vector,
    spriteSize: Vector,
    path: string,
  ) {
    super(game, position, sizeFinal, spriteSize, path, frames);
    this.rotateAngle = rotateAngle;
  }

  render(game: Game): void {
    game.ctx.save();
    game.ctx.translate(0, 0);
    game.ctx.rotate((this.rotateAngle * Math.PI) / 180);
    this.draw();
    game.ctx.restore();
  }
}

export class Platform extends StaticSprite {
  public constructor(
    game: Game,
    position: Vector,
    sizeFinal: Vector,
    rotateAngle: number,
    frames: Vector = { x: 0, y: 0 },
    spriteSize: Vector = { x: 578, y: 111 },
    path: string = '../../../../assets/platform.png',
  ) {
    super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }
}

export class Logo extends StaticSprite {
  public constructor(
    game: Game,
    position = { x: 5, y: 5 },
    sizeFinal = { x: 200, y: 100 },
    rotateAngle = 60,
    frames = { x: 0, y: 0 },
    spriteSize = { x: 4000, y: 2000 },
    path: string = '../../../../assets/logo_rs.png',
  ) {
    super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }
}

export class GitHubs extends StaticSprite {
  public constructor(
    game: Game,
    sizeFinal = { x: 150, y: 55 },
    position = {
      x: window.innerWidth - sizeFinal.x * 1.1,
      y: window.innerHeight - sizeFinal.y * 1.1,
    },
    rotateAngle = 0,
    frames = { x: 0, y: 0 },
    spriteSize = { x: 1001, y: 401 },
    path: string = '../../../../assets/gitHubs.png',
  ) {
    super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }
}
