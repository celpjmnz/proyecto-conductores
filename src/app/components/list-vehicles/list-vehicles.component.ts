import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { AddVehicleService } from '../services/add-vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteVehiclesComponent } from './delete-vehicles/delete-vehicles.component';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css'],
})
export class ListVehiclesComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['idTipoVehiculo', 'tipoVehiculo', 'actions'];
  idUsuario: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  public idFilter = new FormControl();
  public tipoFilter = new FormControl();
  private filterValues = {
    idTipoVehiculo: '',
    tipoVehiculo: '',
  };
  constructor(private service: AddVehicleService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service.getVehiculos().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.createFilter();
    });
    this.onChanges();
  }

  onChanges(): void {
    this.idFilter.valueChanges.subscribe((value) => {
      this.filterValues['idTipoVehiculo'] = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.tipoFilter.valueChanges.subscribe((value) => {
      this.filterValues['tipoVehiculo'] = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);
      return (
        data.idTipoVehiculo.toString().indexOf(searchTerms.idTipoVehiculo) !=
          -1 &&
        data.tipoVehiculo
          .toLowerCase()
          .indexOf(searchTerms.tipoVehiculo.toLowerCase()) != -1
      );
    };
    return filterFunction;
  }

  delete(idTipoVehiculo: number): void {
    const dialogRef = this.dialog.open(DeleteVehiclesComponent, {
      data: { idTipoVehiculo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.ngOnInit();
      }
    });
  }
}
