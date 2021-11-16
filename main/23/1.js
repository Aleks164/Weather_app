function getNextCellState(state, neighbors) {
    if (state === false && neighbors === 3) {
        return true;
    }
    return state === true && (neighbors === 2 || neighbors === 3);
}
function getNumberOfAliveAround(field, x, y) {

    let num = 0;
    if (y - 1 >= 0 && y - 1 < field.length) {
        num += field[y - 1][x - 1] || 0;
        num += field[y - 1][x] || 0;
        num += field[y - 1][x + 1] || 0;
    }
    if (y >= 0 && y < field.length) {
        num += field[y][x - 1] || 0;
        num += field[y][x + 1] || 0;
    }
    if (y + 1 >= 0 && y + 1 < field.length) {
        num += field[y + 1][x - 1] || 0;
        num += field[y + 1][x] || 0;
        num += field[y + 1][x + 1] || 0;
    }
    return num;
}
let field = [
    [1, 1],
    [0, 1]
];

function getNextGeneration(field) {
    for (let i = 0; i < field[i].length-1; i++) {
        console.log(i);
        for (let p = 0; p < field[p].length-1; p++) {
            console.log(field[p].length);
            let num = getNumberOfAliveAround(field, p, i);
            console.log(num);
            let state = field[p][i] !== 0;
            console.log(state);
            let nextSrate = getNextCellState(state, num);
            console.log(nextSrate);
            field[p][i] = nextSrate ? 1 : 0;
            console.log(field);
        }       
    }
    console.log(field);
    return field;
}
console.log(getNextGeneration(field));