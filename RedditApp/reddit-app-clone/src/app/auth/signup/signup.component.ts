import { AuthService } from "./../shared/auth.service";
import { SignupRequestPayload } from "./signup-request.payload";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupRequestPayload: SignupRequestPayload;
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.signupRequestPayload = {
      username: "",
      email: "",
      password: "",
    };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });
  }

  signup() {
    this.signupRequestPayload.email = this.signupForm.get("email").value;
    this.signupRequestPayload.username = this.signupForm.get("username").value;
    this.signupRequestPayload.password = this.signupForm.get("password").value;

    this.authService.signup(this.signupRequestPayload).subscribe(
      () => {
        // console.log(data);
        this.router.navigate(["/login"], { queryParams: { registered: true } });
      },

      () => {
        this.toastr.error("Registeration failed! Please try again ! ");
      }
    );
  }
}
