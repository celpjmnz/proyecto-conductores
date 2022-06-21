import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteTripComponent } from '../../list-trips/delete-trip/delete-trip.component';
import { AddVehicleService } from '../../services/add-vehicle.service';

@Component({
  selector: 'app-delete-vehicles',
  templateUrl: './delete-vehicles.component.html',
  styleUrls: ['./delete-vehicles.component.css'],
})
export class DeleteVehiclesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteTripComponent>,
    private service: AddVehicleService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.service.delete(this.data.idTipoVehiculo);
  }
}
