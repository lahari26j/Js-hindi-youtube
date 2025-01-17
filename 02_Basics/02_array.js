const k_heros = ["jong suk", "seo jun", "woo soek"]
const vampires = ["Stefan", "Damon", "Elijah"]

k_heros.push(vampires)

//console.log(k_heros[3][0]);

const all_Heros = k_heros.concat(vampires)
//console.log(all_Heros);

// spread operator
const all_new_heros = [...k_heros, ...vampires]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




Array.isArray("Lahari")
console.log(Array.isArray("Lahari"));
console.log(Array.from("Lahari"));
console.log(Array.from({name: "Lahari"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3));


