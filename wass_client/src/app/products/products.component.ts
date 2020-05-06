import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: any[];
  ids: any[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().then((prod) => {
      const keys = Object.keys(prod);
      var prods = [];
      var idvals = [];
      for (const key of keys) {
        prods.push(prod[key].name);
        idvals.push(prod[key]._productId);
      }
      this.products = prods;
      this.ids = idvals;
    });
  }
}
