# Key Ideas to Functional Programming

You build up your program with functions. You can organize functions into modules.

A function is a reliable black box with explicit inputs and outputs. Everytime you put the same input into the function you get the exact same output. This is the mathematical definition of a function.

> In mathematics, a function is a binary relation over two sets that associates to every element of the first set exactly one element of the second set.
>
> Wikipedia, Function (mathematics) --- https://en.wikipedia.org/wiki/Function_(mathematics)



<a title="Function_color_example_3.gif: Wvbailey.
The original uploader was Wvbailey at English Wikipedia. derivative work: Zerodamage / CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)" href="https://commons.wikimedia.org/wiki/File:Function_color_example_3.svg"><img width="256" alt="Function color example 3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Function_color_example_3.svg/256px-Function_color_example_3.svg.png"></a>


## Function vs. Procedure

Most of the time when we talk about functions in our code they are probably not functions in the mathematical sense. They are more accurately called *procedures*. A chunk of code that does something. There are no guarantees that the chunk of code behaves like a mathematical function (i.e. maps values from one set to another).

## Vocabulary

- functional purity
- referential transparency
- side effect
- monad
- algebraic data type (ADT)
- declarative, imperative, procedural, structural
- reactive

## No for loops

Most of the time when you see a for loop what you really want is `filter`, `map`, or `reduce`. You "declare" what you want instead of telling the computer how to do it.

```js
const things = [1,2,3,4]
const target = 2

// find element
let foundItem = null
for (const element of things) {
    if (element === target) {
        foundItem = element
        break
    }
}
```

```js
const result = things.filter(x => x === target) // result[0] === target

// or using ramda, see https://ramdajs.com/docs/#find
import * as R from 'ramda'

R.find(x => x === target, things) // returns target
```

## Resources and Links

- [blog post] What is a monad? --- [Explain Monads like I'm five](https://dev.to/theodesp/explain-monads-like-im-five)
- [YouTube video] What is the lambda calculus? --- [Lambda Calculus - Fundamentals of Lambda Calculus & Functional Programming in JavaScript](https://youtu.be/3VQ382QG-y4)

## JavaScript & TypeScript Libraries

- [Ramda](https://ramdajs.com/)
- [purify-ts](https://gigobyte.github.io/purify/)