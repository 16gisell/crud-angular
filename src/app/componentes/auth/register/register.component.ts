import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public isError =false;
  public isTrue = false;
  public message ="";

  registerGroup: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.createForm();
  }
  createForm() {
   this.registerGroup = this.fb.group({
      name: ['', Validators.required ],
      lastname: ['', Validators.required],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.required,Validators.min(8)])]
   });
 }
  ngOnInit(): void {
  }

  onSubmit():void{

    delete this.registerGroup.value.date;
    delete this.registerGroup.value.id_users;

    this.authService.CreateUser(this.registerGroup.value)
    .subscribe(
      rest =>{
        console.log(rest)
        this.isTrue=true;
        this.message=rest.message;
        setTimeout(()=>{
          this.isTrue=false;
          this.router.navigate(['home']);
        },3000);
      },
      error => {
        console.log(error.error.text)
        this.isError=true;
        this.message=error.error.text;
        setTimeout(()=>{
          this.isError=false;
          location.reload();
        },3000);
      }
    )
  }

}
