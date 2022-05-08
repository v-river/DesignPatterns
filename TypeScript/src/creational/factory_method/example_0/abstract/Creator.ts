import { Product } from "./Product";

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();

    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export { Creator };
