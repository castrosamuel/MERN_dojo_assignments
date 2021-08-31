//Map

// a callback function that takes in each element of the array returning what we want to do to each element
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

console.log(groceryList)


// We can also use map with an array of numbers
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes)

// Filter
// get an array with only some of the values
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 ); // or !== for odds
console.log(evens)

// only the groceries that have the letter "o" in them
const groceries2 = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries2.filter( item => item.includes("o") );
console.log(oFoods)

// chaining filter and map together.
const values2 = [1, 2, 3, 4, 5];
const oddCubes = values2.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes)
