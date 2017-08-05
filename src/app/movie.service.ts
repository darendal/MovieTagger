import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return  MOVIES;
  }

}

const MOVIES: Movie[] = [
  {id: 0, name: 'Test1'}
];
