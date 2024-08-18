export interface Component<T = HTMLElement> {
  view: T;
}

interface ComponentOptions {
  selector: string;
  dependencies?: Function[];
}

export const Component = (options: ComponentOptions): Function => {
  return (target: FunctionConstructor): Function => {
    class RootComponent extends target implements Component {
      view: HTMLElement;

      constructor(...args: any[]) {
        super(...args);
        this.onInit();
      }

      async onInit(): Promise<void> {
        this.view = document.querySelector(options.selector);
        await this.eventsBinding();
      }

private async eventsBinding(): Promise<void> {
        const events = Reflect.ownKeys(target.prototype)
          .filter((k) => this[k].__eventBinding)
          .map(key => [this[key].__eventBinding, this[key]])
          .forEach(([event, listener]) => {
          //  let ev = this[k].__eventBinding;
         //   let fn = this[k].bind(this);

            this.view.addEventListener(event, listener.bind(this));
          });
        await Promise.all(events);
      }
    }

    return Reflect.construct(RootComponent, options.dependencies || []);
  };
};
