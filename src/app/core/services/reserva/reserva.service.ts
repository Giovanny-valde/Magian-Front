import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { reserva } from '../../models/reserva/reserva';

@Injectable({
    providedIn: 'root'
})
export class ReservaService {

    private path = this.sharedService.APIUrl + '/reserva';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<reserva[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<reserva>(this.path + '/' + id);
    }

    public agregar(reserva: reserva) {
        return this.http.post<void>(this.path, reserva);
    }

    public actualizar(reserva: reserva) {
        return this.http.put<void>(this.path + '/' + reserva.id, reserva);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }
}
