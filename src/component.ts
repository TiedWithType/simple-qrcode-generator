export type Constructor<T extends Function> = new (...args: any[]) => T;

export interface Component<T = HTMLElement> {
  viewRef: T;
}

interface ComponentOptions {
  selector: string;
  inject?: Function[];
}

export const Component = (options: ComponentOptions): Function => {
  return (target: Constructor<Function>) => {
    const ComponentConstructor = class extends target {
      constructor(...args: any[]) {
        super(...args);
        this.eventsMapper();
      }

      protected get viewRef(): HTMLElement {
        return document.querySelector(options.selector);
      }

      private eventBind(eventName: string): void {
        this.viewRef.addEventListener(
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
      (options.inject || []).map((inject) => inject)
    );
  };
};
