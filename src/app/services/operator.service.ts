import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  private data: any[] = [
    { id: 1, name: 'John', category: 'A' },
    { id: 2, name: 'Doe', category: 'B' },
    { id: 3, name: 'Smith', category: 'A' },
    { id: 4, name: 'Jane', category: 'C' },
    { id: 5, name: 'Doe', category: 'A' }
  ];

  constructor() { }

  getData(): Observable<any> {
    return of(this.data);
  }

  getNames(): Observable<string[]> {
    return this.getData().pipe(
      map(items => items.map((item: { name: string; }) => item.name))
    );
  }

  getCategories(): Observable<string[]> {
    return this.getData().pipe(
      map(items => items.map((item: { category: string; }) => item.category))
    );
  }
}
