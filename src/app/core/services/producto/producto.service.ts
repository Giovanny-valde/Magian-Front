import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/producto/producto';
import { SharedService } from 'src/app/shared.service';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}
)
export class ProductoService {

    private path = `${this.sharedService.APIUrl}/producto`;

    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<Producto>(this.path+"/"+id);
    }

    public agregar(producto: Producto) {
        return this.http.post<void>(this.path, producto);
    }

    public actualizar(producto: Producto) {
        return this.http.put<void>(this.path + '/' + producto.id, producto);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
