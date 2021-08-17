import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import {fileInterface} from '../models/fileInterface';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files: Observable<any>;
  file: Observable<any>;
  public url ="http://localhost:4000/api/file";

  constructor( private http: HttpClient, private authservice: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json',
    Authorization: this.authservice.getToken()
  });

  //traigo todos los arcivos de db
  listFile():any{
    return this.http.get(this.url);
  }
  //traigo los archivos por individual
  filesId(id_files:string):any{
    const url_api = this.url;
    return (this.file=this.http.get(url_api+'/'+id_files));
  }
  //creamos un archivo nuevo
  createFiles(fileInterface:fileInterface):any{
    const url_api = this.url;
    return this.http.post(url_api,fileInterface);
  }

  //eliminar eliminamos un archivo
 deleteFile(id_file: number){
    const url_api =this.url;
    return this.http.delete(url_api+'/'+id_file)
    .pipe(map(data => data));
  }

  // actualizamos los archivos
  updateFile(id_file:number, fileInterface:fileInterface) {
    const url_api =this.url;
    return this.http.put(url_api+'/'+id_file, fileInterface)
    .pipe(map(data => data));
  }
}
