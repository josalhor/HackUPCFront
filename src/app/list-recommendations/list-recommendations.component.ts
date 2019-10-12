import { Component, OnInit } from '@angular/core';
import {ApiSession, ApiSessionService, RealEstate} from './api-session.service';

@Component({
  selector: 'app-list-recommendations',
  templateUrl: './list-recommendations.component.html',
  styleUrls: ['./list-recommendations.component.scss']
})

export class ListRecommendationsComponent implements OnInit {
  public apiSession: ApiSession;
  private email: string;

  constructor(private sessionService: ApiSessionService) { }

  ngOnInit() {
    // TODO: fetch the email from the url and call getSession
  }

  getSession() {
    this.sessionService.getApiSession(this.email).subscribe(
      (data: ApiSession) => { this.apiSession = data; },
      err => console.error(err),
      () => console.log('done loading session')
    );
  }

  isSessionReady(): boolean {
    return this.apiSession.status === 'completed';
  }

  getRecommendations(): [RealEstate] {
    return this.apiSession.recommendations;
  }
}
