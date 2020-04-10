import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from "./products/products.component";
import { ProductTableComponent } from "./product-table/product-table.component";
import { ProductFormComponent } from "./product-form/product-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductTableComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
