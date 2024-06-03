import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private readonly formBuilder= inject(FormBuilder);

  FormGroup= this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mesaje:''
  });

  enviarForm(): void {  
    console.log(this.formBuilder.group.name.valueOf);  
  };

}
