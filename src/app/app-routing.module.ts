import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SystemFeaturesComponent } from './system-features/system-features.component';
import { StoriesComponent } from './stories/stories.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent
  },
  {
    path: 'product-catalog',
    component: CatalogueComponent
  },
  {
    path: 'system-features',
    component: SystemFeaturesComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
