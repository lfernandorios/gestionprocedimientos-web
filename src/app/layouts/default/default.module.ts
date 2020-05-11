import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {DefaultComponent} from './default.component';
import {RouterModule} from '@angular/router';
import {PersonasComponent} from '../../modules/personas/personas.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {ProcedimientosComponent} from '../../modules/procedimientos/procedimientos.component';
import {DashboardService} from '../../modules/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MessagesComponent} from '../../modules/messages/messages.component';
import {ProcedimientoService} from '../../services/procedimientos/procedimiento.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PersonasComponent,
    ProcedimientosComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    DashboardService,
    ProcedimientoService
  ]
})
export class DefaultModule { }
