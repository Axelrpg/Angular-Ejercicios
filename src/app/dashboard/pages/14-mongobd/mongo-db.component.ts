import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { MongoDBService } from '../../../services/mongo-db.service';

@Component({
  selector: 'app-14-mongobd',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './mongo-db.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MongoDBComponent {

  public mongoDbService = inject(MongoDBService);

  constructor() {
  }
}
