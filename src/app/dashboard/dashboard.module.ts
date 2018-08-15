import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AboutmeComponent } from './aboutme/aboutme.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { SkillComponent } from './skill/skill.component';
// import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent, 
    MainPanelComponent
    // AboutmeComponent, 
    // PortfolioComponent, 
    // SkillComponent, 
    // ContactComponent, 
  ]
})
export class DashboardModule { }





