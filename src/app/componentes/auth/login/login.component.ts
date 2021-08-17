import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isError=false;
  public message="";

  loginGroup: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.createForm();
  }
  createForm() {
   this.loginGroup = this.fb.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.required,Validators.min(8)])]
   });
 }
  ngOnInit(): void {
  }

  onSubmit():void{
    return this.authService.loginUser(
      this.loginGroup.value.email,
      this.loginGroup.value.password
    )
    .subscribe(data =>{
      this.router.navigate(['home']);
      const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0)
      this.authService.setUser(data)
      let Lotoken = hashCode(data.password);
      this.authService.setToken(Lotoken);
      this.isError=false
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
