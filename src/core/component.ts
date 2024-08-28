import { EventListenerResolver } from "./events";
import { Service } from "./service";

export interface Component<T = HTMLElement> {
 viewRef: T;
}

interface IComponent {
 selector: string;
 dependencies?: any[];
}

type Constructor<T = {}> = new (...args: any[]) => T;

export const Component = (options: IComponent): ClassDecorator => {
 const { selector, dependencies } = options;

 return <T extends Constructor>(Base: T): Function => {
  @Service
  class WebComponent extends Base {
   constructor(...args) {
    super(...args);
    try {
     this.initHooks();
    } catch (error) {
     console.error(error.stack);
    }
   }
   async initHooks() {
    this.viewRef = document.querySelector(selector);
    EventListenerResolver(this, Base);
   }
  }

  return Reflect.construct(WebComponent, dependencies||[]);
 }
}
