import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { MainComponent } from './components/cart/main/main.component';
import { MiniCartComponent } from './components/cart/mini-cart/mini-cart.component';
import { CrossSellsComponent } from './components/cart/cross-sells/cross-sells.component';
import { ThankyouComponent } from './components/checkout/thankyou/thankyou.component';
import { QuickViewHorizontalComponent } from './components/product-display/quick-view-horizontal/quick-view-horizontal.component';
import { QuickViewVerticalComponent } from './components/product-display/quick-view-vertical/quick-view-vertical.component';
import { MetaComponent } from './components/single-product/meta/meta.component';
import { ImageComponent } from './components/single-product/image/image.component';
import { RatingComponent } from './components/single-product/rating/rating.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { LoginComponent } from './components/user-account/login/login.component';
import { OrderbyComponent } from './components/loop/orderby/orderby.component';
import { BreadcrumbComponent } from './components/global/breadcrumb/breadcrumb.component';
import { QuantityInputComponent } from './components/global/quantity-input/quantity-input.component';
import { HeaderElementsModule } from './header-elements/header-elements.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    MainComponent,
    MiniCartComponent,
    CrossSellsComponent,
    ThankyouComponent,
    QuickViewHorizontalComponent,
    QuickViewVerticalComponent,
    MetaComponent,
    ImageComponent,
    RatingComponent,
    ProductSearchComponent,
    LoginComponent,
    OrderbyComponent,
    BreadcrumbComponent,
    QuantityInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
