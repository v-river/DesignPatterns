import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { Pizza } from "../abstract/Pizza";
import { VeggiePizza } from "./VeggiePizza";

class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === "cheese") {
      pizza = new CheesePizza();
    } else if (type === "pepperoni") {
      pizza = new PepperoniPizza();
    } else if (type === "clam") {
      pizza = new ClamPizza();
    } else if (type === "veggie") {
      pizza = new VeggiePizza();
    } else {
      pizza = new CheesePizza();
    }

    return pizza;
  }
}

export { SimplePizzaFactory };
