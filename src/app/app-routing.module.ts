import { NgModule } from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './pages/badges/badges.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardComponent } from './pages/card/card.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { DynamicColorsComponent } from './pages/dynamic-colors/dynamic-colors.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
import { ToggleButtonsComponent } from './pages/toggle-buttons/toggle-buttons.component';
import { XyzComponent } from './pages/xyz/xyz.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
   
  },
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule), 
  },

  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'toggle-buttons',
    component: ToggleButtonsComponent,
  },
  {
    path: 'dynamic-colors',
    component: DynamicColorsComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'badges',
    component: BadgesComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'xyz',
    component: XyzComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
