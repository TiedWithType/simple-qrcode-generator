export const EVENT_EMITTER = Symbol("EVENTEMITTER");
export const EVENT_LISTENER = Symbol("EVENTLISTENER");

interface EventName {
 click: string;
 dblclick: string;
 mousedown: string;
 mouseup: string;
 mousemove: string;
 mouseover: string;
 mouseout: string;
 mouseenter: string;
 mouseleave: string;
 contextmenu: string;
 keydown: string;
 keypress: string;
 keyup: string;
 submit: string;
 change: string;
 input: string;
 focus: string;
 blur: string;
 reset: string;
 select: string;
 load: string;
 resize: string;
 scroll: string;
 unload: string;
 beforeunload: string;
 hashchange: string;
 popstate: string;
 online: string;
 offline: string;
 drag: string;
 dragstart: string;
 dragend: string;
 dragenter: string;
 dragleave: string;
 dragover: string;
 drop: string;
 touchstart: string;
 touchmove: string;
 touchend: string;
 touchcancel: string;
}

export const EventListener = (eventName: keyof EventName): MethodDecorator => {
 return (target: object, key: string, descriptor: PropertyDescriptor) => {
  descriptor.value[EVENT_LISTENER] = eventName;
  return descriptor.value;
 };
};

export const EventListenerResolver = (target, ctx) => {

 Reflect.ownKeys(target.prototype).filter(key => {
  return ctx[key][EVENT_LISTENER];
 }).forEach(key => {
  const method = ctx[key];
  const event = method[EVENT_LISTENER];

  ctx.viewRef.addEventListener(event, method.bind(ctx));
 })
}
