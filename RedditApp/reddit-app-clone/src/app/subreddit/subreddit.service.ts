import { Observable } from "rxjs";
import { SubredditModel } from "./subreddit-response";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SubredditService {
  constructor(private http: HttpClient) {}
  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>(
      "http://localhost:8080/api/subreddit",
      subredditModel
    );
  }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>(
      "http://localhost:8080/api/subreddit"
    );
  }
}
