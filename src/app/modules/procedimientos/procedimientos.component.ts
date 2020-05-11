import {Component, OnInit, ViewChild} from '@angular/core';
import {ProcedimientoService} from '../../services/procedimientos/procedimiento.service';
import {Procedimiento} from '../../services/procedimientos/procedimiento';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const PROCEDIMIENTO_DATA: Procedimiento[] = [
  {
    id: 37,
    nombre: 'Cesárea',
    certificacion: 'Invima 666',
    vigencia: '2021-11-29T04:26:34.202',
    estado: 'proceso de aprobación'
  },
  {
    id: 36,
    nombre: 'Apendicectomía',
    certificacion: 'Invima 888',
    vigencia: '2021-04-05T04:26:34.202',
    estado: 'autorizada'
  },
  {
    id: 35,
    nombre: 'Vasectomía',
    certificacion: 'Invima 999',
    vigencia: '2021-05-05T04:26:34.202',
    estado: 'autorizada'
  }
];

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.scss']
})
export class ProcedimientosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'certificacion', 'vigencia', 'estado'];

  private procedimientos: Procedimiento[];

  dataSource = new MatTableDataSource<Procedimiento>(PROCEDIMIENTO_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private procedimientoService: ProcedimientoService ) { }

  ngOnInit(): void {

    this.paginator.pageSize = 10;
    this.paginator.pageIndex = 0;

    /*this.procedimientoService.buscarTodos(this.paginator.pageIndex, this.paginator.pageSize).
      subscribe(procedimientos => this.procedimientos = procedimientos);
    this.dataSource = new MatTableDataSource<Procedimiento>(this.procedimientos);*/
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
