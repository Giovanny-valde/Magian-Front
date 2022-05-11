import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { empresaClass } from 'src/app/core/models/empresa/empresa_class';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';
import { deleteempresa } from 'src/app/core/state/actions/empresa.action';


@Component({
  selector: 'app-business-perfil',
  templateUrl: './business-perfil.component.html',
  styleUrls: ['./business-perfil.component.css']
})
export class BusinessPerfilComponent implements OnInit {

  public formEmpresa!: FormGroup;
  public empresa$: Observable < any > = new Observable();
  public activo : boolean = false;

  public img: any = '../../../../assets/img/logo.png';

  constructor(
    private fb: FormBuilder,
    private storeState: Store < State > ,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.empresa$ = this.storeState.select(selectEmpresaPorId);
    this.empresa$.subscribe(data => {
      this.reemplazarFormulario(data);
    });
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
    this.activo = data.activo;
    this.formEmpresa.controls['id'].setValue(data.id);
    this.formEmpresa.controls['ciudad'].setValue(data.ciudad);
    this.formEmpresa.controls['descripcion'].setValue(data.descripcion);
    this.img = data.imagen;
    this.formEmpresa.controls['pais'].setValue(data.pais);
    this.formEmpresa.controls['tipo'].setValue(data.tipo);
  }

  public fileEvent(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.img = e.target.result; //imagen en base 64
    };
  }

  public actualizar() {
    let Empresa: empresaClass = new empresaClass(this.formEmpresa.value,this.store);
    Empresa.imagen = this.img;
    Empresa.activo = this.activo;
    Empresa.updateEmpresa();
  }

  public eliminarEmpresa() {
    let id  = this.formEmpresa.value.id;
    this.store.dispatch(deleteempresa({id: id}));
  }

}
