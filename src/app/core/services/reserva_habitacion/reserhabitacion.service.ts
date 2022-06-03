import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reservahabitacion } from '../../models/reserva_habitacion/reserhabitacion';
import { SharedService } from 'src/app/shared.service';

@Injectable({
    providedIn: 'root'
})
export class ReservaHabitacionService {

    private path = this.sharedService.APIUrl + '/reservahabitacion';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<reservahabitacion[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<reservahabitacion>(this.path + '/' + id);
    }

    public agregar(reservaHabitacion: reservahabitacion) {
        return this.http.post<void>(this.path, reservaHabitacion);
    }

    public actualizar(reservaHabitacion: reservahabitacion) {
        return this.http.put<void>(this.path + '/' + reservaHabitacion.id, reservaHabitacion);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }
}
