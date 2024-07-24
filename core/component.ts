import { Service } from "./service";

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

    const ownKeys: (string | symbol)[] = Reflect.ownKeys(
      target.prototype
    ).filter((propertyKey: string) => propertyKey.endsWith("EventEmitter"));

    @Service
    class RootComponent extends target implements Component {
      view: HTMLElement;

      constructor(...args: any[]) {
        super(...args);
        this.onInit();
      }

      async onInit(): Promise<void> {
        try {
          this.view = document.querySelector(options.selector);

          if (!this.view)
            throw Error(`${options.selector} is not a valid selector!`);

          await this.eventsMapper();
        } catch (error) {
          console.error(error);
        }
      }

      private async eventBind(eventName: string): Promise<void> {
        this.view.addEventListener(
          eventName.replace(/EventEmitter/g, ""),
          (Reflect.get(this, eventName) as Function).bind(this)
        );
      }

      private async eventsMapper(): Promise<void> {
        await Promise.all(
          ownKeys.map((propertyKey: string) => this.eventBind(propertyKey))
        );
      }
    }

    return Reflect.construct(RootComponent, options.dependencies || []);
  };
};
