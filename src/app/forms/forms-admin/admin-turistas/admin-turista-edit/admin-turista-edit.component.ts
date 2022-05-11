import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ComentarioComponent } from 'src/app/components/comps.admin/comentario/comentario.component';
import { ReservaComponent } from 'src/app/components/comps.admin/reserva/reservas.component';
import { persona } from 'src/app/core/models/persona/persona';
import { deletePersona, updatePersona } from 'src/app/core/state/actions/persona.action';
import { State } from 'src/app/core/state/app.state';
import { selectPersonaPorId } from 'src/app/core/state/selectors/persona.selector';

@Component({
  selector: 'app-admin-turista-edit',
  templateUrl: './admin-turista-edit.component.html',
  styleUrls: ['./admin-turista-edit.component.css']
})
export class AdminTuristaEditComponent implements OnInit {
  
  public dat : any ={
    id: this.data.id,
    post: 2,
  };
  public ver : boolean = false;
  public persona$ : Observable<any> = new Observable();
  public formPersona! : FormGroup;

  constructor(
    private storeState : Store<State>,
    private store : Store<any>,
    public dialogRef: MatDialogRef<AdminTuristaEditComponent>,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.persona$ = this.storeState.select(selectPersonaPorId);
    this.persona$.subscribe(data => {
        this.reemplazarFormulario(data);
    });
  }

  public actualizar() {
  let Persona = new persona();
  Persona.id = this.formPersona.value.id;
  Persona.dni = this.formPersona.value.dni;
  Persona.nombre = this.formPersona.value.nombre;
  Persona.apellido = this.formPersona.value.apellido;
  Persona.correo = this.formPersona.value.correo;
  Persona.pais = this.formPersona.value.pais;
  Persona.telefono = this.formPersona.value.telefono;

  this.store.dispatch(updatePersona({persona: Persona}));
  }

  public eliminar() {

    let id = this.formPersona.value.id;
    this.store.dispatch(deletePersona({id:id}));

  }

  public salir(){
    this.dialogRef.close();
  }

  public crearFormulario() {
    this.formPersona = this.fb.group({
      id: [''],
      dni: [''],
      nombre: [''],
      apellido: [''],
      correo: [''],
      pais: [''],
      telefono: [''],
    });
  }

  public reemplazarFormulario(data: any) {
    this.formPersona.controls['id'].setValue(data.id);
    this.formPersona.controls['dni'].setValue(data.dni);
    this.formPersona.controls['nombre'].setValue(data.nombre);
    this.formPersona.controls['apellido'].setValue(data.apellido);
    this.formPersona.controls['correo'].setValue(data.correo);
    this.formPersona.controls['pais'].setValue(data.pais);
    this.formPersona.controls['telefono'].setValue(data.telefono);
  }

  
}
