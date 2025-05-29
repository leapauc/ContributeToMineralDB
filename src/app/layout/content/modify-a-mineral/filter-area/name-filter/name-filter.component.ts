import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Minerals } from '../../../../../modeles/minerals';
import { MineralDataService } from '../../../../../services/mineral-data.service';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

@Component({
  selector: 'app-name-filter',
  standalone: true,
  imports: [FormsModule], // Ajoutez FormsModule ici
  templateUrl: './name-filter.component.html',
  styleUrls: ['./name-filter.component.scss'], // Corrigez le nom de la propriété
})
export class NameFilterComponent implements OnInit {
  dataSource = new MatTableDataSource<Minerals>();
  minerals: Minerals[] = [];

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

  constructor(private mineralsService: MineralDataService) {}

  ngOnInit(): void {
    this.mineralsService.fetchAllMinerals().subscribe((data) => {
      this.minerals = data;
      this.dataSource = new MatTableDataSource<Minerals>(data);

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
}
