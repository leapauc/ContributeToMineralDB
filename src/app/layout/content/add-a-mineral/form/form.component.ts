import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorPickerComponent } from '../../general-components/color-pickers/color-pickers.component';
import { LocationFormComponent } from '../../general-components/location-form/location-form.component';
import { AssociationFormComponent } from '../../general-components/association-form/association-form.component';

@Component({
  selector: 'app-form-onglets',
  standalone: true,
  imports: [
    CommonModule,
    ColorPickerComponent,
    LocationFormComponent,
    AssociationFormComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormOngletsComponent {
  activeTab: string = 'classif'; // Onglet actif par défaut

  setActiveTab(tab: string) {
    this.activeTab = tab; // Met à jour l'onglet actif
  }
}
