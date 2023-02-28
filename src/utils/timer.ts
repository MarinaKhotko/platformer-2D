let sec = 0;
let min = 0;
export let t: number
    
export const time = {
    time: '00:00'
};

export function timer(): void {
  t = window.setTimeout(add, 1000);
}

function add(): void {
  tick();
  const rmimn = min > 9 ? min : `0${min}`;
  const rsec = sec > 9 ? sec : `0${sec}`;
  time.time = `${rmimn}:${rsec}`;
  timer();
}

function tick(): void {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
}