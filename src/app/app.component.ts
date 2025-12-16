import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  chartArray = [
    {
      id: '1',
      loabels: ['早餐', '午餐', '晚餐'],
      label: '花費',
      data: [30, 120, 300],
      backgroundColor: ['rgba(164, 162, 22, 1)', 'rgba(22, 93, 164, 1)', 'rgba(53, 17, 58, 1)']
    },
    {
      id: '2',
      loabels: ['籃球', '桌球', '羽球'],
      label: '次數',
      data: [10, 20, 30],
      backgroundColor: ['rgba(65, 164, 22, 1)', 'rgba(34, 39, 43, 1)', 'rgba(234, 77, 255, 1)']
    }
  ];

  ngAfterViewInit(): void {
    this.chartArray.forEach((chart) => {
      let ctx = document.getElementById(chart.id) as HTMLCanvasElement;
      let data = {
        labels: chart.loabels,
        datasets: [
          {
            label: chart.label,
            data: chart.data,
            backgroundColor: chart.backgroundColor,
            hoverOffset: 4
          }
        ]
      };
      let finalchart = new Chart(ctx, {
        type: 'pie',
        data: data
      });
    })
  };


  // ngOnInit(): void {
  //   // #region 網頁上範例
  //   // #region 長條圖(Bar chart)
  //   // 獲取 canvas 元素
  //   let ctx = document.getElementById('chart') as HTMLCanvasElement;

  //   // 設定數據
  //   let data = {
  //     // x 軸文字
  //     labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
  //     datasets: [
  //       // 第一組資料
  //       {
  //         // 上方分類文字
  //         label: '月銷售',
  //         // 數據
  //         data: [30, 20, 40, 32, 45, 24],
  //         // 顏色
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         // 邊框顏色
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         // 邊框寬度
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  //   // 圖表選項
  //   var options = {
  //     scales: {
  //       y: {
  //         // y 軸從 0 開始
  //         beginAtZero: true,
  //       },
  //     },
  //   };

  //   // 創建圖表
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: data,
  //     options: options,
  //   });

  //   // #endregion

  //   // #region 直線圖(Line chart)
  //   // 獲取 canvas 元素
  //   let ctx2 = document.getElementById('chart2') as HTMLCanvasElement;

  //   // 設定數據
  //   let data2 = {
  //     // x 軸文字
  //     labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
  //     datasets: [
  //       // 第一組資料
  //       {
  //         // 上方分類文字
  //         label: '月銷售',
  //         // 數據
  //         data: [30, 20, 40, 32, 45, 24],
  //         // 線與邊框顏色
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         // 線下方是否要填滿
  //         fill: true,
  //         // 線的弧度(0-1)，數值愈小線愈直
  //         tension: 0.1,
  //       },
  //     ],
  //   };

  //   // 創建圖表
  //   let chart2 = new Chart(ctx2, {
  //     type: 'line',
  //     data: data2,
  //   });

  //   // #endregion

  //   // #region 圓餅圖(Pie chart)/圓環圖(Doughnut chart)
  //   // 獲取 canvas 元素
  //   let ctx3 = document.getElementById('chart3') as HTMLCanvasElement;

  //   // 設定數據
  //   let data3 = {
  //     // x 軸文字
  //     labels: ['餐費', '交通費', '租金'],
  //     datasets: [
  //       {
  //         // 上方分類文字
  //         label: '支出比',
  //         // 數據
  //         data: [12000, 3000, 9000],
  //         // 線與邊框顏色
  //         backgroundColor: [
  //           'rgb(255, 99, 132)',
  //           'rgb(54, 162, 235)',
  //           'rgb(255, 205, 86)',
  //         ],
  //         //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
  //         hoverOffset: 4,
  //       },
  //     ],
  //   };

  //   // 創建圖表
  //   let chart = new Chart(ctx3, {
  //     //pie是圓餅圖,doughnut是環狀圖
  //     type: 'pie',
  //     data: data3,
  //   });

  //   // #endregion

  //   // #region 泡泡圖(Bubble chart)
  //   // 獲取 canvas 元素
  //   let ctx4 = document.getElementById('chart4') as HTMLCanvasElement;

  //   // 設定數據
  //   let data4 = {
  //     datasets: [
  //       // 第一組資料
  //       {
  //         // 上方分類文字
  //         label: '球隊',
  //         // 數據
  //         data: [
  //           {
  //             // x 軸座標
  //             x: 123.7,
  //             // y 軸座標
  //             y: 0.508,
  //             // 圓點大小
  //             r: 10,
  //           },
  //           {
  //             x: 122,
  //             y: 0.494,
  //             r: 10,
  //           },
  //           {
  //             x: 121.3,
  //             y: 0.466,
  //             r: 10,
  //           },
  //           {
  //             x: 120.8,
  //             y: 0.5,
  //             r: 10,
  //           },
  //           {
  //             x: 120.7,
  //             y: 0.481,
  //             r: 10,
  //           },
  //           {
  //             x: 119.7,
  //             y: 0.475,
  //             r: 10,
  //           },
  //         ],
  //         // 圓點顏色
  //         backgroundColor: 'rgb(255, 99, 132)',
  //       },
  //     ],
  //   };

  //   // 創建圖表
  //   let chart4 = new Chart(ctx4, {
  //     type: 'bubble',
  //     data: data4,
  //   });

  //   // #endregion

  //   // #region 混合表(Mixed chart)
  //   // 獲取 canvas 元素
  //   let ctx5 = document.getElementById('chart5') as HTMLCanvasElement;

  //   // 設定數據
  //   let data5: any = {
  //     // x 軸文字
  //     labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
  //     datasets: [
  //       // 第一組資料
  //       {
  //         type: 'line',
  //         // 上方分類文字
  //         label: '月銷售',
  //         // 數據
  //         data: [30, 20, 40, 32, 45, 24],
  //         // 線與邊框顏色
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         // 線的弧度(0-1)，數值愈小線愈直
  //         tension: 0.1,
  //       },
  //       {
  //         type: 'bar',
  //         // 上方分類文字
  //         label: '月銷售',
  //         // 數據
  //         data: [30, 20, 40, 32, 45, 24],
  //         // 線與邊框顏色
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         // 背景顏色
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       },
  //     ],
  //   };

  //   // 創建圖表
  //   let chart5 = new Chart(ctx5, {
  //     type: 'scatter',
  //     data: data5,
  //   });
  //   // #endregion
  //   // #endregion
  // }

}
