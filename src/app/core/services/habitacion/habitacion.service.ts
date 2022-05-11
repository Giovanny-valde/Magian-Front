import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { habitacion } from '../../models/habitacion/habitacion';
import { SharedService } from 'src/app/shared.service';

@Injectable({
    providedIn: 'root'
  })
export class HabitacionService {

    private path = this.sharedService.APIUrl + '/habitacion';
    
    constructor(private sharedService:SharedService, private http: HttpClient ) { }

    public listarTodos() {
        return this.http.get<habitacion[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<habitacion>(this.path + '/' + id);
    }

    public agregar(habitacion: habitacion) {
        return this.http.post<void>(this.path, habitacion);
    }

    public actualizar(habitacion: habitacion) {
        return this.http.put<void>(this.path , habitacion);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }


}