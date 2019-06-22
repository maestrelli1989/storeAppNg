import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { products } from '../products';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css']
})

export class ShopComponent {
	
	products = products;

	constructor(private titleService: Title) {
		this.titleService.setTitle("MyStore | Shop");
	}

	onNotify() {
		window.alert('Special price');
	}

	isAscendingSort: Boolean = true;
	
	/* Sort by default */

	sortByDefault() {
		this.isAscendingSort = !this.isAscendingSort;
		this.products.sort((product1: any, product2: any) => this.compareByDefault(product1, product2));
	}

	compareByDefault(product1: any, product2: any): number {
		let compareByDefaultValue = 0;
		compareByDefaultValue = product1.id.toString().localeCompare(product2.id.toString(), undefined, {'numeric': true});
		if (!this.isAscendingSort) {
			compareByDefaultValue = compareByDefaultValue * -1;
		}
		return compareByDefaultValue;
	}

	/* Sort by name */

	sortByName() {
		this.isAscendingSort = !this.isAscendingSort;
		this.products.sort((product1: any, product2: any) => this.compareByName(product1, product2));
	}
	
	compareByName(product1: any, product2: any): number {
		let compareByNameValue = 0;
		compareByNameValue = product1.name.localeCompare(product2.name, 'en', {
			sensitivity: 'base'
		});
		if (!this.isAscendingSort) {
			compareByNameValue = compareByNameValue * -1;
		}
		return compareByNameValue;
	}

	/* Sort by price */

	sortByPrice() {
		this.isAscendingSort = !this.isAscendingSort;
		this.products.sort((product1: any, product2: any) => this.compareByPrice(product1, product2));
	}

	compareByPrice(product1: any, product2: any): number {
		let compareByPriceValue = 0;
		compareByPriceValue = product1.price.toString().localeCompare(product2.price.toString(), undefined, {'numeric': true});
		if (!this.isAscendingSort) {
			compareByPriceValue = compareByPriceValue * -1;
		}
		return compareByPriceValue;
	}

}