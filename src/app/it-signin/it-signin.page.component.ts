import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./it-signin.page.component.html",
  styleUrls: ["./it-signin.page.component.scss"],
})
export class SignInPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signIn() {
    this.router.navigate(["/verification"]);
  }
}
