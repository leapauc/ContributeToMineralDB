import { Component } from '@angular/core';
import { LoadFileComponent } from './load-file/load-file.component';

@Component({
  selector: 'app-add-minerals',
  imports: [LoadFileComponent],
  templateUrl: './add-minerals.component.html',
  styleUrl: './add-minerals.component.scss',
})
export class AddMineralsComponent {}
