import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  

  { path: 'skill', component: SkillComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },


  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'about', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard/skill', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard/portfolio', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard/contact', loadChildren: './dashboard/dashboard.module#DashboardModule'}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

export const routingComponents = [
    HeaderComponent,
    FooterComponent,
    SkillComponent,
    AboutmeComponent,
    PortfolioComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
];

