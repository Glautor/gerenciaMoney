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
    this.router.navigate([`/${page}`, param]);
  }
  ngOnInit() {
  }

  teste = "";
  newYear = {};
  newMonth = {};
  newWeek = {};
  myDate: String = new Date().toISOString();
  years = [{ name: this.myDate, description: "coloque uma bela descrição aqui" }];
  reverseYears = this.years;
  months = [{ name:'Janeiro', value:1},
           { name:'Fevereiro', value:2}];

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
      for(var i = 0; i < sizeYears; i++){
        if(document.getElementsByTagName("ion-datetime")[i] != null){
          if(document.getElementsByTagName("ion-datetime")[i].getAttribute("id") != "data-selection-"){
            document.getElementsByTagName("ion-datetime")[i].disabled = true;
          } else {
            document.getElementsByTagName("ion-datetime")[i].click();
          }
        }
      }
      ableAll();
      function ableAll(){
        for(var i = 0; i < sizeYears; i++){
          document.getElementsByTagName("ion-datetime")[i].disabled = false;
        }
      }
    }
  };

  adicionarMes = function(novoMes){
    this.months.push(novoMes);
    this.novoMes = {};
  };
}
