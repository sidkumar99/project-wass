import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}
  getProducts() {
    return fetch("/products/").then((resp) => resp.json());
  }

  delProduct(idx) {
    console.log(idx);
    var data = {
      id: idx,
    };
    fetch("/delete/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.status >= 400) {
          console.log("Bad response from server");
        }
        return response.text();
      })
      .then(function (data) {
        if (data === "success") {
          console.log("User has been deleted.");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  addProduct(product) {
    var data = {
      id: product.Id,
      name: product.Name,
      brand: product.Brand,
      status: 1,
      metadata: product.Price,
    };
    fetch("/add/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.status >= 400) {
          console.log("Bad response from server");
        }
        return response.text();
      })
      .then(function (data) {
        if (data === "success") {
          console.log("User has been deleted.");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  editUser(Id, Name) {
    var data = {
      id: Id,
      name: Name,
    };
    fetch("/edit/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.status >= 400) {
          console.log("Bad response from server");
        }
        return response.text();
      })
      .then(function (data) {
        if (data === "success") {
          console.log("User has been deleted.");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
