import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/Users';
import { environment } from '../../environments/environment';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);

  private apiUrl = environment.apiUrl;
  private endpoint = this.apiUrl + 'api/users?page=1'

  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient.get(this.endpoint)
      .subscribe((response: any) => {
        this.#state.set({
          users: response.data,
          loading: false
        });
      });
  }

}
