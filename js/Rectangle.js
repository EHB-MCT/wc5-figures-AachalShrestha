"use strict";

import Figure from '../js/Figure.js';

export default class Rectangle extends Figure {
  constructor(width, height) {
    super('rectangle');
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  get circumference() {
    return (this._width + this._height) * 2;
  }
  get htmlString() {
    console.log(this.area);
    return `<div class="result">
  <div class="figure rectangle" style="width: ${this._width}px; height:${this._width}px;"></div>
  <div class="infoBox">
    <h3>${this._name}? BE THERE OR BE SQUARE</h3>
    <dl>
      <dt>Height</dt>
      <dd>${this._height}px</dd>

      <dt>Width</dt>
      <dd>${this._width}px</dd>

      <dt>Area</dt>
      <dd>${this.area}px</dd>
      

      <dt>Circumference</dt>
      <dd>${this.circumference}px</dd>
    </dl>
  </div>
</div>`;
  }


}