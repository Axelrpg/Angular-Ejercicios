import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-2-interpolacion',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './interpolation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class InterpolacionComponent {
  interpolationValue = 'Valor de la variable interpolada';
}
