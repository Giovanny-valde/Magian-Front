import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { empresa } from 'src/app/core/models/empresa/empresa';
import { habitacionClass } from 'src/app/core/models/habitacion/habitacion_class';
import { listarDescuentoId } from 'src/app/core/state/actions/descuento.action';
import { State } from 'src/app/core/state/app.state';
import { selectHabitacionPorId } from 'src/app/core/state/selectors/habitacion.selector';
import { BusinessDescuentoEditComponent } from '../../business-descuento/business-descuento-edit/business-descuento-edit.component';

@Component({
  selector: 'app-business-habitaciones-edit',
  templateUrl: './business-habitaciones-edit.component.html',
  styleUrls: ['./business-habitaciones-edit.component.css']
})
export class BusinessHabitacionesEditComponent implements OnInit {

  public habitacion$ : Observable<any> = new Observable();
  public formHabitacion! : FormGroup;


  constructor(
    private storeState : Store<State>,
    private store : Store,
    public  dialogRef: MatDialogRef<BusinessHabitacionesEditComponent>,
    private fb : FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    console.log(this.data.empresa)
    if (this.data.id != 0) {
    this.habitacion$ = this.storeState.select(selectHabitacionPorId);
    this.habitacion$.subscribe(data => {
      this.reemplazarFormulario(data);
      });
    }
  }

  public crearFormulario() {
    this.formHabitacion = this.fb.group({
      id: [''],
      nombre: [''],
      descripcion: [''],
      cantidadHabitacion: [''],
      precio: [''],
      cantidadPersona: [''],
    });
  }

  public reemplazarFormulario(data:any) {

      this.formHabitacion.controls['nombre'].setValue(data.nombre);
      this.formHabitacion.controls['descripcion'].setValue(data.descripcion);
      this.formHabitacion.controls['cantidadHabitacion'].setValue(data.cantidadHabitacion);
      this.formHabitacion.controls['precio'].setValue(data.precio);
      this.formHabitacion.controls['cantidadPersona'].setValue(data.cantidadPersona);
    
  }
  
  public guardarHabitacion() {
    let Habitacion = new habitacionClass(this.formHabitacion.value,this.store);
    Habitacion.idempresa  = this.data.empresa ;
    Habitacion.guardarHabitacion();
  }

  public actualizarHabitacion() {
    let Habitacion = new habitacionClass(this.formHabitacion.value,this.store);
    Habitacion.idempresa  = this.data.empresa ;
    Habitacion.id = this.data.id;
    Habitacion.updateHabitacion();
  }


  public editDescuento(id : any){
    console.log(id)
    this.store.dispatch(listarDescuentoId({id:id}))
    const dialogref = this.dialog.open(BusinessDescuentoEditComponent,{
      width: '600px',
      height: '600px',
    })
  }


  public cerrar() {
    this.dialogRef.close();
  }


}
