import { AuthService } from "./../shared/auth.service";
import { LoginRequestPayload } from "./login-request.payload";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isError: boolean;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginRequestPayload = {
      username: "",
      password: "",
    };
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("username", Validators.required),
      password: new FormControl("password", Validators.required),
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.registered !== undefined && params.registered == "true") {
        this.toastr.success("Signup successfull !!");
        this.registerSuccessMessage =
          "Please Check your inbox for activation email " +
          "activate your account before you Login!";
      }
    });
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get("username").value;
    this.loginRequestPayload.password = this.loginForm.get("password").value;

    this.authService.login(this.loginRequestPayload).subscribe((data) => {
      console.log("Login successfully !! :) ");
      if (data) {
        this.isError = false;
        this.router.navigateByUrl("/");
        this.toastr.success("Login successfull :) ");
      } else {
        this.isError = true;
      }
    });
  }
}
