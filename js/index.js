"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {

    userInput: [],

    changeSelect(e) {

        e.preventDefault();
        console.log("TEROBAU");
        let htmlString = '';

        if (this.value === 'circle') {
            htmlString += form.inputElementsWithLabel('radius', this.value);
        } else if (this.value === 'rectangle') {
            htmlString += form.inputElementsWithLabel('width', 'width');
            htmlString += form.inputElementsWithLabel('height', 'height');
        } else if (this.value === 'square') {
            htmlString += form.inputElementsWithLabel('size', this.value);
        }

        this.userInput = this.value;
        document.getElementById('otherInputs').innerHTML = htmlString;
    },

    init() {
        console.log('Form init!');
        document.getElementById('select').addEventListener('change', this.changeSelect);
        document.getElementById('button').addEventListener('click', this.submitForm);
    },


    inputElementsWithLabel(label, id) {
        return `<label id=label>
        ${label}
        <input id="${id}" type="number">
      </label>`;


    },
    submitForm(e) {
        e.preventDefault();

        let html = '';
        const figureSelected = document.getElementById('select').value;
        const result = document.getElementById('results');

        let figure;

        if (figureSelected === 'rectangle') {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            figure = new Rectangle(width, height);
        } else if (figureSelected === 'circle') {
            const radius = document.getElementById('circle').value;
            figure = new Circle(radius);
        } else if (figureSelected === 'square') {
            const size = document.getElementById('square').value;
            figure = new Square(size);

        }

        html += figure.htmlString;
        result.innerHTML = html;

    }
};
form.init();