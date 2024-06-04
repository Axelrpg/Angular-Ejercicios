import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObservableService {

  private observableData: Observable<any> = of([]);

  constructor() { }

  getData(): Observable<any> {
    this.observableData = of([
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Smith' },
      { id: 4, name: 'Jane' },
      { id: 5, name: 'Doe' }
    ]);

    return this.observableData;
  }

}
