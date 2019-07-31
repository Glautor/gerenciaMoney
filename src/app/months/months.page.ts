import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-months',
  templateUrl: './months.page.html',
  styleUrls: ['./months.page.scss'],
})
export class MonthsPage implements OnInit {

  
  ionViewDidLoad() {
  }
  ngOnInit() {
  }
  constructor(private router: Router,private route: ActivatedRoute, public navCtrl: NavController){
  }
  pushPage(page, param){
    if(document.getElementById("data-month-selection-") == null){
      this.router.navigate([`/${page}`, param]);
    }
  }
  myDate: String = new Date().toISOString();
  months = [];
  reverseMonths = this.months;
  date: any;
  navParams: NavParams;
  sub = this.route.params.subscribe(params => {
    if (this.months[0] == null){
      this.months.push({name: params['name'], description: "escreva sua descrição aqui"});
    } else {
      var receivedData = new Date(params['name']);
      for (var i = 0; i < this.months.length; i++){
        var existentDate = new Date(this.months[i].name);
        if (receivedData.getMonth() != existentDate.getMonth()){
          this.months.push({name: params['name'], description: "escreva sua descrição aqui"});
        }
      }
    }
  });
  addMonth = function(newMonth){
    newMonth = {name: "", description: ""};
    this.months.push(newMonth);
    this.reverseMonths = this.months.slice().reverse();
    this.newMonth = {};
    var sizeMonths = this.reverseMonths.length;

    var tid = setInterval(function(){
      clickById();
    },400);

    function clickById(){
      if(document.getElementsByTagName("ion-datetime")[0] != null){
        if(document.getElementById("data-month-selection-") != null){
          document.getElementsByTagName("ion-datetime")[0].disabled = false;
          document.getElementById("data-month-selection-").click();
          return;
        }
        if(document.getElementById("data-month-selection-") == null){
          clearInterval(tid);
          ableAll();
        }
      }
      function ableAll(){
        for(var i = 0; i < sizeMonths; i++){
          if(document.getElementsByTagName("ion-datetime")[i] != undefined){
            document.getElementsByTagName("ion-datetime")[i].disabled = false;
            document.getElementsByTagName("ion-button")[i].disabled = false;
          }
        }
      }
    }
  };
}
