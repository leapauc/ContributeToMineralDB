import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Modal } from 'bootstrap'; // Import Bootstrap's Modal class

interface Location {
  country: string;
  description: string;
}

@Component({
  selector: 'app-location-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, CommonModule],
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css'],
})
export class LocationFormComponent {
  countries = ['France', 'Allemagne', 'Espagne', 'Italie', 'Belgique'];
  locations: Location[] = [];
  locationForm: FormGroup;
  editingIndex: number | null = null;
  confirmDelete: boolean = false;
  deleteIndex: number | null = null;
  modalInstance: Modal | null = null;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.locationForm = this.fb.group({
      country: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  addLocation() {
    if (this.locationForm.valid) {
      const newLocation: Location = this.locationForm.value;
      this.locations.push(newLocation);
      this.locationForm.reset();
    }
  }

  editLocation(index: number) {
    const location = this.locations[index];
    this.locationForm.setValue({
      country: location.country,
      description: location.description,
    });
    this.editingIndex = index;
  }

  updateLocation() {
    if (this.editingIndex !== null) {
      this.locations[this.editingIndex] = this.locationForm.value;
      this.editingIndex = null;
      this.locationForm.reset();
    }
  }

  deleteLocation(index: number) {
    this.deleteIndex = index;
    this.confirmDelete = true;

    setTimeout(() => {
      const modalElement = document.getElementById('smallModal');
      if (modalElement) {
        this.modalInstance = new Modal(modalElement);
        this.modalInstance.show();
      }
    }, 0); // Déclenche l'affichage après un tout petit délai
  }

  confirmDeleteLocation() {
    if (this.deleteIndex !== null) {
      this.locations.splice(this.deleteIndex, 1);
      this.confirmDelete = false;
      this.deleteIndex = null;
      this.cdr.detectChanges(); // Force change detection to update the view

      // Close the modal after confirming the deletion
      if (this.modalInstance) {
        this.modalInstance.hide();
      }
    }
  }

  cancelDelete() {
    this.confirmDelete = false;
    this.deleteIndex = null;

    // Close the modal if the user cancels
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }
}
