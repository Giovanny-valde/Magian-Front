import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personaInventario } from '../../models/persona_inventario/persoinventario';
import { SharedService } from 'src/app/shared.service';

@Injectable({
  providedIn: 'root'
}
)
export class PersonaInventarioService {

    private path = this.sharedService.APIUrl + '/personainventario';

    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public listarTodos() {
        return this.http.get<personaInventario[]>(this.path);
    }

    public listarPorId(id: number) {
        return this.http.get<personaInventario>(this.path + '/' + id);
    }

    public agregar(personaInventario: personaInventario) {
        return this.http.post<void>(this.path, personaInventario);
    }

    public actualizar(personaInventario: personaInventario) {
        return this.http.put<void>(this.path + '/' + personaInventario.id, personaInventario);
    }

    public eliminar(id: number) {
        return this.http.delete<void>(this.path + '/' + id);
    }

}
