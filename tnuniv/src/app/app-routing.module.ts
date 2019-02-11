import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'find-friends',component:FindFriendsComponent},
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[FindFriendsComponent,HomeComponent]
