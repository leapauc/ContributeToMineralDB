import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorPickerComponent } from '../../../general-components/color-pickers/color-pickers.component';
import { LocationFormComponent } from '../../../general-components/location-form/location-form.component';
import { AssociationFormComponent } from '../../../general-components/association-form/association-form.component';

@Component({
  selector: 'app-onglets',
  standalone: true,
  imports: [
    CommonModule,
    ColorPickerComponent,
    LocationFormComponent,
    AssociationFormComponent,
  ],
  templateUrl: './onglets.component.html',
  styleUrl: './onglets.component.scss',
})
export class OngletsComponent {
  activeTab: string = 'classif'; // Onglet actif par défaut

  setActiveTab(tab: string) {
    this.activeTab = tab; // Met à jour l'onglet actif
  }

  cancel_edit() {
    // Cacher le formulaire d'édition
    const editForm = document.getElementById('forms');
    if (editForm) {
      editForm.style.display = 'none'; // Cacher le formulaire
    }
    const luster = document.getElementById('luster_filt') as HTMLInputElement;
    if (luster) {
      luster.value = ''; // Réinitialise la valeur du champ à une chaîne vide
      luster.ariaValueNow = ''; // Optionnel, si vous souhaitez également réinitialiser ariaValueNow
    }
    const formula = document.getElementById('formula_filt') as HTMLInputElement;
    if (formula) {
      formula.value = ''; // Réinitialise la valeur du champ à une chaîne vide
      formula.ariaValueNow = ''; // Optionnel, si vous souhaitez également réinitialiser ariaValueNow
    }
    const name = document.getElementById('name_filt') as HTMLInputElement;
    if (name) {
      name.value = ''; // Réinitialise la valeur du champ à une chaîne vide
      name.ariaValueNow = ''; // Optionnel, si vous souhaitez également réinitialiser ariaValueNow
    }
  }
}
