import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { usuario } from '../../models/usuario/usuario';

@Injectable()
export class UsuarioService {

    private path = this.sharedService.APIUrl + '/usuario';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<usuario[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<usuario>(this.path + '/' + id);
    }

    public agregar(usuario: usuario) {
        return this.http.post<void>(this.path, usuario);
    }

    public actualizar(usuario: usuario) {
        return this.http.put<void>(this.path + '/' + usuario.id, usuario);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
