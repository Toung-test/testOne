import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // 以下兩個方法擇一

  // private 為私人的，代表這個全域變數
  // public 為公開的，代表這個全域變數可以被外部使用
  // 宣告 loading$ 為一個可以被訂閱的值，並且內容的類型為 boolean
  // 變數宣告最後加 $ 是個人習慣可加可不加
  private loading$ = new Subject<boolean>();


  // 宣告 loading2$ 為一個可以被訂閱的值(並且要帶初始值)，並且內容的類型為 boolean
  // private loading2$ = new BehaviorSubject<boolean>(false);

  // 單純開放可以被訂閱的值得訂閱功能，不開放修改其他功能給其他頁面
  _loading$ = this.loading$.asObservable();
  // _loading2$ = this.loading2$.asObservable();
  constructor() { }

  // 開啟訂閱
  show() {
    this.loading$.next(true);
    // this.loading2$.next(true);

    setTimeout(() => {
      this.hide();
    }, 3000)

  }

  // 關閉訂閱
  hide() {
    this.loading$.next(false);
    // this.loading2$.next(false);
  }

}
