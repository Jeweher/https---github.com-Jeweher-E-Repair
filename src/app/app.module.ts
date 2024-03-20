import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';

import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componets/Home/home/home.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { SideNavComponent } from './componets/Dashboards/side-nav/side-nav/side-nav.component';
import { AccueilComponent } from './componets/accueil/accueil.component';
import { ReclamationComponent } from './componets/reclamation/reclamation.component';
import { DossiersComponent } from './componets/dossiers/dossiers.component';
import { CalendrierComponent } from './componets/calendrier/calendrier.component';
import { StatistiquesComponent } from './componets/statistiques/statistiques.component';
import { Dashboard2Component } from './componets/Dashboards/dashboard2/dashboard2.component';
import { NavbarComponent } from './componets/Dashboards/navbar/navbar.component';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { IconModule } from '@progress/kendo-angular-icons';
import { PopupModule } from '@progress/kendo-angular-popup';
// import {MatCardModule} from '@angular/material/card'
import { IconsModule } from "@progress/kendo-angular-icons";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ProgressBarModule} from "@progress/kendo-angular-progressbar";




@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SideNavComponent,
    AccueilComponent,
    ReclamationComponent,
    DossiersComponent,
    CalendrierComponent,
    StatistiquesComponent,
    Dashboard2Component,
    NavbarComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabelModule,

   
    DropDownListModule,
    DropDownsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    DropDownsModule,
    LabelModule,
    InputsModule,
    HttpClientModule,
    
    ButtonsModule,
    ScrollViewModule,
    AppBarModule,
    IconModule,
    PopupModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    IconsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    DropDownsModule,
    ProgressBarModule
    
    
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
