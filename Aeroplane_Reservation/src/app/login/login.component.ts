import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
  ) { };

  ngOnInit(): void {
    this.LoginForm();
  }

  LoginAcceptForm!: FormGroup;
  isValidForm: boolean = true;

  LoginForm() {
    this.LoginAcceptForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  login(){
    if(this.LoginAcceptForm.valid){
      this.isValidForm = true;
      this.router.navigate(['signup']);
    }
    else{
      this.isValidForm = false;
    }
  }

  signup(){
    this.router.navigate(['signup']);
  }
  main(){
    if(this.LoginAcceptForm.valid){
      this.isValidForm = true;
      this.router.navigate(['main']);
    }
    else{
      this.isValidForm=false;
    }
  }
}
