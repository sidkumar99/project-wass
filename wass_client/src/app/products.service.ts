import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}
  username: string;

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

  searchByBrand(brand) {
    var data = {
      query: brand,
    };

    return fetch("/search/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  login(vals) {
    var data = {
      email: vals.Email,
      password: vals.Password,
    };

    return fetch("/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  register(vals) {
    var data = {
      id: vals.id,
      firstname: vals.FirstName,
      lastname: vals.LastName,
      password: vals.Password,
      email: vals.Email,
      pref: vals.pref,
    };
    console.log(data);

    return fetch("/new/", {
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
          console.log("User has been added.");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  setUser(name) {
    this.username = name;
    return;
  }

  getUser() {
    return this.username;
  }

  addFriend(username1, username2) {
    var data = {
      u1: username1,
      u2: username2,
    };

    return fetch("/friend/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  friendP(val) {
    var data = {
      email: val,
    };

    return fetch("/explore/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  buy(pid, mail, user) {
    var data = {
      _pid: pid,
      email: mail,
      _uid: user,
    };

    return fetch("/buy/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  procedure(mail) {
    var data = {
      email: mail,
    };

    return fetch("/procedure/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Connection: "keep-alive" },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }
}
