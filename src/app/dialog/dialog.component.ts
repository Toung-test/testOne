import { Person } from './../@interface/person';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [FormsModule, MatDialogActions, MatDialogContent, MatDialogTitle],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onClick() {
    this.dialogRef.close("我跳進來了");
  };

  onNoClick() {
    // 沒有要傳遞資料出去，只是純關閉
    this.dialogRef.close();
  };

}
