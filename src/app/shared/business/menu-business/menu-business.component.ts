import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { idempresa, listarempresa,listarempresaid } from 'src/app/core/state/actions/empresa.action';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaList,  selectEmpresaPorId, selectIdEmpresa } from 'src/app/core/state/selectors/empresa.selector';

@Component({
  selector: 'app-menu-business',
  templateUrl: './menu-business.component.html',
  styleUrls: ['./menu-business.component.css']
})
export class MenuBusinessComponent implements OnInit {

  public empresas$: Observable <any> = new Observable();
  public empresa$: Observable <any> = new Observable();


  constructor(
    private route:ActivatedRoute,
    private store: Store,
    private storeState: Store < State > ,
    ) 
  { }

  ngOnInit(): void {

    this.store.dispatch(listarempresa());
    this.empresas$ = this.storeState.select(selectEmpresaList);
    this.empresa$ = this.storeState.select(selectEmpresaPorId);
    let id = this.storeState.select(selectIdEmpresa);

    id.subscribe(data => {
      console.log(data);
    });

    this.route.params.subscribe(params => {
      this.getEmpresa( params['nombre']);
    });
  }

  public getEmpresa(nombre: string) {
    this.empresas$.subscribe(data => {
      for (let i = 0; i < data.length ; i++) {
        if (data[i].descripcion == nombre) {
          this.store.dispatch(listarempresaid({id: data[i].id}));
          this.store.dispatch(idempresa({id: data[i].id}));
        }
      }
    });
  }

}
