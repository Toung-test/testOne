import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  links = [
    { name: 'First', path: '/first' },
    { name: 'Second', path: '/second' },
    { name: 'Third', path: '/third' }
  ];
  activeLink = this.links[0].path;


  // 原先的呈現純切換標籤
  // links = ['First', 'Second', 'Third'];
  // activeLink = this.links[0];

  // 新增頁面的，這次不會用到
  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }
}
