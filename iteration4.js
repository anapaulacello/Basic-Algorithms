
/*

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avenger=avengers[0];
console.log(avenger);

avengers[0]="IRONMAN";
console.log(avengers); 

console.log(avengers.length);

/* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]; 

rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters[4]); */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop(5);
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]); 

rickAndMortyCharacters.pop(2);
console.log(rickAndMortyCharacters);