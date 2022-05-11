import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../../models/producto/producto';
import { SharedService } from 'src/app/shared.service';

@Injectable()
export class ProductoService {

    private path = this.sharedService.APIUrl + '/producto';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<producto[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<producto>(this.path + '/' + id);
    }

    public agregar(producto: producto) {
        return this.http.post<void>(this.path, producto);
    }

    public actualizar(producto: producto) {
        return this.http.put<void>(this.path + '/' + producto.id, producto);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }


}
