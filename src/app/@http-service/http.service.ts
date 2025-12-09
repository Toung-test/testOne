import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// 上面一樣是跟系統說，此檔案為共用

export class HttpService {
  // 將 HttpClient 用建構式匯入
  constructor(private httpClient: HttpClient) { }

  // 讀取
  getApi(url: string) {
    return this.httpClient.get(url);
  }

  // 新增
  postApi(url: string, postData: any) {
    return this.httpClient.post(url, postData);
  }

  // 更新
  putApi(url: string, postData: any) {
    return this.httpClient.put(url, postData);
  }

  // 刪除
  delApi(url: string) {
    return this.httpClient.delete(url);
  }
}
