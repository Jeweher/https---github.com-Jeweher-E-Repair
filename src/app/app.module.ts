import { NgModule } from '@angular/core';
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



@NgModule({
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
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
