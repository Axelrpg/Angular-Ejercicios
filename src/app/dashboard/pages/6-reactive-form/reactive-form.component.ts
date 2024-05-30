import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-6-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ReactiveFormComponent {
  reactiveForm: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.reactiveForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }
  
  onSubmit() {
    console.log('Formulario', this.reactiveForm.value);
    if (this.reactiveForm.valid) {
      console.log('Formulario válido', this.reactiveForm.value);
      return this.reactiveForm.value;
    } else {
      console.log('Formulario inválido');
      return this.reactiveForm.markAllAsTouched();
    }
  }
}
