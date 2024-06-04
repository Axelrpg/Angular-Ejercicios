import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-10-a-basic-routes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TitleComponent
  ],
  templateUrl: './a-basic-routes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicRoutesAComponent {

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['dashboard/10-b-basic-routes']);
  }
}
