import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from "../model/person";

@Injectable()
export class PersonService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/person';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/all`);
  }

  public save(person: Person) {
    return this.http.post<Person>(`${this.baseUrl}/add`, person);
  }
}
