import { Component } from '@angular/core';
import { Minerals } from '../../../../modeles/minerals';
import { OngletsComponent } from './onglets/onglets.component';

@Component({
  selector: 'app-form-onglets',
  imports: [OngletsComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  mineral: Minerals = {
    mineralid: -1,
    namemineral: '',
    groupmineralid: 0,
    formula: '',
    weightformula: 0,
    incertitud: 0,
    percent: '',
    luster: '',
    country: '',
    gisements: '',
  };

  populateMineralFormFields(mineral: Minerals) {
    const editForm = document.getElementById('forms');
    if (editForm) {
      editForm.style.display = 'block'; // Rendre le formulaire visible
    }
    this.mineral = { ...mineral }; // Utilisez la décomposition pour simplifier
  }
}
