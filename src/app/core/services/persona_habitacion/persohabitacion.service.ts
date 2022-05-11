import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personaHabitacion } from '../../models/persona_habitacion/persohabitacion';
import { SharedService } from 'src/app/shared.service';

@Injectable()
export class PersonaHabitacionService {

    private path = this.sharedService.APIUrl + '/personahabitacion';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<personaHabitacion[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<personaHabitacion>(this.path + '/' + id);
    }

    public agregar(personaHabitacion: personaHabitacion) {
        return this.http.post<void>(this.path, personaHabitacion);
    }

    public actualizar(personaHabitacion: personaHabitacion) {
        return this.http.put<void>(this.path + '/' + personaHabitacion.id, personaHabitacion);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
