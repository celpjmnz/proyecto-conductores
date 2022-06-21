import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVehiclesComponent } from './delete-vehicles.component';

describe('DeleteVehiclesComponent', () => {
  let component: DeleteVehiclesComponent;
  let fixture: ComponentFixture<DeleteVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
