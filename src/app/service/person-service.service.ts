import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from "../model/person";

@Injectable({providedIn: 'root'})
export class PersonService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/person';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/all`);
  }

  public save(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/add`, person);
  }

  public delete(id: string) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  public find(id: string) {
    return this.http.get<Person>(`${this.baseUrl}/find/${id}`);
  }

}
