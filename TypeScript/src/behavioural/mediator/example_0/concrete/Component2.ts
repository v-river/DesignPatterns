import { BaseComponent } from "../abstract/BaseComponent";

class Component2 extends BaseComponent {
  public doC(): void {
    console.log("Component 2 does C.");
    this.mediator?.notify(this, "C");
  }

  public doD(): void {
    console.log("Component 2 does D.");
    this.mediator?.notify(this, "D");
  }
}

export { Component2 };
