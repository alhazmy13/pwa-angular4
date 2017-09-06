import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Observable<[Post]>;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.posts = response.json() as Observable<[Post]>);
  }


}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
