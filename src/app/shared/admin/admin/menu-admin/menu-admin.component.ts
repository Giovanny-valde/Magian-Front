import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/state/app.state';
import { selectEmpresaPorId } from 'src/app/core/state/selectors/empresa.selector';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
