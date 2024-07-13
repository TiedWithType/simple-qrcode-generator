export const Component = (selector: string): ClassDecorator => {
  return (target: any): any => {
    return class extends target {
      viewRef: HTMLElement | Document = selector.match("document")
        ? document
        : (document.querySelector(selector) as HTMLElement);

      attachEvent(key: string) {
        this.viewRef.addEventListener(
          key.replace(/Event/g, ""),
          Reflect.get(this, key).bind(this)
        );
      }

      mapEvents() {
        Reflect.ownKeys(target.prototype)
          .filter((key: string) => key.endsWith("Event"))
          .forEach((key: string) => {
            this.attachEvent(key);
          });
      }

      constructor(...args: any[]) {
        super(...args);
        this.mapEvents();
      }
    };
  };
};

export interface Component<T> {
  viewRef: T;
}
