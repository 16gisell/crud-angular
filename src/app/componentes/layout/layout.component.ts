import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  public estalogin:boolean = false;
  public personLogada:boolean = false;

  ngOnChanges(){
    this.CompurbaLogin();
    location.reload();
  }

  ngOnInit() {
    this.CompurbaLogin();
  }

  onLogout():void{
    this.authService.logaUser();
    this.router.navigate(['']);
  }
  CompurbaLogin():void{
    if(this.authService.getCurrenUser() == null){
      this.estalogin=false;
    }else{
      this.estalogin=true;
    }
  }

}
