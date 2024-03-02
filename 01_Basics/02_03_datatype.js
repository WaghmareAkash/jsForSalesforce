let score =21
console.log(typeof score)

let score1 = "30ab"
let valueInNumber = Number(score1)
console.log(valueInNumber) //Nan Not a Number

let score2 = true // for true number value will be 1 and for false it is 0
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2) // number

console.log(valueInNumber2)
let score3 = null // for null type will be object but for other datatypes its types will be same as datatype
console.log(typeof score3);

let someNumber = 2
let bNummber = Boolean(someNumber)
console.log( bNummber);
/*
to Boolean conversion
0 >> false
1 >> true
any natural number >> true
""  >> false
"Akash" >> true