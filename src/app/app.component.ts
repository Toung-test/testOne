import { LoadingService } from './@http-service/loading.service';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpService } from './@http-service/http.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  ngOnInit(): void {
    // 存到 local 或 session
    localStorage.setItem('name', 'Allen');
    sessionStorage.setItem('name', 'Hello World');

    // 取出資料
    console.log(localStorage.getItem('name'));
    console.log(sessionStorage.getItem('name'));

    // 如果在做 ng build 跳出錯誤訊息，說空間不空，要改的地方是 angular.json 中的 projects.firstAngular.architect.build.configurations.budgets.type=inital中的 max 那兩個屬性
  }
}
