// const Movie = require("./utils/index.js")
// path to export
// const Movie = require("./utils")
// can be shorter as node expects by default a index.js???

// const input = process.argv;
// const movies =[];

// -----------------------
// -----------------------

//grabs from terminal
// console.log(input[2]);

// -----------------------
// -----------------------

// const movies = [];
// movies.push(input[2]);
// console.log(movies);

// -----------------------
// -----------------------


// -----------------------
// -----------------------

// if (input[2] === "add"){
//     movies.push({title: input[3], actor: input[4]});
//     console.log(movies);
// }

// -----------------------
// -----------------------

// MY ANSWER TO STRETCH
// const Movie = require("./utils")

// const input = process.argv;
// const movies =[];

// if (input[2] === "add"){
//     const movieObj = new Movie(input[3], input[4]);
//     const movieObj2 = new Movie(input[5], input[6]);
//     // new key word needed when working with classes
//     movieObj.add();
//     movieObj2.add();
// }

// -----------------------
// -----------------------

// ANDY'S STRECTH ANSWER
// const Movie = require("./utils");

// const app = (argvArr) => {
// if (argvArr[2] === "add") {
//     const movieObj = new Movie(argvArr[3], argvArr[4]);
//     movieObj.add();
//     } else if (argvArr[2] === "addMulti") {
//     const movie1 = new Movie(argvArr[3], argvArr[4]);
//     const movie2 = new Movie(argvArr[5], argvArr[6]);
//     movie1.add();
//     movie2.add();
//     }
// };

// app(process.argv);

// -----------------------
// -----------------------

// -----------------------
// ------ With yargs ------
// -----------------------

const Movie = require("./utils");

// IMPORTING YARGS (require and package name)
const yargs = require("yargs");

console.log(yargs.argv);
// console.log(yargs.argv.name);
// if change line 83 to 84 with terminal command node src/App.js --name steve just steve is displayed

const app = (argvArr) => {
  if (argvArr[2] === "add") {
    const movieObj = new Movie(argvArr[3], argvArr[4]);
    movieObj.add();
  } else if (argvArr[2] === "addMulti") {
    const movie1 = new Movie(argvArr[3], argvArr[4]);
    const movie2 = new Movie(argvArr[5], argvArr[6]);
    movie1.add();
    movie2.add();
  }
};

// app(process.argv);

// -----------------------
// -----------------------
