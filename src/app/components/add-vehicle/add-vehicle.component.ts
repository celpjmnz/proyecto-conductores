import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddVehicleService } from '../services/add-vehicle.service';
import { UsersService } from '../services/users.service';
import { trips } from '../shared/models/trips';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @Output() confirmRequest = new EventEmitter<any>();

  driversList: any = [];
  vehiclesList: any = [];
  tipoVehiculo!: string;
  VehiculosForm!: FormGroup;

  isEditable = false;

  constructor(
    //  @Inject(MAT_DIALOG_DATA) public viajes: trips,
    private serviceConductores: UsersService,
    private service: AddVehicleService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.VehiculosForm = new FormGroup({
      tipoVehiculo: new FormControl(this.tipoVehiculo, [Validators.required]),
    });
  }

  public confirm(): void {
    if (this.VehiculosForm.valid) {
      // console.log(this.ViajesForm.value);
      this.service.add(this.VehiculosForm.value).subscribe((res) => {
        console.log('Viaje añadido!');
      });
      //  this.router.navigate(['./listTrips']);
    }
    this.router.navigate(['./listVehicles']);
  }
}
