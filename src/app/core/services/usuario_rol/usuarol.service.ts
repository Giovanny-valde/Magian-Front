import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { usauriorol } from '../../models/usuario_rol/usuarol';

@Injectable()
export class UsuarioRolService {

    private path = this.sharedService.APIUrl + '/usuariorol';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<usauriorol[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<usauriorol>(this.path + '/' + id);
    }

    public agregar(usuarioRol: usauriorol) {
        return this.http.post<void>(this.path, usuarioRol);
    }

    public actualizar(usuarioRol: usauriorol) {
        return this.http.put<void>(this.path + '/' + usuarioRol.id, usuarioRol);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
