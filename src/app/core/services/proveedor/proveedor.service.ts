import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proveedor } from '../../models/proveedor/proveedor';
import { SharedService } from 'src/app/shared.service';

@Injectable()
export class ProveedorService {

    private path = this.sharedService.APIUrl + '/proveedor';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<proveedor[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<proveedor>(this.path + '/' + id);
    }

    public agregar(proveedor: proveedor) {
        return this.http.post<void>(this.path, proveedor);
    }

    public actualizar(proveedor: proveedor) {
        return this.http.put<void>(this.path + '/' + proveedor.id, proveedor);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
