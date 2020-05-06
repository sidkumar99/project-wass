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
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { RouterModule } from "@angular/router";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductTableComponent,
    ProductFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LoginFormComponent,
      },
      {
        path: "register",
        component: RegisterFormComponent,
      },
      {
        path: "login",
        component: LoginFormComponent,
      },
      {
        path: "profile",
        component: ProfilePageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
