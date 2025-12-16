import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  // 傳統寫法
  selectData!: string;

  // Angular Material
  selected = 'option2';

}
