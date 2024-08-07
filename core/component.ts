import { Service } from "./service";
import { Query, attachEvent } from "./dom";
import { store } from "./store";

export interface Component<T = HTMLElement> {
  view: T;
}

interface ComponentOptions {
  selector: string;
  dependencies?: Function[];
}

export const Component = (options: ComponentOptions): Function => {
  return (target: FunctionConstructor): Function => {
    Reflect.set(target.prototype, "name", target.name);

    @Service
    class RootComponent extends target implements Component {
      view: HTMLElement;

      constructor(...args: any[]) {
        super(...args);
        this.onInit();
      }

      async onInit(): Promise<void> {
        this.view = Query(options.selector);
        await this.eventsMapper();
      }

      private async eventBind([event, prop]): Promise<void> {
        attachEvent(this.view, event, this[prop].bind(this));
      }

      private async eventsMapper(): Promise<void> {
        await Promise.all(
          Object.entries(store[target.name].events).map((event) =>
            this.eventBind(event),
          ),
        );
      }
    }

    return Reflect.construct(RootComponent, options.dependencies || []);
  };
};
