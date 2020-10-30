import { Injectable } from '@angular/core';
import { title } from 'process';
import { Posts } from './posts.model';

@Injectable({providedIn: 'root'})
export class PostsService{

 private posts : Posts[]= [];

getPosts() {

return [...this.posts];

  }

addPost(title:string, content:string){
  const posts: Posts = {title: title, content: content};
  this.posts.push(posts);
  }
}
