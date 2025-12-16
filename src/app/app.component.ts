import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
// 以下這個自動引入是錯誤的
// import { NgClass } from "../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  showClass: boolean = false;

  showH4Css(): string {
    return "h4Css";
  }
}
