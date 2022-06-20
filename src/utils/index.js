const movieArr = [];

// class must have capital letter
class Movie {
    constructor(title, actor = "Not specified") {

        this.title = title;

        this.actor = actor;

    };
    // adding method pushing into an array
    add(){
        movieArr.push(this);
        console.log(movieArr);
    }
}

module.exports = Movie;