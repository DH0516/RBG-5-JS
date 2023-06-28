class Coffee {
    constructor(name) {
      this.name = name;
      this.price = 0;
    }
  
    addPrice(price) {
      this.price += price;
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  function takeOrder(event) {
    event.preventDefault();
    let form = document.forms["Order"];
  
    let name = form.elements["name"].value;
    let coffeeType = form.elements["coffee type"].value;
    let extras = Array.from(form.elements["extras"])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    let size = form.elements["size"].value;
  
    let message =
      name +
      " ordered a " +
      size +
      " size " +
      coffeeType +
      " coffee with " +
      extras.length +
      " extras.";
    let price = createCoffee(name, coffeeType, size, extras).getPrice();
  
    let summary = message + "<br> The price is: $" + price;
    document.getElementById("summary").innerHTML = summary;
  
    return false; // Prevent default form submission behavior
  }
  
  function createCoffee(name, coffeeType, size, extras) {
    let coffee = new Coffee(name);
    switch (coffeeType) {
      case "Turkish":
        coffee.addPrice(3);
        break;
      case "American":
        coffee.addPrice(5);
        break;
      case "Iced-Latte":
        coffee.addPrice(7);
        break;
      default:
        break;
    }
    switch (size) {
      case "small":
        coffee.addPrice(1.5);
        break;
      case "medium":
        coffee.addPrice(2);
        break;
      case "large":
        coffee.addPrice(3.5);
        break;
      default:
        break;
    }
    for (let eachExtra of extras) {
      switch (eachExtra) {
        case "Extra-coffee":
          coffee.addPrice(1.5);
          break;
        case "Whipped-cream":
          coffee.addPrice(2);
          break;
        case "Extra-caramel":
          coffee.addPrice(3);
          break;
        default:
          break;
      }
    }
    return coffee;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.forms["Order"]
    .addEventListener("submit", takeOrder);
  });