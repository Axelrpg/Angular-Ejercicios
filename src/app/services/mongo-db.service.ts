import { Injectable, computed, inject, signal } from '@angular/core';
import { MongoDBResponse } from '../interfaces/MongoDB';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface State {
  data: MongoDBResponse[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  private httpClient = inject(HttpClient);

  private url = environment.mongoDbUrl;
  private endpoint = this.url + 'users';

  #state = signal<State>({
    data: [],
    loading: true
  });

  public data = computed(() => this.#state().data);
  public loading = computed(() => this.#state().loading);

  constructor() {
    console.log(this.endpoint);
    this.httpClient.get(this.endpoint)
      .subscribe((response: any) => {
        console.log(response);
        this.#state.set({
          data: response,
          loading: false
        });
      });
  }

}
