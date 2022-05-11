import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { descuento } from 'src/app/core/models/descuento/descuento';
import { descuentoClass } from 'src/app/core/models/descuento/descuento_class';
import { habitacion } from 'src/app/core/models/habitacion/habitacion';
import { State } from 'src/app/core/state/app.state';
import { selectDescuentoPorId } from 'src/app/core/state/selectors/descuento.selector';
import { selectHabitacionPorId } from 'src/app/core/state/selectors/habitacion.selector';

@Component({
  selector: 'app-business-descuento-edit',
  templateUrl: './business-descuento-edit.component.html',
  styleUrls: ['./business-descuento-edit.component.css']
})
export class BusinessDescuentoEditComponent implements OnInit {

  @Input()  value! : any;

  habitacion$ : Observable<any>= new Observable()
  habitacion : number = 1;
  descuento$ : Observable<any> = new Observable()
  formDescuento! : FormGroup;



  constructor(
    private storeState : Store<State>,
    public  dialogRef: MatDialogRef<BusinessDescuentoEditComponent>,
    private fb : FormBuilder,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    console.log(this.value)
    this.crearFormulario();
    this.habitacion$ = this.storeState.select(selectHabitacionPorId);
    this.habitacion$.subscribe(habitacion => {
      this.habitacion = habitacion.id
    })
    if(this.value != null ){
      this.reemplzarFormulario(this.value);
    }

  }

  public crearFormulario(){
    this.formDescuento = this.fb.group({
      precio: [''],
      inicio: [''],
      fin: [''],
    });
  }  

  public reemplzarFormulario(descuento : any){
    let inicio = this.datepipe.transform(descuento.inicio, 'yyyy-MM-dd')
    let fin = this.datepipe.transform(descuento.fin, 'yyyy-MM-dd')
    // let finicio = new Date(inicio as Date)
    this.formDescuento.controls['precio'].setValue(descuento.precio);
    this.formDescuento.controls['inicio'].setValue(inicio);
    this.formDescuento.controls['fin'].setValue(fin);
  }

  public guardarDescuento(){

    let desceunto = new descuentoClass(this.formDescuento.value, this.storeState);
    desceunto.idhabitacion = this.habitacion;
    desceunto.agregarHabitacion();
  }

  public actualizarDescuento(){

    let desceunto = new descuentoClass(this.formDescuento.value, this.storeState);
    desceunto.idhabitacion = this.habitacion;
    desceunto.id = this.value.id;
    desceunto.updateDescuento();
    
  }


}
