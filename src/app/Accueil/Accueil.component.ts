import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { TokenStorageService } from 'app/Auth/token-storage.service';


@Component({
  selector: 'app-Accueil',
  templateUrl: './Accueil.component.html',
  styleUrls: ['./Accueil.component.css']
})
export class AccueilComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  
}
