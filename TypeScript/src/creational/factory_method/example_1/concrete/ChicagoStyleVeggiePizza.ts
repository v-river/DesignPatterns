import { Pizza } from "../abstract/Pizza";

class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Style Deep Dish Veggie Pizza";
    this.dough = "Extra Thick Crust Dough";
    this.sauce = "Plum Tomato Sauce";
    this.toppings.push("Shredded Mozzarella Cheese");
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}

export { ChicagoStyleVeggiePizza };
