import {ApiSession, ApiSessionService, RealEstate} from '../services/api-session.service';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-recommendations',
  templateUrl: './list-recommendations.component.html',
  styleUrls: ['./list-recommendations.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})

export class ListRecommendationsComponent implements OnInit {
  public users: User[] = [
    {id: 1, picture: 'guatajaus/src/guatajaus/src/assets/images/Logo guatajaus.pngassets/images/Logo guatajaus.png', age: 22, name: 'Catalina', gender: 'female'},
    {id: 2, picture: 'guatajaus/src/assets/images/gengar.jpg', age: 44, name: 'Nigerian', gender: 'male'}
  ];
  public index = 0;
  public apiSession: ApiSession;
  public current: RealEstate;

  @Input()
  parentSubject: Subject<any> = new Subject();

  animationState: string;
  constructor(private sessionService: ApiSessionService) { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event);
    });
    this.apiSession = this.sessionService.getApiInfo();
    this.nextRecommendation();
    }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

  cardAnimation(value) {
    this.parentSubject.next(value);
  }

  nextRecommendation(){
    this.current = this.apiSession.recommendations.pop();
    console.log(this.current.id);
  }
}
