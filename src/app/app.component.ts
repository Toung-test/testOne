import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  // 傳統的 Input 不接受 用 new Date() 的 方式，只能用 string (2025-11-01) 的格式
  sdate: Date = new Date();
  oneDate: string = '2025-12-20';
  twoDate: string = '2025/12/20'; // 不接受此格式，所以會報錯

  // 若要通過傳統的 Input 去接收 new Date 需要做額外的處理
  tradtionalDate!: string;

  minDate: string = '2025-12-01';
  maxDate: string = '2025-12-01';

  ngOnInit(): void {
    this.tradtionalDate =
      new Date().getFullYear() + '-' +
      (new Date().getMonth() + 1) + '-' +
      new Date().getDate();
  }

}
