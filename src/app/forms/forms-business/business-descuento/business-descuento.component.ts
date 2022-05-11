import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {  Observable} from 'rxjs';
import { descuento } from 'src/app/core/models/descuento/descuento';
import { deleteDescuento } from 'src/app/core/state/actions/descuento.action';
import { State } from 'src/app/core/state/app.state';
import { selectDescuentoList } from 'src/app/core/state/selectors/descuento.selector';
import { selectHabitacionPorId } from 'src/app/core/state/selectors/habitacion.selector';

@Component({
  selector: 'app-business-descuento',
  templateUrl: './business-descuento.component.html',
  styleUrls: ['./business-descuento.component.css']
})
export class BusinessDescuentoComponent implements OnInit {

  descuentos$ : Observable<any> = new Observable();
  habitacionid$ : Observable<any> = new Observable();
  habitacionid : number = 0;
  descuento : any ;
  descuentos : any[] = []
  ver : boolean = false;
  constructor(
    private storeState : Store<State>,
    private store: Store,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.descuentos$ = this.storeState.select(selectDescuentoList)
    this.habitacionid$ = this.storeState.select(selectHabitacionPorId);

    this.habitacionid$.subscribe(habitacion => {

      this.habitacionid = habitacion.id;
    })

    this.descuentos$.subscribe(descuentos => {
      console.log(descuentos)
      this.descuentoByhabitacion(descuentos);
        })
  }

  public descuentoByhabitacion(descuentos : any){
    this.descuentos.length = 0;
     console.log(descuentos)
     for(let i = 0; i < descuentos.length; i++){
       if(descuentos[i].idhabitacion.id == this.habitacionid){
         this.descuentos.push(descuentos[i])
       }
     }
  }
 

  atras(){
    this.ver = false;
  }

  public deleteDescuento(id : number){
    this.store.dispatch(deleteDescuento({id: id}))
  }

  public editDescuento(descuento : any){
    this.descuento = descuento;
    this.ver = true;
  }

  public crearDescuento(){
    this.descuento = null
    this.ver = true;
  }

  

}
