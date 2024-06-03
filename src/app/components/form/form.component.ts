

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Notiflix from 'notiflix';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  data: FormGroup;

  constructor(private http: HttpClient) {

    this.data = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  SendEmail(): void {

    Notiflix.Loading.standard('Enviando...');

    let params ={
     toUser: this.data.value.name,
     subject: this.data.value.email,
     message: this.data.value.message
    }

    this.http.post('http://localhost:8090/send/Message', params).subscribe(resp=>{
      console.log(resp);
      this.data.reset();            
      Notiflix.Loading.remove();
      Notiflix.Notify.success("mensaje enviado");
    });
    
  };

}
