import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  empresa } from 'src/app/core/models/empresa/empresa';
import { empresaClass } from 'src/app/core/models/empresa/empresa_class';
import { listarempresa, listarempresaid } from 'src/app/core/state/actions/empresa.action';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaList, selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';
import { AdminEmpresaEditComponent } from './admin-empresa-edit/admin-empresa-edit.component';

@Component({
  selector: 'app-admin-empresas',
  templateUrl: './admin-empresas.component.html',
  styleUrls: ['./admin-empresas.component.css']
})
export class AdminEmpresasComponent implements OnInit {

  public empresas$: Observable < any > = new Observable();
  public empresa$: Observable < any > = new Observable();
  public edit: boolean = false;

  constructor(
    private store: Store,
    private storeState: Store < State > ,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {

    this.empresa$ = this.storeState.select(selectEmpresaPorId);
    this.empresas$ = this.storeState.select(selectEmpresaList);
    this.store.dispatch(listarempresa());

    this.empresa$.subscribe(data => {
      if (data.id != 0) {
        this.listartodos(data)
      }
    });

  }

  public Aceptar(id: number) {
    this.store.dispatch(listarempresaid({id: id}));
    this.edit = true;  
  }

  public listartodos(data: any) {
    if ((this.edit === true)) {
      let Empresa: empresaClass = new empresaClass(data,this.store);
      switch (data.activo) {
        case true:
          Empresa.activo = false;
          alert('Empresa desactivada');
          break;
        case false:
          Empresa.activo = true;
          alert('Empresa activada');
          break;
      }
        Empresa.updateEmpresa();
        this.edit = false; //para que no se vuelva a ejecutar el if
    }
  }

  public openDialog(id: number) {
    this.store.dispatch(listarempresaid({id: id}));
    const dialogref = this.dialog.open(AdminEmpresaEditComponent, {
      width: '700px',
      height: '430px',
      data: {
        id: id
      }
    })
  }

}
