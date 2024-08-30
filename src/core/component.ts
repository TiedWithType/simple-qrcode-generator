import { EventListenerResolver } from "./events";
import { Service } from "./service";
import { IComponent, Constructor } from "./types";

export const Component = (options: IComponent): ClassDecorator => {
 const { selector, dependencies } = options;

 return <T extends Constructor>(Base: T): Function => {
  Base.prototype.name = Base.name;
  
  @Service
  class WebComponent extends Base {
   constructor(...args) {
    super(...args);
    try {
     this.resolveDependencies();
     this.initHooks();
    } catch (error) {
     console.error(error.stack);
    }
   }
   async initHooks() {
    this.viewRef = document.querySelector(selector);
    EventListenerResolver(this, Base);
   }
   
   resolveDependencies() {
    (dependencies??[]).forEach(dep => {
     const { name } = dep.constructor.prototype;
   
     Reflect.defineProperty(this, name, {
      value: dep
     })
    })
   }
  }

  return Reflect.construct(WebComponent, []);
 }
}
