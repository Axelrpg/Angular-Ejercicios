import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-3-property-binding-y-event-binding',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './property-binding-y-event-binding.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PropertyBindingYEventBindingComponent { }
