import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PostPage } from '../post/post';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = PostPage;


  constructor() {

  }
}
