import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-environment-variables',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './environment-variables.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EnvironmentVariablesComponent {

  public usersServices = inject(UsersService);

  constructor() {
    setTimeout(() => {
      console.log(this.usersServices.users());
    }, 1000);
  }
}
