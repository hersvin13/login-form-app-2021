import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
	declarations: [AppComponent],
	imports: [ BrowserModule,
		 AppRoutingModule,
		  ReactiveFormsModule, 
		
		
	],
	bootstrap: [ AppComponent ]
	
})
export class AppModule { }