export class InputHandler {
        public keys: string[];
        constructor() {
        this.keys = [];

        window.addEventListener('keydown', k => {
            if ((   k.key === 'ArrowDown'||
                    k.key === 'ArrowUp' ||
                    k.key === 'ArrowLeft' ||
                    k.key === 'ArrowRigt') &&
                    this.keys.indexOf(k.key) === -1){
                this.keys.push(k.key);
            }
            console.log(k.key, this.keys);
        });

        window.addEventListener('keyup', k => {
            if (   k.key === 'ArrowDown'||
                    k.key === 'ArrowUp' ||
                    k.key === 'ArrowLeft' ||
                    k.key === 'ArrowRigt'){
                    this.keys.splice(this.keys.indexOf(k.key), 1);
            }
            console.log(k.key, this.keys);
        });
    }
} 