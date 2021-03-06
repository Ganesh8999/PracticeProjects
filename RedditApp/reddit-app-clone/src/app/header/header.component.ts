import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;
  isError: boolean;
  constructor() {}

  ngOnInit() {}

  logout() {}

  goToUserProfile() {}
}
