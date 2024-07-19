export type Constructor<T extends Function> = new (...args: any[]) => T;

export interface Component<T = HTMLElement> {
  view: T;
}

interface ComponentOptions {
  selector: string;
  dependencies?: Function[];
}

export const Component = (options: ComponentOptions): Function => {
  return (target: Constructor<FunctionConstructor>) => {
    const ComponentConstructor = class extends target implements Component {
      constructor(...args: any[]) {
        super(...args);
        this.eventsMapper();
      }

      view: HTMLElement = document.querySelector(options.selector);

      private eventBind(eventName: string): void {
        this.view.addEventListener(
          eventName.replace(/Event/g, ""),
          (Reflect.get(this, eventName) as Function).bind(this)
        );
      }

      private eventsMapper(): void {
        Reflect.ownKeys(target.prototype)
          .filter((propertyKey: string) => propertyKey.endsWith("Event"))
          .forEach((propertyKey: string) => {
            this.eventBind(propertyKey);
          });
      }
    };

    return Reflect.construct(
      ComponentConstructor,
      (options.dependencies || []).map((inject) => inject)
    );
  };
};
