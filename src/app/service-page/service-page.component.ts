import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-page",
  templateUrl: "./service-page.component.html",
  styleUrls: ["./service-page.component.css"],
})
export class ServicePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
