import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { listarDescuento } from 'src/app/core/state/actions/descuento.action';
import { listarHabitacion, listarHabitacionId } from 'src/app/core/state/actions/habitacion.action';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';
import { selectHabitacionList } from 'src/app/core/state/selectors/habitacion.selector';
import { BusinessHabitacionesEditComponent } from './business-habitaciones-edit/business-habitaciones-edit.component';

@Component({
  selector: 'app-business-habitaciones',
  templateUrl: './business-habitaciones.component.html',
  styleUrls: ['./business-habitaciones.component.css']
})
export class BusinessHabitacionesComponent implements OnInit {

  public habitaciones$ : Observable<any> = new Observable();
  public habitaciones : any = [];
  public habitacionesByEmpresa : any[] = [];
  public idempresa$ : Observable<any> = new Observable();
  public idempresa : number = 0;

  constructor(
    private storeState : Store<State>,
    private store: Store,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(listarHabitacion());
    this.habitaciones$ = this.storeState.select(selectHabitacionList);
    this.idempresa$ = this.storeState.select(selectEmpresaPorId);
    
    this.habitaciones$.subscribe(data => {//obteniendo  todas las habitaciones
      this.habitaciones = data;
      this.idempresa$.subscribe(data => {//obtengo la empresa
        this.idempresa = data.id;
        this.habitacionByEmpresa(data);
      });
    });
  }

  public habitacionByEmpresa(data: any){
    this.habitacionesByEmpresa = this.habitaciones.filter((habitacion:any) => habitacion.idempresa.id == data.id)
    // for (let index = 0; index < this.habitaciones.length; index++) {
    //   if (data.id == this.habitaciones[index].idempresa.id) {
    //     this.habitacionesByEmpresa.push(this.habitaciones[index]);
    //   }
    // }
  }

  public openHabitacion(id:number){
     let height : string = '350px';
    if (id != 0) {
      this.store.dispatch(listarDescuento())
      this.store.dispatch(listarHabitacionId({id: id}));
       height = '600px';
    }
    const dialogref = this.dialog.open(BusinessHabitacionesEditComponent,{
      width: '700px',
      height: height,
      data: {
        id: id,
        empresa :  this.idempresa
      }
    })
  }

}
