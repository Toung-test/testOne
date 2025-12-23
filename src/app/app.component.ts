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
  constructor(private httpService: HttpService) { };
  ngOnInit(): void {
    this.httpService.postAI('HI').subscribe((res) => {
      console.log(res);

    })
  }
}
