import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CartService } from '../cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

	items;
	checkoutForm: FormGroup;

	constructor(
		private cartService: CartService,
		private formBuilder: FormBuilder,
		private titleService: Title,
	) {
		this.titleService.setTitle("MyStore | Cart");
		this.items = this.cartService.getItems();
		this.checkoutForm = this.formBuilder.group({
			firstName: new FormControl("Tom", Validators.required),
			lastName: '',
			phone: '',
			email: '',
			address: '',
			additionalInfo: ''
		});
		this.checkoutForm = new FormGroup({
			"firstName": new FormControl("", Validators.required),
			"lastName": new FormControl("", Validators.required),
			"phone": new FormControl("", Validators.required),
			"address": new FormControl("", Validators.required),
			"additionalInfo": new FormControl(""),
			"email": new FormControl("", [
				Validators.required, 
				Validators.email 
			])
		});
	}

	ngOnInit() { }

	onSubmit(customerData) {
		console.log('Your order has been submitted', customerData);
		this.items = this.cartService.clearCart();
		this.checkoutForm.reset();
	}

}