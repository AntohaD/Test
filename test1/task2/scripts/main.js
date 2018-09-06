"use strict"

// Есть массив чисел:
// [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13]
// Вывести его в виде графика(bar charts), где по оси x - индекс элемента, 
// по оси y - значение.Сделать цветовую градацию показателей на графике: 0 - 5 зеленый, 
// 6 - 10 желтый, свыше 10 красный.
// Допускается использование только html, css, javascript.Использование сторонних библиотек, 
// canvas, svg не допускается.

const H = 60;
const W = 40;
let color = 'white';
const arr = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];

const blockStyles = {
    width: W + 'px',
    height: H + 'px',
    position: 'absolute',
    border: '1px solid black'
}

factory(arr.length);

function createBlock(type, styles) {
    const block = document.createElement(type);

    for (let key in styles) {
        block.style[key] = styles[key];
    }

    return block;
}

function factory(size) {
    for (let i = 0; i < size; i++) {
        const block = createBlock('div', blockStyles);
        block.style.marginLeft = 100 + 'px';
        block.style.bottom = 200 + 'px';
        block.style.height = arr[i] * 10 + 'px';
        block.style.left = W * i + 'px';
        block.style.background = background(arr[i]);
        block.textContent = arr[i];
        document.body.appendChild(block);
    }
}

function background(index) {
       
    if (index <= 5) {
        color = 'green';
    } 
    else if ( index > 10) {
        color = 'red';
    } else {
        color = 'yellow';
    }

    return color;
}