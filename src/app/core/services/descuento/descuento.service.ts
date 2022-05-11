import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { descuento } from '../../models/descuento/descuento';
import { SharedService } from 'src/app/shared.service';

@Injectable({
    providedIn: 'root'
})

export class DescuentoService {

    private path = this.sharedService.APIUrl + '/descuento';
    
    constructor(private sharedService:SharedService, private http: HttpClient ) { }

    public listarTodos() {
        return this.http.get<descuento[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<descuento>(this.path + '/' + id);
    }

    public agregar(descuento: descuento) {
        return this.http.post<void>(this.path, descuento);
    }

    public actualizar(descuento: descuento) {
        return this.http.put<void>(this.path , descuento);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }


}
