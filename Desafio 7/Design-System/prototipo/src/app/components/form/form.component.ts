import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class formcomponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.form.get('name')!;
  }

  get subject() {
    return this.form.get('subject')!;
  }

  get message() {
    return this.form.get('message')!;
  }

  post() {
    let registros = {
      id: null,
      name: this.form.get('name')?.value,
      subject: this.form.get('subject')?.value,
      message: this.form.get('message')?.value,
    };

    console.log(registros);
  }

  // newForm(){
  //   this.http
  //   .post<any>('http://localhost:3000/contact-us',{
  //     name: this.form.controls['name'].value,
  //     subject: this.form.controls['subject'].value,
  //     message: this.form.controls['message'].value,
  //   })
  //   .subscribe(() -> {
  //     console.log();
  //   });
}
