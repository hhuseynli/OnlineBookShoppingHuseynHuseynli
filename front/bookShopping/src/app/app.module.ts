import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { LogoutComponent } from './component/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicInterceptorService } from './service/BasicInterceptorService';
import { SignupComponent } from './component/signup/signup.component';
import { MatDialogModule } from '@angular/material';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { BasketComponent } from './component/basket/basket.component';
import { OrderConfirmComponent } from './component/order-confirm/order-confirm.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageViewComponent } from './component/image-view/image-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LogoutComponent,
    SignupComponent,
    CustomerPageComponent,
    OrderListComponent,
    BasketComponent,
    OrderConfirmComponent,
    AddBookComponent,
    BookListComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'success',cancelButtonType:'danger',confirmText:'Təsdiq',cancelText:'Ləğv'
    }),
    InfiniteScrollModule
    
  ],
  entryComponents:[SignupComponent, AddBookComponent, ImageViewComponent, BasketComponent, OrderConfirmComponent],
  providers: [{provide:HTTP_INTERCEPTORS ,useClass:BasicInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
