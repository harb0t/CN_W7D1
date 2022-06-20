// const Movie = require("./utils/index.js")
// path to export
const Movie = require("./utils")
// can be shorter as node expects by default a index.js???

const input = process.argv;
const movies =[];

//grabs from terminal
// console.log(input[2]);

// -----------------------

// const movies = [];

// movies.push(input[2]);

// console.log(movies);

// -----------------------

// if (input[2] === "add"){
//     movies.push({title: input[3], actor: input[4]});
//     console.log(movies);
// }

if (input[2] === "add"){
    const movieObj = new Movie(input[3], input[4]);
    const movieObj2 = new Movie(input[5], input[6]);
    // new key word needed when working with classes
    movieObj.add();
    movieObj2.add();
}
