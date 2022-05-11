import { Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { listarComentario } from 'src/app/core/state/actions/comentario.action';
import { State } from 'src/app/core/state/app.state';
import { selectComentarioList } from 'src/app/core/state/selectors/comentario.selector';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() value!: any;
  public comentarios$ : Observable<any> = new Observable();
  public comentariosById :  any = [];
  public comen : any = [];
  constructor(
    public  storeState : Store<State>,
    public  store : Store<any>,
    ) {}

  ngOnInit(): void {
    this.store.dispatch(listarComentario())
    this.comentarios$ = this.storeState.select(selectComentarioList);

    this.comentarios$.subscribe((comentarios: any) => {
      this.comen = of (this.comentariosById);
      if (this.value.post == 1) { //VALIDA SI ES UN ADMIN-EMPRESA
        this.comentariosByPost("idempresa", comentarios);
      }
      if (this.value.post == 2) { //VALIDA SI ES UN ADMIN-TURISTA
        this.comentariosByPost("idpersona", comentarios);
      }
    });
  }

  public comentariosByPost(idPost: string, comentarios: any) {
    for (let i = 0; i < comentarios.length; i++) {
      if (comentarios[i][idPost].id == this.value.id) {
        this.comentariosById.push(comentarios[i]);
        let cont = 0;
        for (let j = 0; j < this.comentariosById.length; j++) {
          if (comentarios[i].id == this.comentariosById[j].id) {
            cont++;
            if (cont > 1) {
              this.comentariosById.splice(j, 1);
            }
          }
        }
      }
    }
  }
}
