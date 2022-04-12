import { Directive, Input, ElementRef, OnInit } from "@angular/core";
import { Node, ForceDirectedGraph } from "../models";
import { D3Service } from "../d3.service";

@Directive({
  selector: "[doubleClickNode]",
})
export class DoubleClickDirective implements OnInit {
  @Input("doubleClickNode") doubleClickNode: Node;
  @Input("doubleClickInGraph") doubleClickInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyDoubleClickBehaviour(
      this._element.nativeElement,
      this.doubleClickNode,
      this.doubleClickInGraph
    );
  }
}
