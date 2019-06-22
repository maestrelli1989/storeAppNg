import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot([
			{ path: '', component: HomePageComponent },
			{ path: 'about-us', component: AboutUsComponent },
			{ path: 'shop', component: ShopComponent },
			{ path: 'shop/:productId', component: ProductDetailsComponent },
			{ path: 'cart', component: CartComponent },
			{ path: 'shipping', component: ShippingComponent },
			{ path: 'contact-us', component: ContactUsComponent },
			{ path: '**', component: NotFoundComponent },
		])
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomePageComponent,
		ShopComponent,
		ProductAlertsComponent,
		ProductDetailsComponent,
		CartComponent,
		ShippingComponent,
		AboutUsComponent,
		ContactUsComponent,
		NotFoundComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }