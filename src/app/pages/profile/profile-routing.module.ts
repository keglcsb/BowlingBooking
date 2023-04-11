import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import {AuthGuard} from "../../shared/guard/auth.guard";

const routes: Routes = [{ path: '', component: ProfileComponent },
  { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule), canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
