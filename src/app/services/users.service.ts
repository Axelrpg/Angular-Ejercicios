import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmentDev } from '../../environments/environments.dev';
import { User } from '../interfaces/Users';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);

  private apiUrl = environmentDev.apiUrl;

  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient.get(this.apiUrl)
      .subscribe((response: any) => {
        this.#state.set({
          users: response.data,
          loading: false
        });
      });
  }

}
