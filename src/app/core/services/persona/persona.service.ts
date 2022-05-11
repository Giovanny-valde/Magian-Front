import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { persona } from '../../models/persona/persona';
import { SharedService } from 'src/app/shared.service';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

    private path = this.sharedService.APIUrl+'/persona';

    constructor(private http: HttpClient, private sharedService:SharedService) { }
    public listarTodos(){
      return this.http.get<persona[]>(this.path);
    }
    public listarPorId(id: number){
      return this.http.get<persona>(this.path+'/'+id);
    }
    public agregar(persona: persona){
      return this.http.post<void>(this.path,persona);
    }
    public actualizar(persona: persona){
      return this.http.put<void>(this.path+'/'+persona.id,persona); //el modelo está vacío
    }
    public eliminar(id: number){
      return this.http.delete<void>(this.path+'/'+id);
    }

}
