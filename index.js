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
// var once = function (fn) {
//     let called = false
//     return function (...args) {
//         if (called) return undefined
//         else {
//             called = true
//             return fn(...args)
//         }
//     }
// };
//
//
// let fn = (a, b, c) => (a + b + c)
// let onceFn = once(fn)
//
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

// Task 11
// 2667. Create Hello World Function

// /**
//  * @return {Function}
//  */
// var createHelloWorld = function() {
//
//     return function(...args) {
//         return 'Hello World'
//     }
// };
//
// /**
//  * const f = createHelloWorld();
//  * f(); // "Hello World"
//  */

// Task 12
// 2677. Chunk Array

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function(arr, size) {
//     let arrays = []
//     for (let i = 0; i < arr.length; i+=size) {
//         if (i+size > arr.length) {
//             arrays.push(arr.slice(i,arr.length))
//         }
//         else arrays.push(arr.slice(i,i+size))
//
//     }
//     return arrays
// };

// Task 13
// 2695. Array Wrapper

// /**
//  * @param {number[]} nums
//  * @return {void}
//  */
// var ArrayWrapper = function (nums) {
//     this.value = nums
// };
//
// /**
//  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function () {
//     return this.value.reduce((a, b) => a + b, 0)
// }
//
// /**
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function () {
//     return '[' + this.value.toString() + ']'
// }
//
// /**
//  * const obj1 = new ArrayWrapper([1,2]);
//  * const obj2 = new ArrayWrapper([3,4]);
//  * obj1 + obj2; // 10
//  * String(obj1); // "[1,2]"
//  * String(obj2); // "[3,4]"
//  */

// Task 14
// 2703. Return Length of Arguments Passed

// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
// var argumentsLength = function(...args) {
//     return args.length
// };
//
// /**
//  * argumentsLength(1, 2, 3); // 3
//  */

// Task 15
// 2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
// var expect = function (val) {
//     let exp = new Object()
//     exp.toBe = function (newVal) {
//         if (val === newVal) {
//             return true
//         } else {
//             throw 'Not Equal'
//         }
//     }
//
//     exp.notToBe = function (newVal) {
//         if (val !== newVal) {
//             return true
//         } else {
//             throw 'Equal'
//         }
//     }
//     return exp
//
// };
//
//
// console.log(expect(5).toBe(null)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"

// Task 16
// 2723. Add Two Promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// var addTwoPromises = async function (promise1, promise2) {
//     return await promise1 + await promise2
//
// };
//
//
// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//     .then(console.log); // 4

// Task 17
// 2724. Sort By

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// var sortBy = function (arr, fn) {
//     return arr.sort((a, b) => {
//         return fn(a) > fn(b) ? 1 : -1
//     })
// };
//
// console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]))

// Task 18
// 2726. Calculator with Method Chaining

// class Calculator {
//
//     /**
//      * @param {number} value
//      */
//     constructor(value) {
//         this.res = value
//     }
//
//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     add(value) {
//         this.res += value
//         return this
//     }
//
//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     subtract(value) {
//         this.res -= value
//         return this
//     }
//
//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     multiply(value) {
//         this.res *= value
//         return this
//     }
//
//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     divide(value) {
//         if (value === 0) {
//             throw 'Division by zero is not allowed'
//         } else {
//             this.res /= value
//             return this
//         }
//
//     }
//
//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     power(value) {
//         this.res = this.res ** value
//         return this
//     }
//
//     /**
//      * @return {number}
//      */
//     getResult() {
//         return this.res
//     }
// }

// console.log(new Calculator(2).multiply(5).power(2).getResult());

// Task 19
// 2727. Is Object Empty

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if ((obj.length === undefined || obj.length ===0) && Object.keys(obj).length === 0){
        return true
    }else {
        return false
    }
};

console.log(isEmpty([]))