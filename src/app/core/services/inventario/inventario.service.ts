import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inventario } from '../../models/inventario/inventario';
import { SharedService } from 'src/app/shared.service';

@Injectable()
export class InventarioService {

    private path = this.sharedService.APIUrl + '/inventario';
    
    constructor(private sharedService:SharedService, private http: HttpClient ) { }

    public listarTodos() {
        return this.http.get<inventario[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<inventario>(this.path + '/' + id);
    }

    public agregar(inventario: inventario) {
        return this.http.post<void>(this.path, inventario);
    }

    public actualizar(inventario: inventario) {
        return this.http.put<void>(this.path + '/' + inventario.id, inventario);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }


}