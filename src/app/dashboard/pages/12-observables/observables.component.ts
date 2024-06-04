import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ObservableService } from '../../../services/observable.service';

@Component({
  selector: 'app-12-observables',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './observables.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ObservablesComponent {

  private observableService = inject(ObservableService);
  dataObtained: any[] = [];

  constructor() {
    this.observableService.getData().subscribe(data => {
      this.dataObtained = data;
    });
  }
}
