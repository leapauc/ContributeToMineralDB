import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Minerals } from '../../../../../modeles/minerals';

@Component({
  selector: 'app-complex-filter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './complex-filter.component.html',
  styleUrl: './complex-filter.component.scss',
})
export class ComplexFilterComponent {
  isOpen = false;
  displayedColumns: string[] = [
    'edit',
    'delete',
    'namemineral',
    'formula',
    'weightformula',
    'country',
    'groupmineralid',
    'luster',
  ];
  dataSource = new MatTableDataSource<Minerals>();
  minerals: Minerals[] = [];
  searchCriteria = {
    name: '',
    formula: '',
    luster: '',
  };

  filteredMinerals: any[] = [];

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

  filterMinerals() {}

  clearFilter() {
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
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
