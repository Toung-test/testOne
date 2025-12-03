import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstAngular';

  showAlert() {
    alert(this.title);
  }

  imgSrc: string = "https://media.vogue.com.tw/photos/683d55bcc0713e1086d5addb/2:3/w_2560%2Cc_limit/IMG_0401.jpg";

  changeImg() {
    this.imgSrc = "https://hips.hearstapps.com/hmg-prod/images/%E6%8B%BC1-682c5f273b28c.jpg?crop=0.497xw:0.993xh;0,0&resize=640:*";
  }

  showBtn(msg: string) {
    alert(msg);
  }

  imgSrc2: string = "https://wx3.sinaimg.cn/mw2000/81c37846ly1g1hgqegetwj210w1crb29.jpg";
  changeOneImg(msg: string) {
    if (msg === "one") {
      this.imgSrc2 = "https://wx3.sinaimg.cn/mw2000/81c37846ly1g1hgqegetwj210w1crb29.jpg";

    }
    else if (msg === "two") {
      this.imgSrc2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9Rf1IHkA2KqizXqKx9_yfhOgVfG0-ZS_lQ&s"
    }
  }
}
