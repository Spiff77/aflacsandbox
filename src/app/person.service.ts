import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  add(name: string): void{
    //this.people.push(name);
  }

  async findAll(): Promise<any> {
    return this.http.get(this.url)
      .pipe(
        map(v => (v as []).map(e => e['name']))
      ).toPromise();
  }

}
