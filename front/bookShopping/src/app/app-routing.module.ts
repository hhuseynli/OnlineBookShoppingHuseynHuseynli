import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { BookListComponent } from './component/book-list/book-list.component';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { OrderListComponent } from './component/order-list/order-list.component';



const routes: Routes = [
  {path:"",component:CustomerPageComponent},
  {path:"books", component:CustomerPageComponent},
  {path:"mybooks", component:BookListComponent, canActivate:[RouteGuardService]},
  {path:"orders", component:OrderListComponent, canActivate:[RouteGuardService]},
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent, canActivate:[RouteGuardService]},
 {path:"**", component:LoginComponent}                                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
