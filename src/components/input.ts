export class InputHandler {
        public keys: string[];
        constructor() {
        this.keys = [];
        window.addEventListener('keydown', k => {
            if (k.key === 'ArrowDown') {
                this.keys.push(k.key.toString());
            }
            console.log(k.key, this.keys);
        })
    }
    
} 