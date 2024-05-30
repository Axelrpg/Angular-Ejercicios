import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-4-structural-directives',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './structural-directives.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StructuralDirectivesComponent {
  ifCondition: number = 5;

  forCondition: number[] = [1, 2, 3, 4, 5];
}
