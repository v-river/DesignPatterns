import { Mediator } from "./Mediator";

class BaseComponent {
  protected mediator: Mediator | null;

  constructor(mediator: Mediator | null = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

export { BaseComponent };
