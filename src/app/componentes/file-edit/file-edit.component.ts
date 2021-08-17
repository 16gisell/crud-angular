import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import { FileService } from '../../service/file-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html',
  styleUrls: ['./file-edit.component.css']
})
export class FileEditComponent implements OnInit {
  public isError =false;
  public isTrue = false;
  public message;
  public activ =false;
  public file=[];
  id:any;

  editFileGroup: FormGroup;
  constructor(private fb: FormBuilder, private fileService: FileService, private router:Router, private _router:ActivatedRoute,) {
    this.createForm();
  }


  createForm() {
    this.editFileGroup = this.fb.group({
      nameFile: ['', Validators.required ],
      typeFile: ['', Validators.required],
      description: ['', Validators.required],
      codeFile: ['', Validators.required]
    });
  }

  ngOnInit() {
    const params = this._router.snapshot.params;
    if(params.id){
      this.fileService.filesId(params.id)
      .subscribe(
        res=>{
          this.editFileGroup.patchValue(res)
          console.log(res.id_files)
          this.id=res.id_files
        },
        error=>console.error(error)
      )
    }
  }

  onSubmit():void{
    console.log(this.editFileGroup.value, this.id)
    this.fileService.updateFile(this.id, this.editFileGroup.value)
    .subscribe(
      res=>{
        this.isTrue= true;
        this.message=res;
        setTimeout(()=>{
          this.router.navigate(['home']);
        },1000);
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
