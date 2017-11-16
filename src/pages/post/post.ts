import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class Post {
  title: string;
  body: string;
  id: string;

constructor(){}

}


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: Post = new Post();

  constructor(public navCtrl: NavController) { }

  submit(){
    this.navCtrl.parent.select(0);
  }

  

}
