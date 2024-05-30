import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-5-pipes',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './pipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class PipesComponent {
  text: string = 'Hello World';
  currentDate: Date = new Date();
  amount: number = 123456.789;
}
