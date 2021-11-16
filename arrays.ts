// Typed Array

const carMakers = ["ford", "toyota", "chevy"]

const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// We write the annotations when we don't initialize the constant with values

const car = carMakers[0];
const myCar = carMakers.pop();

// Tuples = array like structure where each element represents some property of a record
// the order is very critical


// Type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ["brown", true, 40]
// now if we change the order, we get an error
const sprite: Drink = ['clear', true, 35]
const tea: Drink = ['brown', false, 0]