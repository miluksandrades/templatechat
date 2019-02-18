import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ConsumeService {

  apiURL =  'assets/chat.json';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.apiURL)
    .pipe(map(data => data))
  }
}
