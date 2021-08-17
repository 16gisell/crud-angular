import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FileService } from '../../service/file-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit   {

  public isError=false;
  public isTrue = false;
  public message;
  public list=[];

  constructor( private fileService: FileService, private router:Router) {
    this.listFiles();
  }
  ngOnInit(): void {
  }

  listFiles():void{
    this.fileService.listFile().subscribe(
      rest=>{
        this.list =rest
      },
      error=>{
        console.log(error)
      }
    )
  }

  delet(id){
    this.fileService.deleteFile(id).subscribe(
      res=>{
        this.isTrue=true;
        this.message=res;
        this.listFiles();
      },
      error=>{
        console.log(error)
      }
    )
  }

}
