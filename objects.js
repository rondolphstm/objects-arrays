
let person ={
    name: "ronnie",
    lastName: "martin",
    age: 21,
    inClass: true,
    classesTaught: [`javascript`,'arrays']
}

person.name = "rondolph" //edit
person.hasGlasses = true; // add a new property
console.log(person);

person.Age = 21 // mistyped age
console.log(person)



// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf("age") != -1
// console.log(hasAge)



// let {name, age} = person
// console.log(name)
// console.log(age)


// console.log(person)
// delete person.name
// console.log(person.lastName)

// console.log(person)
// delete person.name
// // console.log(person.lastName)
// person.name = 'ronnie'

// console.log(person.name)