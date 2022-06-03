import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { reserva } from '../../models/reserva/reserva';

@Injectable({
    providedIn: 'root'
})
export class ImagenService {

    private path = this.sharedService.APIUrl + '/imagen';
    
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<any[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<any>(this.path + '/' + id);
    }

    public agregar(data: any) {
        return this.http.post<void>(this.path, data);
    }

    public actualizar(data: any) {
        return this.http.put<void>(this.path + '/' + data.id, data);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }
}
