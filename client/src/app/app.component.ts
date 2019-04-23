import { Component, TemplateRef, OnInit } from '@angular/core';
import {ngxLoadingAnimationTypes} from 'ngx-loading';
import { SpinnerService } from 'src/service/SpinnerService';

@Component({
  selector:'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My App';
  showLoader:Boolean;
  constructor(private SpinnerService:SpinnerService )
  {

  }
  ngOnInit()
  {
    this.SpinnerService.status.subscribe((val:Boolean)=>
    {
      this.showLoader=val;
    })
  }
}
