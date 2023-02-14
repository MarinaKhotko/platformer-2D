import type Game from '../../components/game-canvas';
import type { Vector } from '../interfaces';

export class Button {
  protected position: Vector;
  protected FontSize: number;
  protected text: string;
  protected textColor: string;
  protected size: Vector;
  protected fillColor?: string;

  constructor(
    position: Vector,
    size: Vector,
    FontSize: number,
    text: string,
    textColor: string,

    fillColor: string,
  ) {
    this.position = position;
    this.FontSize = FontSize;
    this.text = text;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.size = size;
  }

  draw(ptotot: Game): void {
    ptotot.ctx.fillStyle = 'black';
    ptotot.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y,
    );

    ptotot.ctx.fillStyle = this.textColor;
    ptotot.ctx.font = `${this.FontSize}px Luckiest Guy`;
    ptotot.ctx.fillText(
      this.text,
      this.position.x + this.size.x / 2,
      this.position.y + this.size.y * 0.8,
    );
    ptotot.ctx.textAlign = 'center';
  }

  inBounds(mouseX: number, mouseY: number): boolean {
    return !(
      mouseX < this.position.x ||
      mouseX > this.position.x + this.size.x ||
      mouseY < this.position.y ||
      mouseY > this.position.y + this.size.y
    );
  }
}
