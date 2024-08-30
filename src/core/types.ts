export interface Component<T = HTMLElement> {
 viewRef: T;
}

interface IComponent {
 selector: string;
 dependencies?: any[];
}

export type Constructor<T = {}> = new (...args: any[]) => T;