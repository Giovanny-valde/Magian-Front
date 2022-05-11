import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { empresa } from "@models/empresa/empresa";
import { SharedService } from "../../../shared.service";
import { empresa } from 'src/app/core/models/empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpresa {

    private path = this.sharedService.APIUrl+"/empresahospedaje";

  constructor(private http:HttpClient,private sharedService:SharedService) 
  { }
    
 public listarTodos(){
  return this.http.get<empresa[]>(this.path);
  }

  public listarPorId(id:number){
    return this.http.get<empresa>(this.path+"/"+id);
  }

  public agregar(empresa:empresa){
    return this.http.post<empresa>(this.path,empresa);
  }

  public actualizar(empresa:empresa){
    return this.http.put<empresa>(this.path,empresa);
  }

  public eliminar(id:number){
    return this.http.delete<empresa>(this.path+"/"+id);
  }

}
