import { CreateSubredditComponent } from "./subreddit/create-subreddit/create-subreddit.component";
import { CreatePostComponent } from "./post/create-post/create-post.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sign-up", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "create-post", component: CreatePostComponent },
  { path: "create-subreddit", component: CreateSubredditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
