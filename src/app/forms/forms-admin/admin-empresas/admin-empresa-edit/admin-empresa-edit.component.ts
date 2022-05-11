import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';
import { deleteempresa } from 'src/app/core/state/actions/empresa.action';
import { empresaClass } from 'src/app/core/models/empresa/empresa_class';

@Component({
  selector: 'app-admin-empresa-edit',
  templateUrl: './admin-empresa-edit.component.html',
  styleUrls: ['./admin-empresa-edit.component.css']
})
export class AdminEmpresaEditComponent implements OnInit {

  public dat : any ={
    id: this.data.id,
    post: 1,
  };
  public empresa$ : Observable<any> = new Observable();
  public formEmpresa! : FormGroup;
  
  constructor(
    private storeState : Store<State>,
    private store : Store<any>,
    public dialogRef: MatDialogRef<AdminEmpresaEditComponent>,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.crearFormulario();

    this.empresa$ = this.storeState.select(selectEmpresaPorId);
    this.empresa$.subscribe(data => {
        this.reemplazarFormulario(data);
     });
  }
  
  public actualizar(){
    let Empresa = new empresaClass(this.formEmpresa.value,this.store);
    Empresa.updateEmpresa()
  }

  public eliminar(){
  let id = this.formEmpresa.controls['id'].value;
  this.store.dispatch(deleteempresa({id: id}));
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public crearFormulario() {
    this.formEmpresa = this.fb.group({
      id: [''],
      ciudad: [''],
      descripcion: [''],
      imagen: [''],
      pais: [''],
      tipo: [''],
      activo: [''],
    });
  }

  public reemplazarFormulario(data: any) {
    this.formEmpresa.controls['id'].setValue(data.id);
    this.formEmpresa.controls['ciudad'].setValue(data.ciudad);
    this.formEmpresa.controls['descripcion'].setValue(data.descripcion);
    this.formEmpresa.controls['imagen'].setValue(data.imagen);
    this.formEmpresa.controls['pais'].setValue(data.pais);
    this.formEmpresa.controls['tipo'].setValue(data.tipo);
    this.formEmpresa.controls['activo'].setValue(data.activo);
  }

}
