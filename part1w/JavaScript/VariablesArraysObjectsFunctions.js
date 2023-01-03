const x = 1
let y = 5
console.log(x, y)
y += 10
console.log(x, y)
y = "sometext"
console.log(x, y)
// x = 4 - type error becuase cx is const

const t = [1, -1, 3]

t.push("hello")

console.log(t.length)
console.log(t[3])

t.forEach(value => {
    console.log(value)
})


const z = [1, -1, 3]

const z2 = z.concat(5) //adds 5 but creats new array instead of linking to old. important because react is meant to be immutable

const p = [1, -1, 3]

const p2 = p.map(value1 => value1 * 2)
console.log(p2)


//const m2 = t.map(value => '<li>' + value + '</li>')
//console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
// map can turn things into html strings, this is how map can list objects things in a react app (remember card from nhi)
// this works because an array is an acceptable elment in return like 'div' when rendering dom.

const [first, second, ...rest] = t
//...variableName does whatever follows from the index number til the end.
console.log(first, rest)

//object literals:
const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
}

const object2 = {
    name: "FullStac we application development",
    level: "intermediate studies",
    size: 5,
}
const object3 = {
    name:{first:"Dan", last: "Abramov",},
    grades: [2,3,5,3],
    department: "Stanford University",
}

console.log(object1.name)
const fieldName = "age"
console.log(object1[fieldName])


//madding properties
object1.address = "Helsinki"
object1["secretNumber"] = 12341

console.log(object1.secretNumber)

const sum = (p1,p2) => {
    console.log(p1)
    console.log(p2)
    return p1+p2
}

sum(1,2)

const result = sum(1,5)
console.log(result)


const square = p => {
    console.log(p)
    return p*p
}

console.log(square(4))

const squareOneLine = p => p*p

console.log(squareOneLine(3))

function product(a, b) {
    return a*b
}

console.log(product(2,6))

const average = function(a,b) {
    return (a+b)/2
}

console.log(average(3,6))