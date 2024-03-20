import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { HomeComponent } from './componets/Home/home/home.component';
import { SideNavComponent } from './componets/Dashboards/side-nav/side-nav/side-nav.component';
import { AccueilComponent } from './componets/accueil/accueil.component';
import { CalendrierComponent } from './componets/calendrier/calendrier.component';
import { DossiersComponent } from './componets/dossiers/dossiers.component';
import { Dashboard2Component } from './componets/Dashboards/dashboard2/dashboard2.component';
import { NavbarComponent } from './componets/Dashboards/navbar/navbar.component';
import { ReclamationComponent } from './componets/reclamation/reclamation.component';
import { StatistiquesComponent } from './componets/statistiques/statistiques.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent}, 
  { path: 'navbar', component: NavbarComponent},
  { path: 'Accueil', component: AccueilComponent},
  { path: 'Calendrier', component: CalendrierComponent},
  { path: 'Dossiers', component: DossiersComponent},
  { path: 'Reclamation', component: ReclamationComponent},
  { path: 'Statistiques', component: StatistiquesComponent},
  { path: 'side-nav', component: SideNavComponent},
  { path: 'dashboard2', component: Dashboard2Component},

  { path: 'dashboard2', component: Dashboard2Component, children: [
    
    { path: 'Accueil', component: AccueilComponent },
    { path: 'Reclamation', component: ReclamationComponent},
    { path: 'Calendrier', component: CalendrierComponent},
    { path: 'Dossiers', component: DossiersComponent},
    { path: 'Statistiques', component: StatistiquesComponent},
  
  ]},










  // { path: '',loadChildren:()=>import('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule),},
  // { path: 'Dashboard2', component: Dashboard2Component },






  
 
  
  // { path: 'dashboard2/Accueil', component: AccueilComponent}, // Ajout de la route pour 'dashboard2/Accueil'

  // { path: '',loadChildren:()=>import('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule),},
  
  // Autres routes...


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
