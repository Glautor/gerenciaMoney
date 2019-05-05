import { Component } from '@angular/core';
import { SobrePage } from "../sobre/sobre";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teste = "";
  newYear = {};
  newMonth = {};
  newWeek = {};
  now = new Date;
  year = this.now.getFullYear() + 1;
  years = [{ name: this.year, description: "coloque uma bela descrição aqui" }];
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

  selectYearCard = function(){
    console.log("teste");
  }

  adicionarMes = function(novoMes){
    this.months.push(novoMes);
    this.novoMes = {};
  };
}