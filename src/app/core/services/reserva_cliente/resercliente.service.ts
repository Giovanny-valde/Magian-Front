import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resercliente } from '../../models/reserva_cliente/resercliente';
import { SharedService } from 'src/app/shared.service';

@Injectable({
    providedIn: 'root'
})
export class ReservaClienteService {

    private path = this.sharedService.APIUrl + '/reservacliente';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<resercliente[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<resercliente>(this.path + '/' + id);
    }

    public agregar(reservaCliente: resercliente) {
        return this.http.post<void>(this.path, reservaCliente);
    }

    public actualizar(reservaCliente: resercliente) {
        return this.http.put<void>(this.path + '/' + reservaCliente.id, reservaCliente);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }
}
