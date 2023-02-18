window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = 800;
    canvas.height = 720;
    let enemies = [];
    let score = 0;
    let gameOver = false;

    class InputHandler {
        public keys: string[];
        constructor() {
        this.keys = [];
    
        window.addEventListener('keydown', k => {
            if ((   k.key === 'ArrowDown'||
                    k.key === 'ArrowUp' ||
                    k.key === 'ArrowLeft' ||
                    k.key === 'ArrowRight') &&
                    this.keys.indexOf(k.key) === -1){
                this.keys.push(k.key);
            }
            console.log(k.key, this.keys);
        });
    
        window.addEventListener('keyup', k => {
            if (    k.key === 'ArrowDown'||
                    k.key === 'ArrowUp' ||
                    k.key === 'ArrowLeft' ||
                    k.key === 'ArrowRight'){
                    this.keys.splice(this.keys.indexOf(k.key), 1);
            }
            console.log(k.key, this.keys);
        });
    }
    } 

    class Player {
        gameWidth: number;
        gameHeight: number;
        width: number;
        height: number;
        x: number;
        y: number;
        image: HTMLElement | null;
        frameX: number;
        maxFrame: number;
        fps: number;
        frameTimer: number;
        frameInterval: number;
        speed: number;
        vy: number;
        frameY: number;
        weight: number;
        constructor(gameWidth: number, gameHeight: number) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.maxFrame = 8;
            this.frameX = 0;
            this.fps = 20;
            this.frameTimer = 0;
            this.frameInterval = 1000/this.fps;
            this.speed = 0;
            this.vy = 0;
            this.height = 1;
        }
        draw(context: CanvasRenderingContext2D ) { //{ drawImage: (arg0: HTMLElement | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number) => void; }
            /* marker collisions
            context.strokeStyle = 'white';
            context.strokeRect(this.x, this.y, this.width, this.height);
            // collision
            context.beginPath();
            context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI *2);
            context.stroke();
            context.strokeStyle = 'blue';
            context.beginPath();
            context.arc(this.x, this.y, this.width/2, 0, Math.PI *2);
            context.stroke();
            //context.fillStyle = 'white';
            //context.fillRect(this.x, this.y, this.width, this.height);
            */ //end marker collisions
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height,
            this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(input, deltaTime: number, enemies: any[]) {
            // detection collision
            enemies.forEach((enemy: { x: number; width: number; y: number; height: number; }) => {
                const dx = (enemy.x + enemy.width/2) - (this.x + this.width/2);
                const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < enemy.width/2 + this.width/2){
                    gameOver = true;
                }
            })
            //  sprite animation
            if (this.frameTimer > this.frameInterval){
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
           }
            
            // input controls
            if (input.keys.indexOf('ArrowRight') > -1){
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1) {
                this.speed = -5;
            } else if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
                this.vy -= 32;
            } else {
                this.speed = 0;
            }
            // horizontal movement
            this.x += this.speed;
            if (this.x < 0) this.x =0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;
            // vertical movement
            this.y += this.vy;
            if (!this.onGround()){
                this.vy += this.weight;
                this.maxFrame = 5;
                this.frameY = 1;
            } else {
                this.vy = 0;
                this.maxFrame = 8;
                this.frameY = 0;
            }
            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
        }
        onGround(){
            return this.y >= this.gameHeight - this.height;
        }

    }

    class Background {
        gameWidth: number;
        gameHeight: number;
        image: HTMLElement | null;
        x: number;
        y: number;
        height: number;
        width: number;
        speed: number;
        constructor(gameWidth: number, gameHeight: number){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 720;
            this.speed = 7;
        }
        draw(context: CanvasRenderingContext2D ){ //{ drawImage: (arg0: HTMLElement | null, arg1: number, arg2: number, arg3: number, arg4: number) => void; }
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);

        }
        update(){
            this.x -= this.speed;
            if (this.x < 0 - this.width) this.x = 0;
        }

    }

     class Enemy {
        gameWidth: number;
        gameHeight: number;
        width: number;
        height: number;
        image: HTMLElement | null;
        x: number;
        y: number;
        frameX: number;
        maxFrame: number;
        fps: number;
        frameTimer: number;
        frameInterval: number;
        speed: number;
        markedForDeletion: boolean;
        constructor(gameWidth: number, gameHeight: number){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 160;
            this.height = 119;
            this.image = document.getElementById('enemyImage');
            this.x = this.gameWidth;
            this.y = this.gameHeight - this.height;
            this.frameX = 0;
            this.maxFrame = 5;
            this.fps = 20;
            this.frameTimer = 0;
            this.frameInterval = 1000/this.fps;
            this.speed = 8;
            this.markedForDeletion = false;
        }
        draw(context: { drawImage: (arg0: HTMLElement | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number) => void; }){
            /* marker collisions
            context.strokeStyle = 'white';
            context.strokeRect(this.x, this.y, this.width, this.height);
            // collision
            context.beginPath();
            context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI *2);
            context.stroke();
            context.strokeStyle = 'blue';
            context.beginPath();
            context.arc(this.x, this.y, this.width/2, 0, Math.PI *2);
            context.stroke(); // end marker collisions */
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(deltaTime: number){
            
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }
            this.x -= this.speed;
            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
                score++;
            }
        }

    }

    //enemies.push(new Enemy(canvas.width, canvas.height));

    function handleEnemies(deltaTime: number){
        if (enemyTimer > enemyInterval + randomEnemyInterval){
            enemies.push(new Enemy(canvas.width, canvas.height));
            randomEnemyInterval = Math.random() * 1000 + 500;
            enemyTimer = 0;
        } else {
            enemyTimer += deltaTime;
        }
        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update(deltaTime); // strange deltaTime!!

        })
        enemies = enemies.filter(enemy => !enemy.markedForDeletion);

    }

    function displayStatusText(context: CanvasRenderingContext2D){
        context.font = '40px Helvetica';
        context.fillStyle = 'black';
        context.fillText('Score: ' + score, 20, 50);
        context.fillStyle = 'white';
        context.fillText('Score: ' + score, 22, 52);  
        if (gameOver){
            context.textAlign = 'center';
            context.fillStyle = 'black';
            context.fillText('Game Over, try again!', canvas.width/2, 200);
            context.fillStyle = 'white';
            context.fillText('Game Over, try again!', canvas.width/2+2, 202);          
        }    

    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    //const enemy1 = new Enemy(canvas.width, canvas.height);
    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 1000;
    let randomEnemyInterval = Math.random() * 1000 + 500;

    function animate(timeStamp: number){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        background.draw(ctx);
        background.update();
        player.draw(ctx);
        player.update(input, deltaTime, enemies);
        //enemy1.draw(ctx);
        //enemy1.update();
        handleEnemies(deltaTime);
        displayStatusText(ctx);
        if (!gameOver) requestAnimationFrame(animate);
    }
    animate(0);


})

