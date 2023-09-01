import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  selectedTab: string = 'email';
  agreeToTerms = true;
  
   ngOnInit(): void {
    
    
   }

  registerForm = new FormGroup({
    firstname: new FormControl("",[Validators.required]),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    password: new FormControl("")
  });

  registerSubmited(){
    console.log(this.registerForm.value)
  }
  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
}
