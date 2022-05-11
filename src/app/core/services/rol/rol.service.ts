import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rol } from '../../models/rol/rol';
import { SharedService } from 'src/app/shared.service';

@Injectable()
export class RolService {

    private path = this.sharedService.APIUrl + '/rol';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<rol[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<rol>(this.path + '/' + id);
    }

    public agregar(rol: rol) {
        return this.http.post<void>(this.path, rol);
    }

    public actualizar(rol: rol) {
        return this.http.put<void>(this.path + '/' + rol.id, rol);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
