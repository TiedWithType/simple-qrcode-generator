import { Constructor } from "./types";

export const Service = <T extends Constructor>(constructor: T) => {
 let instance: T;

 const handler = {
  construct(target: T, args: any[]) {
   if (!instance)
    instance = Reflect.construct(target, args);

   return instance;
  },
 };

 return new Proxy(constructor, handler);
}
