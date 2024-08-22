import { EVENT_EMITTER_KEY } from "./event.emitter";

export interface Component<T = HTMLElement> {
  view: T;
}

interface ComponentOptions {
  selector: string;
  dependencies?: any[];
}

// Typ konstruktora dla klas komponentów
type Constructor<T = {}> = new (...args: any[]) => T;

export const Component = (options: ComponentOptions): ClassDecorator => {
  return <T extends Constructor>(Base: T): Function => {
    class RootComponent extends Base implements Component {
      view: HTMLElement;

      constructor(...args: any[]) {
        super(...args);
        this.onInit();
      }

      private async onInit(): Promise<void> {
        this.view = document.querySelector(options.selector) as HTMLElement;
        if (this.view) {
          await this.eventsBinding();
        } else {
          console.warn(`Selector "${options.selector}" not found in the DOM.`);
        }
      }

      private async eventsBinding(): Promise<void> {
        Reflect.ownKeys(Base.prototype)
          .filter((key) => {
            const descriptor = Object.getOwnPropertyDescriptor(Base.prototype, key);
            return descriptor && EVENT_EMITTER_KEY in descriptor.value;
          })
          .forEach((key) => {
            const method = this[key as keyof this] as Function;
            const event = method[EVENT_EMITTER_KEY];
            this.view.addEventListener(event, method.bind(this));
          });
      }
    }

    return Reflect.construct(RootComponent, options.dependencies || []);
  };
};
