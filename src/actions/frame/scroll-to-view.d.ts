import { FrameActionContext } from './types';
export declare function onScrollToView(this: FrameActionContext, payload?: {
    top?: number;
    bottom?: number;
    duration?: number;
}): void;
export default onScrollToView;
