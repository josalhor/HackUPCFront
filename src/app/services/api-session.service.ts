import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export interface RealEstateImages {
  image: string;
}


export interface RealEstate {
  id: number;
  promotionId: number;
  rooms: number;
  bathrooms: number;
  surface: number;
  location: string;
  latitude: number;
  longitude: number;
  images: [RealEstateImages];
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
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  public apiSession: ApiSession;
  private sessionUrl = 'https://guatajaus.herokuapp.com/session/last';
  public url: string;

  getApiSession(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.get(this.sessionUrl, {
      headers: httpOptions.headers,
      params
    });
  }

  isSessionReady(): boolean {
    return this.apiSession.status === 'completed';
  }

  getRecommendations(): [RealEstate] {
    return this.apiSession.recommendations;
  }

  getApiInfo(){
    return this.apiSession;
  }

  setApiSession(apiSession: ApiSession){
    this.apiSession = apiSession;
  }


}

