import { ZoomableDirective } from "./zoomable.directive";
import { DraggableDirective } from "./draggable.directive";
import { DoubleClickDirective } from "./doubleclick.directive";

export * from "./zoomable.directive";
export * from "./draggable.directive";
export * from "./doubleclick.directive";

export const D3_DIRECTIVES = [
  ZoomableDirective,
  DraggableDirective,
  DoubleClickDirective,
];
