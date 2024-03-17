import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { HomeComponent } from './componets/Home/home/home.component';
import { SideNavComponent } from './componets/Dashboards/side-nav/side-nav/side-nav.component';
import { AccueilComponent } from './componets/accueil/accueil.component';
import { CalendrierComponent } from './componets/calendrier/calendrier.component';
import { DossiersComponent } from './componets/dossiers/dossiers.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent}, 
  { path: 'accueil', component: AccueilComponent},
  { path: 'calendrier', component: CalendrierComponent},
  { path: 'dossiers', component: DossiersComponent},
  { path: 'side-nav', component: SideNavComponent},
  { path: 'side-nav', component: SideNavComponent},
  { path: 'side-nav', component: SideNavComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
