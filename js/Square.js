"use strict";

import Figure from '../js/Figure.js';
import Rectangle from './Rectangle.js';

export default class Square extends Rectangle {
    constructor(name, size) {
        super(name, size, size);

    }
}