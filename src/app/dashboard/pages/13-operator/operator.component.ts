import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OperatorService } from '../../../services/operator.service';
import { switchMap } from 'rxjs';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-13-operator',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './operator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class OperatorComponent {

  private operatorService = inject(OperatorService);
  allData: any[] = [];
  dataObtained: any[] = [];

  filterData(data: any[]): any[] {
    return data.filter((item: { category: string; }) => item.category === 'A');
  }

  constructor() {
    this.operatorService.getData().pipe(
      switchMap(data => this.filterData(data)))
      .subscribe(data => {
        this.dataObtained.push(data);
      }
      );

    this.operatorService.getData().subscribe(data => {
      this.allData = data;
    });
  }
}
