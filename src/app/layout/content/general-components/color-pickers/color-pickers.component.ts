import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './color-pickers.component.html',
  styleUrls: ['./color-pickers.component.css']
})
export class ColorPickerComponent {
  selectedColors: { color: string; r: number; g: number; b: number }[] = []; // Tableau pour stocker les couleurs
  colorInput: string = '#563d7c'; // Valeur par défaut du sélecteur de couleur

  addColor() {
    const r = parseInt(this.colorInput.slice(1, 3), 16);
    const g = parseInt(this.colorInput.slice(3, 5), 16);
    const b = parseInt(this.colorInput.slice(5, 7), 16);

    this.selectedColors.push({ color: this.colorInput, r, g, b });
  }

  removeColor(index: number) {
    this.selectedColors.splice(index, 1); // Supprime la couleur à l'index donné
  }
}
