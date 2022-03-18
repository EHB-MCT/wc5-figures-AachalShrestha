"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {



    changeSelect(e) {
        /*    console.log("hello");
           let result = document.getElementById('results');

           console.log(this.userInput.change);
           result += this.userInput.change.htmlString(); */

        console.log("hello");
        let htmlString = '';

        if (this.value === 'circle') {
            htmlString += form.inputElementsWithLabel('radius', this.value);
        } else if (this.value === 'rectangle') {
            htmlString += form.inputElementsWithLabel('width', this.value);
            htmlString += form.inputElementsWithLabel('height', this.value);
        } else if (this.value === 'square') {

            htmlString += form.inputElementsWithLabel('size', this.value);
        };



        document.getElementById('otherInputs').innerHTML = htmlString;

        console.log(this.value);
    },

    init() {
        console.log('Form init!');
        document.getElementById('select').addEventListener('change', this.changeSelect);

        document.getElementById('form').addEventListener('submit', this.submitForm());
    },
    inputElementsWithLabel(label, id) {
        return `<label>
        ${label}
        <input id="${id}" type="number">
      </label>`;


    },
    submitForm(e) {
        const doc = document.getElementById(this.value);
        console.log(this.value);

    }
};
form.init();