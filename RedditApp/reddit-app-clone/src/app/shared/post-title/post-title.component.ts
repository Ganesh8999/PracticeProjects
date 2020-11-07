import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { PostModel } from "../post-model";
import { faComments } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-post-tile",
  templateUrl: "./post-title.component.html",
  styleUrls: ["./post-title.component.css"],
})
export class PostTitleComponent implements OnInit {
  posts$: Array<PostModel> = [];

  faComments = faComments;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe((post) => {
      this.posts$ = post;
    });
  }

  ngOnInit(): void {}

  goToPost(any) {}
}
