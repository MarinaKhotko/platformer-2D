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
    this.draw();
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

export class Shining extends StaticSprite {
  protected fps = 30;
  protected frameTimer = 0;
  protected frameInterval = 1000 / this.fps;
  protected currantFrame: number = 1;
  protected maxFrame = 3;
  
  public constructor(
    game: Game,
    position: Vector,
    sizeFinal = { x: 182 * 0.4, y: 206 *0.4 },
    rotateAngle = 0,
    frames = { x: 0, y: 2 },
    spriteSize = { x: 182, y: 206 },
    path: string = '../../../../assets/shining.png',
  ) {
    super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);
  }

  update(deltaTime: number): void { 
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);
    } else {
      this.frameTimer += deltaTime;
    }
  }
}
