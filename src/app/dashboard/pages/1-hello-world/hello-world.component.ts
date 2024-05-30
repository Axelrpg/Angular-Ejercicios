import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './hello-world.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class HelloWorldComponent {

}
