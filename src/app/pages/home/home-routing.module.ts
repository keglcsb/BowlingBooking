import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  {path:'login', loadChildren:() => import('../../pages/login/login.module').then(m => m.LoginModule)},
  {path:'signup', loadChildren:()=> import('../../pages/signup/signup.module').then(m => m.SignupModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
