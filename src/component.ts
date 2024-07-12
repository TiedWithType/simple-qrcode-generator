import { classRunner } from "./utils";

export const Component = (selector: string | Document): Function => {
  const viewRef: HTMLElement | Document =
    selector === document
      ? document
      : (document.querySelector(selector as string) as HTMLElement);

  return (target: FunctionConstructor): Function => {
    const newConstructor: any = function (...args: any[]) {
      const instance = Reflect.construct(target, args);

      if (!Reflect.has(instance, "viewRef")) {
        Reflect.set(instance, "viewRef", viewRef);
      }

      Reflect.ownKeys(target.prototype).forEach((key: string | symbol) => {
        if (typeof key === "string" && key.includes("Event")) {
          const eventHandler = instance[key].bind(instance);
          viewRef.addEventListener(key.replace(/Event/g, ""), eventHandler);
        }
      });

      Object.assign(instance, target.prototype);
      Object.assign(instance, target);

      return instance;
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = newConstructor;

    return newConstructor;
  };
};

export interface Component<T> {
  viewRef: T;
}
