import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/state/app.state';
import { selectHabitacionList } from 'src/app/core/state/selectors/habitacion.selector';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { listarHabitacion } from 'src/app/core/state/actions/habitacion.action';
import { habitacion } from 'src/app/core/models/habitacion/habitacion';
import { of } from 'rxjs';


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionComponent implements OnInit {

  @Input() value!: any;
  public habitaciones$ : Observable<any> = new Observable();
  public habitacionesById :  any = [];
  public habi : any = [];
  constructor(
    public  storeState : Store<State>,
    public  store : Store<any>,
    ) {}

  ngOnInit(): void {
    // this.value.id
    this.store.dispatch(listarHabitacion())
    this.habitaciones$ = this.storeState.select(selectHabitacionList);
    
    this.habitaciones$.subscribe((habitaciones: any) => {
      this.habi = of(this.habitacionesById);
      for (let i = 0; i < habitaciones.length; i++) {
        if(habitaciones[i].idempresa.id == this.value.id){
          this.habitacionesById.push(habitaciones[i]);
          let cont =0;
          for(let j = 0; j < this.habitacionesById.length; j++){
            if(habitaciones[i].id == this.habitacionesById[j].id){
              cont++;
              if(cont > 1){
              this.habitacionesById.splice(j,1);
              }
            }
          }
        }
      }
    })
  
  }
  
  // public ver(){
  //   console.log(this.habitacionesById);
  // }
}

