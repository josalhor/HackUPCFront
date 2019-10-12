import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export interface RealEstate {
  id: number;
  promotionId: number;
  rooms: number;
  bathrooms: number;
  surface: number;
  location: string;
  latitude: number;
  longitude: number;
}

export interface ApiSession {
  sessionId: number;
  status: string;
  creationTime: string;
  email: string;
  recommendations: [RealEstate];
}


@Injectable()
export class ApiSessionService {
  constructor(private http: HttpClient) { }

  private sessionUrl = 'https://guatajaus.herokuapp.com/session/last';

  getApiSession(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.get(this.sessionUrl, {
      headers: httpOptions.headers,
      params
    });
  }
}

