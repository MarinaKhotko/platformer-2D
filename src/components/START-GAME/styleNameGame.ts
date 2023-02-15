import type Game from '../game-canvas';

export function styleNameGame(ptotot: Game): void {
  ptotot.ctx.fillStyle = 'black';
  ptotot.ctx.font = '120px Luckiest Guy';
  ptotot.ctx.strokeStyle = 'White';
  ptotot.ctx.lineWidth = 5;
  ptotot.ctx.fillText('DARK MYSTERY', ptotot.canvas.width / 2,  ptotot.canvas.height*0.15);
  ptotot.ctx.strokeText('DARK MYSTERY', ptotot.canvas.width / 2, ptotot.canvas.height*0.15);
  ptotot.ctx.textAlign = 'center';
}
