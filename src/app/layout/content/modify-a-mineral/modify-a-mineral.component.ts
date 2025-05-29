import { Component } from '@angular/core';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { TableAreaComponent } from './table-area/table-area.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-modify-a-mineral',
  standalone: true,
  imports: [FilterAreaComponent, TableAreaComponent, FormComponent],
  templateUrl: './modify-a-mineral.component.html',
  styleUrl: './modify-a-mineral.component.scss',
})
export class ModifyAMineralComponent {}
