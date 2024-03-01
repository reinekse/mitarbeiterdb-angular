import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Standort} from "../model/standort";

@Injectable({providedIn: 'root'})
export class StandortService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/standort';
  }

  public findAll(): Observable<Standort[]> {
    return this.http.get<Standort[]>(`${this.baseUrl}/all`);
  }

  public save(standort: Standort) {
    return this.http.post<Standort>(`${this.baseUrl}/add`, standort);
  }
}
