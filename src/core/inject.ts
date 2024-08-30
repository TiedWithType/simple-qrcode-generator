export const Inject = Dependency => (Constructor, property) => {
 Reflect.defineProperty(Constructor, property, {
  value: Reflect.construct(Dependency, [])
 })
}