import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-table",
  templateUrl: "./product-table.component.html",
  styleUrls: ["./product-table.component.scss"],
})
export class ProductTableComponent implements OnInit {
  @Input() products_list;
  @Input() id_list;
  @ViewChild("newName") newName: ElementRef;
  prods: any[];
  displayedColumns: string[] = ["#", "product"];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}

  onDeleteClick(idx) {
    this.products_list.splice(idx, 1);
    var del_id = this.id_list[idx];
    this.id_list.splice(idx, 1);
    this.productService.delProduct(del_id);
  }

  newProduct(event) {
    console.log(event);
    this.products_list.unshift(event.Name);
    this.id_list.unshift(event.Id);
  }

  onEditClick(idx, Name) {
    console.log(idx, Name);
    var id = this.id_list[idx];
    this.products_list[idx] = Name;
    this.productService.editUser(id, Name);
    this.newName.nativeElement.value = "";
  }
}
