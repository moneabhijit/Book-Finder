import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    
      userName: ['', Validators.required],
     
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]],
       confirmPassword: ['', Validators.required]
     
  });
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }

       // display form values on success
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
   }

   onReset() {
       this.submitted = false;
       this.registerForm.reset();
   }

}
