import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Minerals } from '../../../../modeles/minerals';
import { MineralDataService } from '../../../../services/mineral-data.service';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table-area',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './table-area.component.html',
  styleUrl: './table-area.component.scss',
})
export class TableAreaComponent implements OnInit {
  displayedColumns: string[] = [
    'edit',
    // 'delete',
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

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;

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

  constructor(private mineralsService: MineralDataService) {}

  ngOnInit(): void {
    this.mineralsService.fetchAllMinerals().subscribe((data) => {
      this.minerals = data;
      this.dataSource = new MatTableDataSource<Minerals>(data);
      console.table(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      // Définir le prédicat de filtre pour ne filtrer que par nom de minéral
      this.dataSource.filterPredicate = (data: Minerals, filter: string) => {
        return data.namemineral.toLowerCase().includes(filter);
      };
    });
  }

  searchMinerals(input: string) {
    this.dataSource.filter = input.trim().toLowerCase(); // Appliquez le filtre uniquement sur le nom du minéral
  }

  clearSearch() {
    this.dataSource.filter = ''; // Réinitialisez le filtre
  }

  EditMinerals(mineral: Minerals) {
    this.mineralsService.UpdateMineral(mineral).subscribe({
      next: (data) => {
        console.log('Mineral updated successfully !');
        this.reloadData();
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
        this.reloadData();
        window.location.reload();
      },
    });
  }

  filterMinerals() {
    const { name, luster } = this.searchCriteria;
    console.log('Searching with criteria:', { name, luster }); // Vérifiez les valeurs

    this.mineralsService.getFilteredMinerals(name, luster).subscribe(
      (minerals: Minerals[]) => {
        this.filteredMinerals = minerals; // Stockez les minéraux filtrés
        this.dataSource.data = minerals; // Mettez à jour le dataSource avec les minéraux filtrés
        this.dataSource.paginator = this.paginator; // Réaffectez le paginator
        this.dataSource.sort = this.sort; // Réaffectez le tri
      },
      (error) => {
        console.error('Error fetching filtered minerals:', error); // Gérer les erreurs
      }
    );
  }

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

  AddMinerals(mineral: Minerals) {
    this.mineralsService.CreateMineral(mineral).subscribe({
      next: (data) => {
        console.log('New minerals created successfully !');
        this.reloadData();
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
        this.reloadData();
        window.location.reload();
      },
    });
  }

  populateMineralFormFields(mineral: Minerals) {
    const editForm = document.getElementById('forms');
    if (editForm) {
      editForm.style.display = 'block'; // Rendre le formulaire visible
    }
    this.mineral = { ...mineral }; // Utilisez la décomposition pour simplifier
  }

  deleteMineralFromDB(id: Number) {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the mineral ${id} ?`
    );
    if (isConfirmed) {
      this.mineralsService.DeleteMineral(id).subscribe(() => {
        this.minerals = this.minerals.filter((item) => item.mineralid !== id);
        this.reloadData();
        window.location.reload();
      });
    }
  }

  private reloadData() {
    this.dataSource.data = this.minerals; // Rechargez les données dans le dataSource
    this.dataSource.paginator = this.paginator; // Réaffectez le paginator
    this.dataSource.sort = this.sort; // Réaffectez le tri
  }
}
