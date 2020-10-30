import { Component } from '@angular/core';
import {Posts} from './posts/posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 storedPosts: Posts[] = []

 onPostAdded(post){

this.storedPosts.push(post);
 }
}
