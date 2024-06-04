import { Injectable } from '@angular/core';
import { Person } from '../interfaces/Person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons: Person[] = [
    {
      firstName: 'Fernanda',
      lastName: 'Vasquez',
      age: 21
    },
    {
      firstName: 'Alondra',
      lastName: 'Méndez',
      age: 23
    },
    {
      firstName: 'Perla',
      lastName: 'Aguilar',
      age: 24
    },
    {
      firstName: 'Daniela',
      lastName: 'Trejo',
      age: 23
    },
    {
      firstName: 'Misheel',
      lastName: 'García',
      age: 21
    }
  ]

  constructor() { }

  getPersons(): Observable<Person[]> {
    return of(this.persons)
  }

}
