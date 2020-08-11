function mySum(list) {
    if (list.length <= 0) {
        return 0
    }
    const [head, ...rest] = list
    return head + mySum(rest)
}
console.log('My Sum', mySum([1,2,3,4]))

// make it more generic
// curry example generic operation on a sequence
const add = a => b => a + b
const multiply = a => b => a * b

// const genericSum = (operator, identity) => list => {
//     if (list.length <= 0) {
//         return identity 
//     }
//     const [head, ...rest] = list
//     return operator(head)(genericSum(operator, identity)(rest))
// }

function genericSum(operator, identity) {
    function processList(list) {
        if (list.length <= 0) {
            return identity 
        }
        const [head, ...rest] = list
        return operator(head)(processList(rest))
    }

    return processList
}

// product of sequences Π (capital pi notation) see https://en.wikipedia.org/wiki/Multiplication#Products_of_sequences
// [1,2,3,4] => 1*2*3*4 === 24
const listProduct = genericSum(multiply, 1)

console.log('Product of sequence', listProduct([1,2,3,4])) // 24

// summation Σ notation (sigma notation)
// [1,2,3,4] => 1+2+3+4 === 10
const summation = genericSum(add, 0)

console.log('Generic Sum', summation([1,2,3,4])) // 10

// composition or chaining

const compose = f => g => a => g(f(a))

const add3mult4 = compose(add(3))(multiply(4))

console.log('Add 3 then multiply 4', add3mult4(2)) // 20

// functional library https://ramdajs.com/
const R = require('ramda')

const doubleOdds = compose(R.filter(x => x % 2 === 1))(R.map(multiply(2)))

console.log('double the odds', doubleOdds([1,2,3,4,5,6,7])) // [2, 6, 10, 14]

const sumDoubleOdds = compose(doubleOdds)(summation)

console.log('sum doubled odds', sumDoubleOdds([1,2,3,4,5,6,7])) // 32

// can use native JS chaining but can't share the operation
const result =
    [1,2,3,4,5,6,7]
        .filter(x => x % 2 === 1)
        .map(x => x * 2)
        .reduce((a, b) => a + b)

console.log('Built in JS chaining', result)
