// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map((items)=>{
        return items.director
    })
return directorsArr
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesDrama = 0
    let spielbergFilms = moviesArray.filter((steve)=>{
        if (steve.director === "Steven Spielberg" && steve.genre.includes("Drama")){
        moviesDrama ++
        return true;
        }
        else {return false}
    })     
    return moviesDrama
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let averScores = moviesArray.reduce((acc,point)=>{
        if (point.score === undefined){
            return acc
        } 
        else{
            return acc + point.score/moviesArray.length
        }

    }, 0)
    
    return Number(averScores.toFixed(2))
//es el mismo ejercicio que el hecho en clase 
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
let dramaMovies = moviesArray.filter((drama)=>{
        return drama.genre.includes("Drama")            
    
        })
        
    return scoresAverage(dramaMovies)

    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let cloneArray = structuredClone (moviesArray);
    cloneArray = cloneArray.sort((elem2, elem1)=>{
        if(elem2.year>elem1.year){
            return 1
        }
        else if(elem2.year<elem1.year){
            return -1
        }
        else {
            if (elem2.tittle>elem1.tittle){
            return 1}
            else if(elem2.title<elem1.title){
            return -1}
            return 0
            }        
            })
    return cloneArray  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

let newMoviesArr = moviesArray.map((elements)=>{
    return elements.title
})
 let orderByName = newMoviesArr.sort()

return orderByName.slice(0,20)

}

/*(elem2, elem1)=>{
    if (elem2.tittle>elem1.tittle){
        return 1}
    else if(elem2.title<elem1.title){
        return -1}

 } */

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
