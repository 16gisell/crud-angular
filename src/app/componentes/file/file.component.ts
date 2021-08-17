import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import { FileService } from '../../service/file-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  public isError =false;
  public isTrue = false;
  public message ="";

crateFileGroup: FormGroup;
  constructor(private fb: FormBuilder, private fileService: FileService, private router:Router, private _router:ActivatedRoute,) {
    this.createForm();
  }
  createForm() {
   this.crateFileGroup = this.fb.group({
      nameFile: ['', Validators.required ],
      typeFile: ['', Validators.required],
      description: ['', Validators.required],
      codeFile: ['', Validators.required]
   });
 }
  ngOnInit(): void {

  }
  onSubmit():void{

    delete this.crateFileGroup.value.date;
    delete this.crateFileGroup.value.id_users;
    console.log(this.crateFileGroup.value)
    this.fileService.createFiles(this.crateFileGroup.value).subscribe(
      res=>{
        this.isTrue=true;
        this.message=res.message;
        setTimeout(()=>{
          this.isTrue=false;
          this.router.navigate(['home']);
        },3000);
      },
      error=>{
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
