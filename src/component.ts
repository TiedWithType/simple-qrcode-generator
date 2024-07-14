export const Component = (selector: string): ClassDecorator => {
  return (target: any): any => {
    class ComponentConstructor extends target {
      private _view: HTMLElement = document.querySelector(selector);

      constructor(...args: any[]) {
        super(...args);
        this.eventsMapper();
      }

      protected get viewRef(): HTMLElement {
        return this._view;
      }

      private eventBind(eventName: string): void {
        this.viewRef.addEventListener(
          eventName.replace(/Event/g, ""),
          Reflect.get(this, eventName).bind(this)
        );
      }

      private eventsMapper(): void {
        Reflect.ownKeys(target.prototype)
          .filter((propertyKey: string) => propertyKey.endsWith("Event"))
          .forEach((propertyKey: string) => {
            this.eventBind(propertyKey);
          });
      }
    }

    return ComponentConstructor;
  };
};

export interface Component<T = HTMLElement> {
  viewRef: T;
}
