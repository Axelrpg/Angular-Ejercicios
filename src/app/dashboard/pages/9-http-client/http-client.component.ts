import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { UnknownService } from '../../../services/unknown.service';

@Component({
  selector: 'app-9-http-client',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './http-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class HttpClientComponent {
  public unknownsService = inject(UnknownService);
}
