// Task 1
// 2619. Array Prototype Last

// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function () {
//     return this.length > 0 ? this[this.length - 1] : -1
// };
//
// /**
//  * const arr = [1, 2, 3];
//  * arr.last(); // 3
//  */
// const arr = [1, 2, 3]
// console.log(arr.last());

// Task 2
// 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

    return function () {
        let out = n
        n += 1
        return out
    }
}


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
