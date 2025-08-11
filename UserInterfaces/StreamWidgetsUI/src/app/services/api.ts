import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://localhost:5001/api'; // Replace with your actual API base URL
  }

  getWidgets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/widgets`);
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }
  
}
