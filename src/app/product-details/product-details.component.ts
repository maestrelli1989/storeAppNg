import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	product;

	constructor(
		private route: ActivatedRoute,
		private cartService: CartService,
		private titleService: Title,
	) {
		this.titleService.setTitle("MyStore | Product");
	}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.product = products[+params.get('productId')];
		});
	}

	addToCart(product) {
		window.alert('Your product has been added to the cart!');
		this.cartService.addToCart(product);
	}

}
