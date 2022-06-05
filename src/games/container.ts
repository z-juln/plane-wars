import { Application } from 'pixi.js';

const app = new Application({
  backgroundColor: 0x10bb99,
  view: document.getElementById('container')! as HTMLCanvasElement,
  width: window.innerWidth,
  height: window.innerHeight,
});

export const container = app.stage;
