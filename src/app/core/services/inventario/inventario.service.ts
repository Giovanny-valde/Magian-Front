import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventario } from '../../models/inventario/inventario';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private path = `${this.sharedService.APIUrl}/inventario`;

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  public listarTodos(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.path);
  }

  public listarPorId(id: number) {
    return this.http.get<Inventario>(this.path+"/"+id);
  }

  public agregar(inventario: Inventario) {
    return this.http.post<void>(this.path, inventario);
  }

  public actualizar(inventario: Inventario) {
    return this.http.put<void>(this.path + '/' + inventario.id, inventario);
  }

  public eliminar(id: number) {
    return this.http.delete<void>(this.path + '/' + id);
  }

  public listarPorIdProducto(id: number) {
    return this.http.get<Inventario[]>(this.path+"/producto/"+id);
  }

}
