import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { listarReserva_cliente } from 'src/app/core/state/actions/reserva_cliente.action';
import { State } from 'src/app/core/state/app.state';
import { selectReserva_clienteList } from 'src/app/core/state/selectors/reserva_cliente.selector';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() value! : any ; 
  public reservas$ : Observable<any> = new Observable();
  public reservasById :  any = [];
  public reser : any = [];

  constructor(
    public  storeState : Store<State>,
    public  store : Store<any>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(listarReserva_cliente())

    this.reservas$ = this.storeState.select(selectReserva_clienteList);
    
    this.reservas$.subscribe((reserva: any) => {
      this.reser = of(this.reservasById); 
      // alert(this.value.post);
      if (this.value.post == 1){
        this.reservasByPost("idreserva",reserva);
      }
      if (this.value.post == 2){
        this.reservasByPost("idpersona",reserva);
      }
    });
  }

  public reservasByPost(idPost:string,reservas:any) {
    for (let i = 0; i < reservas.length; i++) {
      if (reservas[i][idPost].id == this.value.id) {
        this.reservasById.push(reservas[i]);
        let cont = 0;
        for (let j = 0; j < this.reservasById.length; j++) {
          if (reservas[i].id == this.reservasById[j].id) {
            cont++;
            if (cont > 1) {
              this.reservasById.splice(j, 1);
            }
          }
        }
      }
    }
  }


}
