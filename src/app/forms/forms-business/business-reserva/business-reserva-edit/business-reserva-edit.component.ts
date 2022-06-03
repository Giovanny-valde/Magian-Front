import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ReservaService } from 'src/app/core/services/reserva/reserva.service';
import { ReservaClienteService } from 'src/app/core/services/reserva_cliente/resercliente.service';
import { ReservaHabitacionService } from 'src/app/core/services/reserva_habitacion/reserhabitacion.service';
import { State } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-business-reserva-edit',
  templateUrl: './business-reserva-edit.component.html',
  styleUrls: ['./business-reserva-edit.component.css']
})
export class BusinessReservaEditComponent implements OnInit {

  formReserva! : FormGroup;
  reserCliente = [] as any;
  reserHabi = [] as any;

  constructor(
    private storeState : Store<State>,
    public  dialogRef: MatDialogRef<BusinessReservaEditComponent>,
    private fb : FormBuilder,
    private dialog: MatDialog,
    private service: ReservaService,
    private serviceClie : ReservaClienteService,
    private serviceHabi : ReservaHabitacionService,
    public datepipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any,  
  ) { }

  ngOnInit(): void {
     console.log(this.data)
    this.buildForm();
    this.service.listarPorId(this.data.id).subscribe(data => {
      this.changeForm(data);
    })

    this.serviceClie.listarTodos().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].idreserva.id == this.data.id){
          this.reserCliente.push(data[i]);
          // console.log(this.reserCliente);
        }
      }
    })

    this.serviceHabi.listarTodos().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].idreserva.id == this.data.id){
          this.reserHabi.push(data[i]);
          console.log(this.reserHabi);
        }
      }
    })

    // alert(this.data.id)
  }

  buildForm() {
    this.formReserva = this.fb.group({
      checkin : [''],
      checkout : [''],
      cantidad : [''],
    });
  }

  changeForm(data : any){
    let inicio = this.datepipe.transform(data.checkin, 'yyyy-MM-dd')
    let fin = this.datepipe.transform(data.checkout, 'yyyy-MM-dd')
    this.formReserva.controls['checkin'].setValue(inicio);
    this.formReserva.controls['checkout'].setValue(fin);
    this.formReserva.controls['cantidad'].setValue(data.cantidad);
  }

}
