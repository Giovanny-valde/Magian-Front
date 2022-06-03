import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DetalleImagenService } from 'src/app/core/services/detalleimagen/detalleimagen.service';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';
import { selectHabitacionPorId } from 'src/app/core/state/selectors/habitacion.selector';

@Component({
  selector: 'app-business-imagenes',
  templateUrl: './business-imagenes.component.html',
  styleUrls: ['./business-imagenes.component.css']
})
export class BusinessImagenesComponent implements OnInit {

  public habitacion$: Observable < any > = new Observable();
  habitacion: any;
  imagenes : any ;


  constructor(
    private storeState: Store < State > ,
    private service : DetalleImagenService
  ) { }

  ngOnInit(): void {
    this.habitacion$ = this.storeState.select(selectHabitacionPorId);
    this.habitacion$.subscribe(data => {
      this.habitacion =  data;
    });
    this.traerImagenes();
  }


  public traerImagenes() {
    this.service.listarTodos().subscribe(data => {
      // console.log(data)
      this.imagenes = data.filter(imagen => imagen.idhabitacion.id == this.habitacion.id);
    });
  }



}
