import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './appModules/material.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ToggleButtonsComponent } from './pages/toggle-buttons/toggle-buttons.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DynamicColorsComponent } from './pages/dynamic-colors/dynamic-colors.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { Dialog1Component } from './pages/dialog/dialog1/dialog1.component';
import { Dialog2Component } from './pages/dialog/dialog2/dialog2.component';
import { DesignUtilityModule } from './appModules/design-utility.module';
import { Dialog3Component } from './pages/dialog/dialog3/dialog3.component';
import { CardComponent } from './pages/card/card.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { XyzComponent } from './pages/xyz/xyz.component';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    ToggleButtonsComponent,
    DynamicColorsComponent,
    MenuComponent,
    BadgesComponent,
    DialogComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    CardComponent,
    TooltipComponent,
    XyzComponent,
    SnackbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DesignUtilityModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
