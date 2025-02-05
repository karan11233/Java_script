const marvelHeroes = ["thor" ,"iron-man", "captain america", "black widow", "hulk"]; 
const dcHeroes = ["batman", "superman", "flash"]


// marvelHeroes.push(dcHeroes)  //by applying push method it will add whole dcHeroes array in the marvelHeroes array
// console.log(marvelHeroes);          Not the value of dcHeroes.
// console.log(marvelHeroes[5]);


const allHeroes = new Array(marvelHeroes + dcHeroes)  // ypu can merge two arrays by using new Array() method
// console.log(allHeroes);
// console.log(typeof allHeroes);


// otherwise you can use concat() method to merge two arrays

// const newArr =  marvelHeroes.concat(dcHeroes)
// console.log(newArr);


// const allNewHeroes = [...marvelHeroes, ...dcHeroes]  // you can also merge two arrays by using spread operator
// console.log(allNewHeroes);

console.log(Array.isArray("Karan"));
console.log(Array.from("Karan"));  // it will convert the string into array
console.log(Array.from({name: "Karan"})); // it will convert the object into array
