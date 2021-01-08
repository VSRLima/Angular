import { delay, map, retry, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  urlEmails = 'http://localhost:3000/emails'

  constructor(private http: HttpClient) { }

  verificarEmail(email: string) {
   return this.http.get(this.urlEmails).pipe(
    delay(2000),
    map((dados:any[]) => dados.filter(v => v.email === email)),
    // tap(console.log),
    map((dados:any[]) => dados.length > 0),
    // tap(console.log)
    )
  }
}
