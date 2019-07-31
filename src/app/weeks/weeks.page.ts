import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'q';
import { timer } from 'rxjs';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.page.html',
  styleUrls: ['./weeks.page.scss'],
})
export class WeeksPage implements OnInit {

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiCalPage');
  }
  ngOnInit() {
  }
  constructor(private router: Router,private route: ActivatedRoute, public navCtrl: NavController){
  }
  pushPage(page, param){
    if(document.getElementById("data-week-selection-") == null){
      this.router.navigate([`/${page}`, param]);
    }
  }
  myDate: String = new Date().toISOString();
  weeks = [];
  reverseWeeks = this.weeks;
  date: any;
  navParams: NavParams;
  sub = this.route.params.subscribe(params => {
    if (this.weeks[0] == null){
      this.weeks.push({name: params['name'], description: "escreva sua descrição aqui"});
    } else {
      var receivedData = new Date(params['name']);
      for (var i = 0; i < this.weeks.length; i++){
        var existentDate = new Date(this.weeks[i].name);
        // if (receivedData.getWeek() != existentDate.getWeek()){
        //   this.weeks.push({name: params['name'], description: "escreva sua descrição aqui"});
        // }
      }
    }
  });
  addWeek = function(newWeek){
    newWeek = {name: "", description: ""};
    this.weeks.push(newWeek);
    this.reverseWeeks = this.weeks.slice().reverse();
    this.newWeek = {};
    var sizeWeeks = this.reverseWeeks.length;

    var tid = setInterval(function(){
      clickById();
    },400);

    function clickById(){
      if(document.getElementsByTagName("ion-datetime")[0] != null){
        if(document.getElementById("data-week-selection-") != null){
          document.getElementsByTagName("ion-datetime")[0].disabled = false;
          document.getElementById("data-week-selection-").click();
          return;
        }
        if(document.getElementById("data-week-selection-") == null){
          clearInterval(tid);
          ableAll();
        }
      }
      function ableAll(){
        for(var i = 0; i < sizeWeeks; i++){
          if(document.getElementsByTagName("ion-datetime")[i] != undefined){
            document.getElementsByTagName("ion-datetime")[i].disabled = false;
          }
        }
      }
    }
  };
}
