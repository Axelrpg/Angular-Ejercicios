import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { Person } from '../../../interfaces/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-8-services',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ServicesComponent {
  public persons: Person[] = [];
  public personService = inject(PersonService)

  constructor() {
    this.personService.getPersons().subscribe(data => {
      this.persons = data
    })
  }
}
