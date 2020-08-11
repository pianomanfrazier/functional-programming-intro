let val = 1
function mutate() {
    val += 1
}

console.log(val) // a === 1
mutate(val)
console.log(val) // a === 2

// need to setup mocks to write tests for this function