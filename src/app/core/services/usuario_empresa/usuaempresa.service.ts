import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { usuairoempresa } from '../../models/usuario_empresa/usuaempresa';

@Injectable()
export class UsuarioEmpresaService {

    private path = this.sharedService.APIUrl + '/usuarioempresa';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<usuairoempresa[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<usuairoempresa>(this.path + '/' + id);
    }

    public agregar(usuarioEmpresa: usuairoempresa) {
        return this.http.post<void>(this.path, usuarioEmpresa);
    }

    public actualizar(usuarioEmpresa: usuairoempresa) {
        return this.http.put<void>(this.path + '/' + usuarioEmpresa.id, usuarioEmpresa);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }


}
