import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-years',
  templateUrl: './years.page.html',
  styleUrls: ['./years.page.scss'],
})

export class YearsPage implements OnInit {
  
  params: Object;
  route: Router;
  constructor(public navCtrl: NavController, private router: Router){
  }
  pushPage(page, param){
    if(document.getElementById("data-year-selection-") == null){
      this.router.navigate([`/${page}`, param]);
    }
  }
  ngOnInit() {
  }

  newYear = {};
  myDate: String = new Date().toISOString();
  years = [{ name: this.myDate, description: "coloque uma bela descrição aqui" }];
  reverseYears = this.years;

  addYear = function(newYear){
    newYear = {name: "", description: ""};
    this.years.push(newYear);
    this.reverseYears = this.years.slice().reverse();
    this.newYear = {};
    var sizeYears = this.reverseYears.length;

    var tid = setInterval(function(){
      clickById();
    },400);

    function clickById(){
      if(document.getElementsByTagName("ion-datetime")[0] != null){
        if(document.getElementById("data-year-selection-") != null){
          document.getElementsByTagName("ion-datetime")[0].disabled = false;
          document.getElementById("data-year-selection-").click();
          return;
        }
        if(document.getElementById("data-year-selection-") == null){
          clearInterval(tid);
          ableAll();
        }
      }
      function ableAll(){
        for(var i = 0; i < sizeYears; i++){
          if(document.getElementsByTagName("ion-datetime")[i] != undefined){
            document.getElementsByTagName("ion-datetime")[i].disabled = false;
            document.getElementsByTagName("ion-button")[i].disabled = false;
          }
        }
      }
    }
  };
}
