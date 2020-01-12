import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animation';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-Historique',
  templateUrl: './Historique.component.html',
  styleUrls: ['./Historique.component.css'],
  animations: [routerTransition()]

})
export class HistoriqueComponent implements OnInit {

  public users2:any=[];
myuser:any={};
public roles:any=[];
myid:any;
statut:boolean=false; 
p: number = 1;
  constructor(public myserv:HistoryService) { }

  ngOnInit() {
    this.getallhistory();
  }
  getallhistory(){
    this.myserv.gethistory().subscribe(
    (data)=>{
    this.users2=data;
    console.log(data);
    for (let index = 0; index < data.length; index++) {
    this.roles[index] = data[index].roles[0].name;
    }
    },
    (err)=>{
    console.log(err);
    this.myuser={};
    }
    );
    console.log(this.users2);
    this.myuser={};
    }   

}
