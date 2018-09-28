import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SystemFeaturesComponent } from './system-features/system-features.component';
import { StoriesComponent } from './stories/stories.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListSidebarComponent,
    HeaderComponent,
    FooterComponent,
    SystemFeaturesComponent,
    StoriesComponent,
    PricingComponent,
    BlogComponent,
    AboutUsComponent,
    ContactsComponent,
    ShoppingCartComponent,
    CatalogueComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
