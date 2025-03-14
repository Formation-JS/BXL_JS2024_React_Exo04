export const calcOperation = new Map([
    ['add', { display: '+', calc: (v1, v2) => v1 + v2 }],
    ['sub', { display: '-', calc: (v1, v2) => v1 - v2 }],
    ['mult', { display: 'x', calc: (v1, v2) => v1 * v2 }],
    ['div', { display: '/', calc: (v1, v2) => v1 / v2 }],
    ['puis', {display: '^', calc: (value, power) => {
        let result = 1;
        for(let i=0; i < power; i++) {
            result *= value;
        }
        return result;
    }}],
    // ['puis', { display: '^', calc: (v1, v2) => v1 ** v2 }],
]);