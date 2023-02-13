import { game } from './game-canvas';
import { 
    backgroundLayer1, 
    backgroundLayer2,
    backgroundLayer3,
    backgroundLayer4,
    backgroundLayer5,
    backgroundLayer6,
    backgroundLayer7} from '../data/background'

const gameSpeed: number = 5;

export class Layer {
    protected x: number;
    protected x2: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected image: HTMLImageElement;
    protected speed: number;
    protected speedModifier: number;
    
    public constructor (image: HTMLImageElement, speedModifier: number) {
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
        this.width = 1350;
        this.height = 750;
        this.x = 0;
        this.x2 = this.width;
        this.y = 0;
    }

    public update(): void {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    public draw(): void {
        game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        game.ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }

}

const layer1 = new Layer(backgroundLayer1, 0.5);
const layer2 = new Layer(backgroundLayer2, 0.1);
const layer3 = new Layer(backgroundLayer3, 0.2);
const layer4 = new Layer(backgroundLayer4, 0.4);
const layer5 = new Layer(backgroundLayer5, 0.5);
const layer6 = new Layer(backgroundLayer6, 0.5);
const layer7 = new Layer(backgroundLayer7, 0.8);

const gameObjects: Layer[] = [layer1, layer2, layer3, layer4, layer5, layer6, layer7];

const canvasWidth: number = game.canvas.width = 1350;
const canvasHeight: number = game.canvas.height = 700;

export function animate(): void {
    game.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    gameObjects.forEach(obj => {
        obj.update();
        obj.draw();
    })
}

