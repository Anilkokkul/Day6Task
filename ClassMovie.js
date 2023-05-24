class movie{
    constructor(title, studio, rating = "PG"){
        this.titlname = title
        this.studioname = studio
        this.Movierating = rating
    }
    getevrythingaboutmovie(){
        this.getMovietitle();
        this.getStudioname();
        this.getrating();
    }
    getMovietitle(){
        console.log("Movietitle: ", this.titlname)
    }
    
    getStudioname(){
        console.log("Studioname: ", this.studioname)
    
        
    }
    getrating(){
        console.log('Rating: ', this.Movierating)
    }
    getPG(movies){
        const moviewithratin = movies.filter((movie) => {
        return movie.rating === this.rating;
        })
        console.log('movies with that rating: ',moviewithratin)
    }
    
        
}

const moviedetails = new movie("Casino Royale", "Eon Productions","PG13");
const movie2 = new movie("Casino Royale", "Eon Productions",)

// moviedetails.getevrythingaboutmovie();
movie2.getevrythingaboutmovie();