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

  newArray: Array<string> = ['one', 'two'];

  arrayDataTwo = [
    {
      id: 1,
      name: 'a',
      userData: [
        { userID: 1 }
      ]
    },
    {
      id: 2,
      name: 'b',
      userData: [
        { userID: 2 }
      ]
    },
    {
      id: 3,
      name: 'c',
      userData: [
        { userID: 3 }
      ]
    },
  ];

  userArray = [
    {
      userName: "玩家 A",
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5
        },
        {
          propsName: '金幣',
          amount: 15
        }
      ]
    },
    {
      userName: "玩家 B",
      lev: 15,
      props: [
        {
          propsName: '龜殼',
          amount: 1
        },
        {
          propsName: '砲彈',
          amount: 15
        }
      ]
    }
  ]

  // ngOnInit 是網頁的生命週期，在網頁一開始的時候就會被觸發
  ngOnInit(): void {
    let jsonData = {
      name: "Allen",
      age: 18,
      favorite: {
        commodity: [
          "商品1",
          "商品2",
          "商品3"
        ]
      },
      memberData: [
        {
          money: 5000,
          email: "abc@gmail.com"
        }
      ]
    }

    // 死板的寫法
    let newData = {
      userName: jsonData.name,
      userAge: jsonData.age,
      likefavorite: jsonData.favorite,
      memberData: [
        {
          payMoney: jsonData.memberData[0].money,
          email: jsonData.memberData[0].email
        }
      ]
    };

    let newDataTwo = {
      userName: jsonData.name,
      userAge: jsonData.age,
      likefavorite: [...jsonData.favorite.commodity],
      memberData: [jsonData.memberData.map(item => ({
        payMoney: item.money,
        email: item.email
      }))
      ]
    }

    console.log(newData);
    console.log(newDataTwo);
  }
}
