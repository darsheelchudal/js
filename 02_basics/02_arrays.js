const marvel_heroes = ["Thor","ironman","spiderman"];
const dc_heroes = ["Batman","Flash","Batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[2]);

// marvel_heroes.concat(dc_heroes); 

const combinedHeroes = [...marvel_heroes,...dc_heroes];
console.log(combinedHeroes);