import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './about/new/new.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, AboutComponent, NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  initString: String = '123';

  today: Date = new Date();
  yesterday: Date = new Date('2025/12/03');

  // ngOnInit 是網頁的生命週期，在網頁一開始的時候就會被觸發
  ngOnInit(): void {
    // IF 介紹
    if (this.initString) {
      console.log('初始有值');
    }
    else {
      // 未設定值或者是空字串都是沒有值的
      console.log('初始沒值');
    }

    // 日期比較
    // 會透過
    if (this.today.getTime() > this.yesterday.getTime()) {
      console.log('今天比較大');
    }
    else {
      console.log('昨天比較大，出現他一定有問題');
    }

    // 題目前置
    let jsonData = [
      {
        userName: "Allen",
        payMoney: 500
      },
      {
        userName: "Ben",
        payMoney: 20
      },
      {
        userName: "Eric",
        payMoney: 120
      },
    ]

    // 1.Allen錢包裡有 200 元，買了一個漢堡(50)，三個薯條(40)，他還剩下多少錢？
    console.log('----題目一----');
    let AllenMoney = 200 - 50 - (40 * 3);
    console.log(`Allen錢包裡有 200 元，買了一個漢堡(50)，三個薯條(40)，他還剩下 ` + AllenMoney + ` 元`);

    // 2.Allen身上有 5000 元，想要買 10 份漢堡、10 份薯條，因為他有會員卡，所以可以打九折優惠，請問他還剩下多少錢？
    console.log('----題目二----');
    let AllenCost = (10 * 50 + 10 * 40) * 0.9;
    let AllenGoMoney = 5000 - AllenCost;
    console.log(`Allen身上有 5000 元，想要買 10 份漢堡、10 份薯條，因為他有會員卡，所以可以打九折優惠，他還剩下 ` + AllenGoMoney + ` 元`);

    // 3.
    console.log('----題目三----');
    jsonData.forEach((item) => {
      if (item.payMoney > 200) {
        console.log(item.userName + ' 已達到 VIP');
      }
    })

    // 4.寫一個可以帶入體重的方法來計算BMI在哪個區間
    console.log('----題目四，輸入後才顯示----');


    // Element
    this.getElement();
  }

  // BMI 相關計算
  hei!: number;
  wei!: number;
  BMI: number = 0;
  BMIResult: String = '尚未計算';
  getBMI(hei: number, wei: number) {
    console.log(hei);
    console.log(wei);
    let AllBMI = wei / (hei * hei);
    this.BMI = Number(AllBMI.toFixed(2));
    console.log(this.BMI);
    if (this.BMI < 18.5) {
      this.BMIResult = '過輕'
    }
    else if (this.BMI >= 18.5 && this.BMI < 24) {
      this.BMIResult = '正常'
    }
    else if (this.BMI >= 24 && this.BMI < 27) {
      this.BMIResult = '過重'
    }
    else if (this.BMI >= 27 && this.BMI < 30) {
      this.BMIResult = '輕度肥胖'
    }
    else if (this.BMI >= 30 && this.BMI < 35) {
      this.BMIResult = '中度肥胖'
    }
    else {
      this.BMIResult = '重度肥胖'
    }
  }

  nowLevel: number = 1;
  inputLevel!: number;
  attack: number = 10;
  defense: number = 10;
  alertContent!: String;

  getElement() {
    (document.getElementById('te') as HTMLInputElement).value = '你好';
  }

  upLevelOne() {
    this.alertContent = '';
    this.nowLevel += 1;
    this.attack *= 3;
    this.defense *= 2;
  }

  downLevelOne() {
    if (this.nowLevel <= 1) {
      this.alertContent = ' 等級最低為一，不能降囉 ';
    }
    else {
      this.nowLevel = this.nowLevel - 1;
      this.attack /= 3;
      this.defense /= 2;
    }
  }

  updateLevel(inputLevel: number) {
    this.nowLevel = inputLevel;
    this.attack = 10 * Math.pow(3, (inputLevel - 1));
    this.defense = 10 * Math.pow(2, (inputLevel - 1));
    (document.getElementById('inputLevel') as HTMLInputElement).value = '';
  }

  resetLevel() {
    this.nowLevel = 1;
    this.attack = 10;
    this.defense = 10;
  }
}
