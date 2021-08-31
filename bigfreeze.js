// able to modify that object by pushing or popping values into or from it, or changing values that are stored in it.
const arr = [1,2,3,4];
arr.push(300);

// To prevent even those sorts of changes

// const arr2 = Object.freeze([1,2,3,4]);
// arr2.push(300); // we're no longer allowed to change `arr`


const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

// making a copy of immutable list
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

// or
// concat

const needThyme2 = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

console.log(needThyme)

// slice
// If we find that we already have "thyme" and we want to set the "haveIngredient" to true
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
console.log('Updated thyme haveIngredient to true', gotTheThyme)

// If celery is "ingredient non grata", we could remove it also using slice.
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
console.log('removed celery', notNeceCelery)

// sort

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
console.log(sortedItems)


// sort based off of is an attribute inside of an object, we can still do that using sort
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
console.log(sortedGroceries)