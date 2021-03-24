import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ 
  path: 'home', component: HomeComponent },
/* { path: 'path2', component: Name2Component }, */
{ path: '**',  pathMatch:'full', redirectTo:"home" },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


