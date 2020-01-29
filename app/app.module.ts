import { FormDataService } from './services/form-data.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthUserService } from './services/auth-user.service';
import { AuthGuardService } from './services/auth-guard.service';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './shopping/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/order-success/order-success.component';
import { CheckOutComponent } from './shopping/check-out/check-out.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './product/products/products.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user-authentication/login/login.component';
import { SignupComponent } from './user-authentication/signup/signup.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

import { DecimalPipe } from '@angular/common';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductModalComponent } from './product/product-modal/product-modal.component';
import { OrderModalComponent } from './order-modal/order-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SignupComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductModalComponent,
    OrderModalComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'login', component: LoginComponent},

        { path: 'products', component: ProductsComponent},
        { path: 'shopping-cart', component: ShoppingCartComponent},

        { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
        { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
        { path: 'order-success/:orderId', component: OrderSuccessComponent, canActivate: [AuthGuardService] },

        { path: 'admin/orders', component: AdminOrdersComponent,  canActivate: [AuthGuardService, AdminAuthGuardService] },
        { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        { path: 'admin/products', component: AdminProductsComponent,  canActivate: [AuthGuardService, AdminAuthGuardService] }
    ])
  ],
  providers: [
    AuthGuardService,
    AdminAuthGuardService,
    AuthUserService,
    FormDataService,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
