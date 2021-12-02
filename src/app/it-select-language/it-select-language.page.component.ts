import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select-language",
  templateUrl: "./it-select-language.page.component.html",
  styleUrls: ["./it-select-language.page.component.scss"],
})
export class SelectLanguagePageComponent implements OnInit {
  languages = [
    "ENGLISH",
    "HINDI",
    "TAMIL",
    "TELUGU",
    "GUJARATI",
    "MARATI",
    "KANADA",
    "MALAYALAM",
  ];
  constructor() {}

  ngOnInit() {}
}
