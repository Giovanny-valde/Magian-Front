import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReservaService } from 'src/app/core/services/reserva/reserva.service';
import { ReservaHabitacionService } from 'src/app/core/services/reserva_habitacion/reserhabitacion.service';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';
import { BusinessReservaEditComponent } from './business-reserva-edit/business-reserva-edit.component';

@Component({
  selector: 'app-business-reserva',
  templateUrl: './business-reserva.component.html',
  styleUrls: ['./business-reserva.component.css']
})
export class BusinessReservaComponent implements OnInit {


  idEmpresa :string = "";
  reservasResponse = [] as any;
  reservasHabi  = []  as any;
  reservas = [] as any;
  reser = [] as any;

  public empresa$: Observable < any > = new Observable();
  constructor(
    private service : ReservaHabitacionService,
    private serviceReserva : ReservaService,
    private storeState: Store < State > ,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.empresa$ = this.storeState.select(selectEmpresaPorId);
    this.empresa$.subscribe(data => {
      this.idEmpresa = data.id;
      this.reservaHabiByEmpresa();
    });

    // this.serviceReserva.listarTodos().subscribe(data => {
    //   this.reservas = data;
    // });
    this.service.listarTodos().subscribe(data => {
      this.reservasResponse = data;
      this.reservaHabiByEmpresa();
    });

   this.serviceReserva.listarTodos().subscribe(data => { 
    this.reser = data;
   });

  }

  reservaHabiByEmpresa(){
    this.reservasHabi = this.reservasResponse.filter((reserva: any) => reserva.idhabitacion.idempresa.id == this.idEmpresa);

    let ids = [] as any;
    this.reservasHabi.forEach((element : any) => {
      ids.push(element.idreserva.id);
    });
    ids = new Set(ids);
    ids = [...ids];
    // console.log(ids);
    this.reservaByEmpresa(ids);

    // this.diferenciaFecha();
  }

  reservaByEmpresa(id : any[]){
    for (let i = 0; i < this.reser.length; i++) {
      for (let j = 0; j < id.length; j++) {
        if(this.reser[i].id == id[j]){
          this.reservas.push(this.reser[i]);
        }
      }
    }
    // console.log(this.reservas);
    this.diferenciaFecha();
  }


  diferenciaFecha(){
    console.log(this.reservasHabi);
    for (let i = 0; i < this.reservas.length; i++) {
    var fechaInicio = this.reserFecha(this.reservasHabi[i].idreserva.checkin);
    var fechaFin = this.reserFecha(this.reservasHabi[i].idreserva.checkout);
    
    

      var diff = fechaFin - fechaInicio;

      let diferencia = diff/(1000*60*60*24) + 1;

      this.reservas[i] = {
        "diferencia"  : diferencia,
        "precio" :  this.reservasHabi[i].idhabitacion.precio,
        "cantidad" : this.reservasHabi[i].idreserva.cantidad,
        ...this.reservasHabi[i]
      }
    }
  }

  reserFecha(data : any){
    var fecha : any = new Date(data).toLocaleDateString();
    fecha = fecha.split("/");
    fecha = fecha[2] + "-" + fecha[1] + "-" + fecha[0];
    fecha = new Date(fecha).getTime();
    return fecha;
  }

  diferenciaFechas(data : any){
    var fechaInicio = this.reserFecha(data.data.idreserva.checkin);
    var fechaFin = this.reserFecha(data.data.idreserva.checkout);

    var diff = fechaFin - fechaInicio;

    let diferencia = diff/(1000*60*60*24) + 1;


      data = {
        "diferencia"  : diferencia,
        ...data
      }
  }



  public openReserva(data: any){
    // console.log(data);
    // this.diferenciaFechas(data);
   const dialogref = this.dialog.open(BusinessReservaEditComponent,{
     width: '700px',
     height: "600px",
     data: {
       id: data.idreserva.id,
      //  diferencia : 
       data : data
      //  empresa :  this.idempresa
     }
   })
 }




}
