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

// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function (n) {
//
//     return function () {
//         let out = n
//         n += 1
//         return out
//     }
// }
//
//
// const counter = createCounter(10)
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12

// Task 3
// 2621. Sleep

// /**
//  * @param {number} millis
//  * @return {Promise}
//  */
// async function sleep(millis) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {resolve()
//         }, millis)
//     })
// }
//
// let t = Date.now()
// sleep(1000).then(() => console.log(Date.now() - t)) // 100


// Task 4
// 2626. Array Reduce Transformation

// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// var reduce = function (nums, fn, init) {
//     let accum = init
//
//     for (let i = 0; i < nums.length; i++) {
//         accum = fn(accum, nums[i])
//     }
//     return accum
// }

// var reduce = function (nums, fn, init) {
//     let accum = init
//
//     nums.forEach((element) => {
//         accum = fn(accum, element)
//     })
//     return accum
// }
//
// let res = reduce([1, 2, 3, 4], function sum(accum, curr) {
//     return accum + curr
// }, 0)
//
// console.log(res)

// Task 5
// 2629. Function Composition

// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// var compose = function(functions) {
//
//     return function(x) {
//         functions.reverse()
//         functions.forEach((func) => {
//             x = func(x)
//         })
//         return x
//     }
// }
//
//
// const fn = compose([x => x + 1, x => 2 * x])
// let res = fn(4) // 9
// console.log(res)

// Task 6
// 2634. Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function (arr, fn) {
//     for (let i = arr.length - 1; i > -1; i--) {
//         // console.log(arr[i])
//         // console.log(fn(arr[i], i))
//         if (!fn(arr[i], i)) {
//             arr.splice(i, 1)
//         }
//     }
//     return arr
// }
//
// filter([0, 5, 10, 20, 30], function greaterThan10(n) {
//     return n > 10;
// })

// Task 7
// 2635. Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = function (arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = fn(arr[i], i)
//     }
//     return arr
// };
//
// console.log(map([1, 2, 3], function plusone(n) {
//     return n + 1;
// }))

// Task 8
// 2648. Generate Fibonacci Sequence

/**
 * @return {Generator<number>}
 */
// var fibGenerator = function*() {
//     let prev = 0
//     let curr = 1
//     yield prev
//     yield curr
//
//     let tmp
//     while (true){
//         tmp = curr + prev
//         prev = curr
//         curr = tmp
//         yield tmp
//     }
// }
//
//
// const gen = fibGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// Task 9
// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function (init) {
//     class counter {
//         constructor(init) {
//             this.value = init
//             this.defaultValue = init
//         }
//
//         increment() {
//             this.value++
//             return this.value
//         }
//
//         decrement() {
//             this.value--
//             return this.value
//         }
//
//         reset() {
//             this.value = this.defaultValue
//             return this.value
//         }
//     }
//
//     return new counter(init)
// }
//
//
// const counter = createCounter(5)
// console.log(counter)
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement());// 4

// Task 10
// 2666. Allow One Function Call

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let called = false
    return function (...args) {
        if (called) return undefined
        else {
            called = true
            return fn(...args)
        }
    }
};


let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

