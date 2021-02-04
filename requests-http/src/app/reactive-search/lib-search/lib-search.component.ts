import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch() {
    const fields = 'name,description,version,homepage';
    let value = this.queryField.value
    if (value && value.trim() !== '') {
      value = value.trim();
    }
    this.results$ = this.http.get(this.SEARCH_URL + '?fields=' + fields + '$search=' + value).pipe(
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );
  }

}
