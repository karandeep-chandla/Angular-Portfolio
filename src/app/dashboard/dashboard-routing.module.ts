import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: '',
      component: DashboardComponent
      // children: [
      //     { path: '', component: LandingComponent},
      //     { path: 'users', component: UserComponent}
      // ],
      // canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routingComponents = [
    DashboardComponent
];
