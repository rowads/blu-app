import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { AccountComponent } from './account/account.component';
import { BurgerComponent } from './burger/burger.component';
import { ButtonComponent } from './button/button.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CompareComponent } from './compare/compare.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { MobileBtnsComponent } from './mobile-btns/mobile-btns.component';
import { StickyNavigationComponent } from './sticky-navigation/sticky-navigation.component';

@NgModule({
  declarations: [
    AccountComponent,
    BurgerComponent,
    ButtonComponent,
    CartComponent,
    CategoriesComponent,
    CompareComponent,
    LoginComponent,
    LogoComponent,
    MenuComponent,
    MobileBtnsComponent,
    StickyNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule // If you're using routerLink or other router directives in the components
  ],
  exports: [
    AccountComponent,
    BurgerComponent,
    ButtonComponent,
    CartComponent,
    CategoriesComponent
  ]
})
export class HeaderElementsModule { }
