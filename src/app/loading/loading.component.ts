import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {ApiSessionService, ApiSession} from '../services/api-session.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  private time: number = 5000;
  public apiSession: ApiSession;
  constructor(private spinner: NgxSpinnerService, 
              private api: ApiSessionService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let email;
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      email = queryParam.get('email');
      if(email !== undefined && email !== null){
        this.getSession(email);
      }
    })
    /** spinner starts on init */
    this.spinner.show();
  }

  getSession(email: string){
    this.api.getApiSession(email).subscribe((data: ApiSession) => {
      this.api.setApiSession(data);
      if(this.api.isSessionReady()){
        this.spinner.hide();
        this.router.navigate(['recommender']);
      }
    },
    err => console.error(err),
    () => console.log('done loading session: ' + this.api.getApiInfo().email));
  }



}
