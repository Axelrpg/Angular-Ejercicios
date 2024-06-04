import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-11-parameter-view',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule
  ],
  templateUrl: './parameter-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ParameterViewComponent {

  public parameter: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.parameter = this.activatedRoute.snapshot.params['parameter'];
  }

  goBack() {
    this.router.navigate(['dashboard/11-parameter-routes']);
  }

}
