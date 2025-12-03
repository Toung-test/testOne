import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // ngOnInit 是網頁的生命週期，在網頁一開始的時候就會被觸發
  ngOnInit(): void {
    /*
    console.log("Allen");
    let num = 5;
    let stringNum = "8";
    console.log(num * parseInt(stringNum));
    // parseInt 是一個固定的函式寫法，用來將字串轉為數字，前提是字串本身要是一串數字或是以開頭為數字的字串。
    console.log(typeof (num));
    console.log(typeof (stringNum));
    console.log('---分隔線---');

    let numString = 1;
    // 數字轉文字的方法，有兩種
    // 1. 在數字前後加一上任一個 string ，可為空字串("")
    console.log(typeof (numString + ""));
    // String 是一個固定的函式寫法，用來將數字轉為字串
    let string = String(numString);
    console.log(typeof (numString));
    console.log(typeof (string));
    console.log('---分隔線---');

    // 介紹物件
    let jsonData = {
      title: '問卷標題',
      time: '2025/12/03',
      data: {
        a: 123,
        b: "1235你好"
      },
      id: 3,
      need: true
    }
    console.log(jsonData.data.b);
    console.log('---分隔線---');

    // 物件轉成字串，完整顯示
    console.log(JSON.stringify(jsonData));

    // 字串轉成物件，完整顯示
    let stringObject = '{"title":"問卷標題","time":"2025/12/03","data":{"a":123,"b":"1235你好"},"id":3,"need":true}';
    console.log(JSON.parse(stringObject));
    console.log('-----分隔線------');

    // 顯示日期，或者是指定日期時間轉換成日期格式
    console.log(new Date());
    console.log(new Date('2025-12-03'));
    console.log(new Date('2025-12-03 10:00:10'));

    // 需要特別注意，月份需加一才是正確的，而星期日(0)~星期六(6)
    let todayDate = new Date();
    console.log('年' + todayDate.getFullYear());
    console.log('月' + (todayDate.getMonth() + 1));
    console.log('日' + todayDate.getDate());
    console.log('小時' + todayDate.getHours());
    console.log('分鐘' + todayDate.getMinutes());
    console.log('毫秒' + todayDate.getSeconds());
    console.log('星期' + todayDate.getDay());

    // 切割字串，尋找字元的位置，字串長度計算
    let longText = "Hello World";
    // 我想要 lo ， (起始位置(含)，結束位置(不含))
    let lo = longText.slice(3, 5);
    console.log(lo);

    // 找出 r 的位置，若出現 -1 代表沒這個東西，而如果有多個重複出現的話，只會顯示第一個 l 的位置
    let whereR = longText.indexOf('l');
    console.log(whereR);

    // 字串長度
    console.log(longText.length);
    console.log('----分隔線---');


    // 陣列相關

    // 長度跟字串一樣都是 .length
    let newArray = ['A', 'B', 'C', 'D'];

    // 刪除或取出陣列中的資料
    // 我想要 B C 顯示出來

    // 取出資料 ； slice 不動原陣列
    // slice (起始位置，結束位置)，含起始不含結束
    let newSliceArray = newArray.slice(1, 3);
    console.log(newSliceArray);

    // 刪除資料 ； 更動原資料
    // splice (起始，要刪幾筆)
    // 這個方法是指取出被刪除的資料並顯示
    let newSpliceArray = newArray.splice(1, 2);
    console.log(newSpliceArray);
    console.log(newArray);

    let newTwoArray = ['E', 'F', 'G', 'H'];
    // 用 filter 找出 F H ， 回傳一個新組成的陣列，不動原本的陣列
    let FHArray = newTwoArray.filter((item) => {
      return item == 'F' || item == 'G';
    })
    console.log(FHArray);
    console.log(newTwoArray);

    // 新增一筆資料，以及刪除最後一筆資料
    // IJArray 是接收 push 後的結果，他是回傳新的陣列長度，且 Push 後會更動原本資料
    let IJArray = newTwoArray.push('I', 'J');
    console.log(IJArray, newTwoArray);

    // IArray 是接收 pop 所刪除的最後那一筆資料是甚麼，且 pop 會更動原本資料
    let IArray = newTwoArray.pop();
    console.log(IArray, newTwoArray);

    // 迴圈類 Function
    let forArray = ['K', 'L', 'M', 'N'];

    forArray.forEach((item) => {
      item = item + 'A';
      console.log(item)
    });
    console.log('888888');

    forArray.forEach((item, index, array) => {
      array[index] = item + 'c';
      console.log(array[index]);
    });

    console.log('----');

    for (let i = 0; i < forArray.length; i++) {
      console.log(forArray[i]);
    }

    console.log('+++++');

    for (let item of forArray) {
      console.log(item);
    }
*/
    /*

        let arrayData = ['a', 'b', 'c'];
        // 找出'b'的索引值

        for (let i = 0; i < arrayData.length; i++) {
          if (arrayData[i] == 'b') {
            console.log(i);
          }
        }

        let num = 0;
        for (let item of arrayData) {
          if (item == 'b') {
            console.log(num);
          }
          num += 1;
        }
    */

    // 1.試著將1~50打印出來。(for迴圈)
    let fivtyArray = [];
    console.log('題目一');
    for (let i = 1; i <= 50; i++) {
      fivtyArray.push(i);
    }
    console.log(fivtyArray);


    // 2. 承接第一題將偶數去除並且打應出來。
    console.log('題目二');
    let oddArray = fivtyArray.filter((item) => item % 2 != 0);
    console.log(oddArray);

    // 用 for + if 去顯示，沒有去除，也先註解掉
    // for (let i = 0; i <= fivtyArray.length; i++) {
    //   if (i % 2 != 0) {
    //     // 純顯示奇數
    //     console.log(i);
    //   }
    // }

    // 這個方式是用 for + splice ，但因為 splice 會動到原陣列所以先註解掉
    // for (let i = fivtyArray.length; i >= 0; i--) {
    //   if (i % 2 != 0) {
    //     // 去除奇數
    //     fivtyArray.splice(i, 1);
    //   }
    // }
    // console.log(fivtyArray);

    // 3.將1~50除以3餘數為2的值打印出來。(for迴圈)
    console.log('題目三');

    let remainderTwo = [];

    for (let item of fivtyArray) {
      if (item % 3 == 2) {
        // console.log(item);
        remainderTwo.push(item);
      }
    }
    console.log(remainderTwo);

    // 4.建立右圖的資料並且使用forEach修改小王的age為18。(forEach)
    console.log('題目四');
    let data = [
      {
        name: '小明',
        age: 10
      },
      {
        name: '小陳',
        age: 24
      },
      {
        name: '小王',
        age: 16
      }
    ];

    data.forEach((item, index, array) => {
      if (item.name == '小王') {
        array[index].age = 18;
      }
    })
    console.log(data);

    // 5.找出陣列裡的最小值([4, 6, 1, 2, 7, 9, 12, 15, 13])
    console.log('題目五');
    let Q5Array = [4, 6, 1, 2, 7, 9, 12, 15, 13];
    let min = Q5Array[0];
    for (let item of Q5Array) {
      if (item < min) {
        min = item;
      }
    }
    console.log(min);

    // 6.倒著印出字串(你好我是Allen)
    console.log('題目六');
    let AllenString = '你好我是Allen';
    let newAllen = '';

    for (let i = AllenString.length - 1; i >= 0; i--) {
      newAllen += AllenString[i];
    }
    console.log(newAllen);

    // 7.將這段文字中的名子打印出來(我是Allen，你好)
    console.log('題目七');
    let AllenTwoString = '我是Allen，你好';
    let AllenName = AllenTwoString.slice(2, 7);
    console.log(AllenName);

    let start = AllenTwoString.indexOf('Allen');
    let AllenStartName = AllenTwoString.slice(start, start + 5);
    console.log(AllenStartName);

  }

}
