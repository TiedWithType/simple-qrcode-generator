export type Constructor<T extends Function> = new (...args: any[]) => T;

export const Inject = <T extends Function>(args: T[] = []): Function => {
  return (target: Constructor<T>) => {
    const deps = [...args].map(
      (a) => typeof a == "function" && Reflect.construct(a, [])
    );

    return Reflect.construct(target, deps);
  };
};
