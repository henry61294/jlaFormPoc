import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './model.ts/contact-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailFormService {
  private emailApi = 'https://mailthis.to/codeninja' // we need to put in our own email with mailthistoAPI NOT LONG TERM SOLUTION COSTS MONEY!!!!!!!!!

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.emailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

}
