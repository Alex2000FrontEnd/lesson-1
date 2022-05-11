"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answersQuestion = prompt('Один из последних просмотренных фильмов?', '');
const answersGrade = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answersQuestion] = answersGrade;

console.log(personalMovieDB);