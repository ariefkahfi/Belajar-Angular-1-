import { Component } from '@angular/core';
import {AndroidVersions} from "./model/Android";

@Component({
  selector: 'app-root',
  template : `
      <h1>{{title}}</h1>
      <div>
        My hero is : {{content.name}}
      </div>

      <ul>
        <li *ngFor='let android of androidVersion'>
           {{android.name}} 
        </li>
      </ul>
      
      <p *ngIf = " content.name === 'Android Oreo' ">Oreo Fanatic !</p>
      <p *ngIf = " content.name === 'Android Nougat' ">You are nougat !</p>
      <p *ngIf = " content.name === 'Android Donut' ">Donut nut :) </p>

      <p *ngIf = "androidVersion.length < 3 ">Poor Version</p>  
      <app-ctor></app-ctor>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  androidVersion = [new AndroidVersions('Android Oreo',1),new AndroidVersions('Android Nougat',2),new AndroidVersions('Android Donut',3)];

  content = this.androidVersion[1];
}
