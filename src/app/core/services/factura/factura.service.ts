import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { factura } from '../../models/factura/factura';
import { SharedService } from 'src/app/shared.service';

@Injectable()
export class FacturaService {

    private path = this.sharedService.APIUrl + '/factura';
    
    constructor(private sharedService:SharedService, private http: HttpClient ) { }

    public listarTodos() {
        return this.http.get<factura[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<factura>(this.path + '/' + id);
    }

    public agregar(factura: factura) {
        return this.http.post<void>(this.path, factura);
    }

    public actualizar(factura: factura) {
        return this.http.put<void>(this.path + '/' + factura.id, factura);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }


}