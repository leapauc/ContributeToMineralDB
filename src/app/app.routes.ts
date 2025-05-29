import { Routes } from '@angular/router';
import { HomeComponent } from './layout/content/home/home.component';
import { AddAMineralComponent } from './layout/content/add-a-mineral/add-a-mineral.component';
import { ModifyAMineralComponent } from './layout/content/modify-a-mineral/modify-a-mineral.component';
import { AddMineralsComponent } from './layout/content/add-minerals/add-minerals.component';
import { ModifyAPageComponent } from './layout/content/modify-a-page/modify-a-page.component';
import { ImproveDbComponent } from './layout/content/improve-db/improve-db.component';
import { AddPageComponent } from './layout/content/add-page/add-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-a-mineral', component: AddAMineralComponent },
  { path: 'add-minerals', component: AddMineralsComponent },
  { path: 'add-a-page', component: AddPageComponent },
  { path: 'modify-a-mineral', component: ModifyAMineralComponent },
  { path: 'modify-a-page', component: ModifyAPageComponent },
  { path: 'how-improve-DB', component: ImproveDbComponent },
];
