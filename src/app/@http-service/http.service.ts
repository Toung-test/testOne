import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  // 呼叫 AI 的 url
  apiAIurl = 'https://api.openai.com/v1/chat/completions';

  // 呼叫 AI 的 key - crecar.0218@gmail.com
  // 放在 gitnore
  aiKey = '';

  // 專屬於呼叫 AI 的
  postAI(msg: string) {
    // 呼叫 api 傳遞過去的抬頭 header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.aiKey}`
    });

    // 呼叫 api 傳遞過去的資料
    const body = {
      model: 'gpt-4o-mini', // model 可以選擇 gpt-4o 或 gpt-3.5-turbo
      messages: [{ role: 'user', content: msg }]
    };

    return this.httpClient.post(this.apiAIurl, body, { headers });
  }

}
