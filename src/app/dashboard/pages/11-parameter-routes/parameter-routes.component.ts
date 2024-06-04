import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-11-parameter-routes',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './parameter-routes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ParameterRoutesComponent {

  public parameter: string = '';

  constructor(private router: Router){}

  navigateWithParams() {
    console.log('this.parameter', this.parameter);
    this.router.navigate(['dashboard/11-parameter-routes', this.parameter]);
  }

}

