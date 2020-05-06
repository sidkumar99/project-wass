import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnInit {
  show: Boolean = false;
  @Output() formEvent = new EventEmitter();
  constructor(private productService: ProductsService) {}

  productForm = new FormGroup({
    Name: new FormControl(""),
    Brand: new FormControl(""),
    Price: new FormControl(""),
  });

  ngOnInit(): void {}

  onClick() {
    this.show = !this.show;
  }

  onSubmit() {
    this.show = !this.show;
    this.productForm.value.Id = Math.ceil(Math.random() * 10000);
    this.formEvent.emit(this.productForm.value);
    this.productService.addProduct(this.productForm.value);
  }
}
