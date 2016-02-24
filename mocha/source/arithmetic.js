"use strict";

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    if(isNaN(x) || isNaN(y)) {
        throw new Error("wrong type");
    }
    if(typeof x !== "number" && !(x instanceof Number)) {
        throw new Error("wrong type");
    }
    if(typeof y !== "number" && !(y instanceof Number)) {
        throw new Error("wrong type");
    }
    if(0 === y || 0 === y.valueOf()) {
        throw new Error("cannot divide by zero");
    }
    return x / y;
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}
