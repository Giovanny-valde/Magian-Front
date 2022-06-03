import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../../models/proveedor/proveedor';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}
)
export class ProveedorService {

    private path = `${this.sharedService.APIUrl}/proveedor`;

    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos():Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<Proveedor>(this.path+"/"+id);
    }

    public agregar(proveedor: Proveedor) {
        return this.http.post<void>(this.path, proveedor);
    }

    public actualizar(proveedor: Proveedor) {
        return this.http.put<void>(this.path + '/' + proveedor.id, proveedor);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
