export function Service<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  let instance: T;

  const handler = {
    construct(target: T, args: any[]) {
      if (!instance) (instance as any) = Reflect.construct(target, args);

      return instance;
    },
  };

  return new Proxy(constructor, handler);
}
