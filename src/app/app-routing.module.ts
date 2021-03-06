import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/brands/:brandId/colors/:colorId",component:CarComponent},
  {path:"cars/car-detail/:carId",component:CarDetailComponent},

  {path:"cars/car-add",component:CarAddComponent,canActivate:[LoginGuard]},
  
  {path:"cars/rental/:carId",component:RentalComponent},
  {path:"cars/payment/:carId",component:PaymentComponent,canActivate:[LoginGuard]},
 
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
