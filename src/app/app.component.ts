import { RouterOutlet } from '@angular/router';
import { Component, inject, numberAttribute } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  // readonly 跟 constructor 是一樣的效果，但官方建議 readonly
  readonly dialog = inject(MatDialog);
  // constructor(private dialog: MatDialog) { };

  openDialog() {
    // 最基礎的開啟，不調整css或內容
    // this.dialog.open(DialogComponent);

    // 修正內容 & css
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      height: '300px',
      data: "Hello"
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    })
  }


  // 介紹同步 & 非同步
  num: number = 0;

  ngOnInit(): void {
    this.addNum();
  }

  // 因為有一直無限呼叫，所以會一直下去
  addNum() {
    setTimeout(() => {
      console.log('上一個值', this.num);
      this.num += 1;
      console.log('下一個值', this.num);
      this.addNum();
    }, 1000);
  }
}
