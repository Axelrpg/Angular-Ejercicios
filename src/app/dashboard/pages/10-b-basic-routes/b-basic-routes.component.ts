import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-10-b-basic-route',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule,
  ],
  templateUrl: './b-basic-routes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class BasicRoutesBComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['dashboard/10-a-basic-routes']);
  }
}
