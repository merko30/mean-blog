import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  activePage: number = 1;

  @Input()
  arrayOfNumbers: number[];

  @Output()
  selectedNumber = new EventEmitter();

  onClick(value) {
    this.activePage = value;
    this.selectedNumber.emit(value);
  }
}
