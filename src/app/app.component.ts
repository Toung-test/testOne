import { LoadingService } from './@http-service/loading.service';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  constructor(private loadingService: LoadingService) { }

  isLoading: boolean = false;


  ngOnInit(): void {
    this.loadingService._loading$.subscribe((res: boolean) => {
      this.isLoading = res;
    });
  }

  openLoading() {
    this.loadingService.show();
  }
}
