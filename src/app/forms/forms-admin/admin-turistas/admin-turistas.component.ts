import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { listarPersona, listarPersonaId } from 'src/app/core/state/actions/persona.action';
import { State } from 'src/app/core/state/app.state';
import { selectPersonaList } from 'src/app/core/state/selectors/persona.selector';
import { AdminTuristaEditComponent } from './admin-turista-edit/admin-turista-edit.component';

@Component({
  selector: 'app-admin-turistas',
  templateUrl: './admin-turistas.component.html',
  styleUrls: ['./admin-turistas.component.css']
})
export class AdminTuristasComponent implements OnInit {

  public personas$: Observable < any > = new Observable();
  public persona$: Observable < any > = new Observable();

  constructor(
    private store: Store,
    private storeState: Store < State > ,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.personas$ = this.storeState.select(selectPersonaList);
    this.store.dispatch(listarPersona());
  }

  public Editar(id: number) {
    this.store.dispatch(listarPersonaId({id: id}));
    this.dialog.open(AdminTuristaEditComponent, {
      width: '700px',
      height: '600px',
      data: {
        id: id
      }
    })
  }
}
