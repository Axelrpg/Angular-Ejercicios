import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-7-template-form',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    FormsModule,
  ],
  templateUrl: './template-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class TemplateFormComponent {
  formData = {
    name: '',
    email: '',
  }

  onSubmit() {
    if (this.formData.name &&
      this.formData.email) {
      console.log('Form submitted', this.formData)
    }
  }
}
