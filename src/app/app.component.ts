import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  displayH1: boolean = false;

  changeDisplayH1() {
    if (this.displayH1) {
      this.displayH1 = false;
    } else {
      this.displayH1 = true;
    }

  }
  // ngOnInit 是網頁的生命週期，在網頁一開始的時候就會被觸發
  ngOnInit(): void {
    let num = 5;
    switch (num) {
      case 1:
        console.log(1);
        break;
      case 2:
        console.log(2);
        break;
      case 5:
        console.log(5);
        break;
      default:
        console.log('default');
        break;
    }

  }
}
