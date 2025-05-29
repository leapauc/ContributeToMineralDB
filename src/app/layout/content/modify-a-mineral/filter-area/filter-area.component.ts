import { Component } from '@angular/core';
import { ComplexFilterComponent } from './complex-filter/complex-filter.component';
import { NameFilterComponent } from './name-filter/name-filter.component';

@Component({
  selector: 'app-filter-area',
  standalone: true,
  imports: [ComplexFilterComponent, NameFilterComponent],
  templateUrl: './filter-area.component.html',
  styleUrl: './filter-area.component.scss',
})
export class FilterAreaComponent {}
