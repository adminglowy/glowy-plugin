export interface FrameActionContext {
    scrollContainer: HTMLElement;
    scrollOffset: number;
    frame: HTMLIFrameElement;
}
export interface FrameActionFunction {
    (this: FrameActionContext, payload?: object): void;
}
