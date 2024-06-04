import { Injectable, computed, inject, signal } from '@angular/core';
import { Unknown } from '../interfaces/Unknown';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface State {
  unknowns: Unknown[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnknownService {

  private httpClient = inject(HttpClient);

  private apiUrl = environment.apiUrl;
  private endpoint = this.apiUrl + 'api/unknown';

  #state = signal<State>({
    unknowns: [],
    loading: true
  });

  public unknowns = computed(() => this.#state().unknowns);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient.get(this.endpoint)
    .subscribe((response: any) => {
      this.#state.set({
        unknowns: response.data,
        loading: false
      });
    });
  }

}
