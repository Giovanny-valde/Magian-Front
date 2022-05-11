import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comentario } from '../../models/comentario/comentario';
import { SharedService } from 'src/app/shared.service';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {
  
  private path = this.sharedService.APIUrl+'/comentario';

  constructor(private http: HttpClient, private sharedService:SharedService) { }

  public listarTodos(){
    return this.http.get<comentario[]>(this.path);
  }

  public listarPorId(id: number){
    return this.http.get<comentario>(this.path+'/'+id);
  }
  public agregar(comentario: comentario){
    return this.http.post<void>(this.path,comentario);
  }
  
  public actualizar(comentario: comentario){
    return this.http.put<void>(this.path+'/'+comentario.id,comentario);
  }
  
  public eliminar(id: number){
    return this.http.delete<void>(this.path+'/'+id);
  }
  
}
