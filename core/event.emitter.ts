export interface EventName {
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

export const EventEmitter = (eventName: keyof EventName): MethodDecorator => {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    descriptor.value.__eventBinding = eventName;
  };
};
