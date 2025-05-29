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

interface association {
  item_asso: string;
}

@Component({
  selector: 'app-association-form',
  imports: [ReactiveFormsModule, MatIconModule, CommonModule],
  templateUrl: './association-form.component.html',
  styleUrls: ['./association-form.component.css'],
})
export class AssociationFormComponent {
  associations: association[] = [];
  assoForm: FormGroup;
  editingIndex: number | null = null;
  confirmDelete: boolean = false;
  deleteIndex: number | null = null;
  modalInstance: Modal | null = null;
  item_asso: any;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.assoForm = this.fb.group({
      item_asso: ['', Validators.required],
    });
  }

  addAsso() {
    if (this.assoForm.valid) {
      const newAsso: association = this.assoForm.value; // Assurez-vous que le type est correct
      this.associations.push(newAsso); // Ajoutez à associations au lieu de item_asso
      this.assoForm.reset();
    }
  }

  editAsso(index: number) {
    const association = this.associations[index];
    this.assoForm.setValue({
      item_asso: association.item_asso, // Utilisez item_asso ici
    });
    this.editingIndex = index;
  }

  updateAsso() {
    if (this.editingIndex !== null) {
      this.associations[this.editingIndex] = this.assoForm.value;
      this.editingIndex = null;
      this.assoForm.reset();
    }
  }

  ngAfterViewInit(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  deleteAsso(index: number) {
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

  confirmDeleteAsso() {
    if (this.deleteIndex !== null) {
      this.associations.splice(this.deleteIndex, 1);
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
