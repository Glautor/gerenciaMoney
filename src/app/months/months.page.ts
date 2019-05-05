import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-months',
  templateUrl: './months.page.html',
  styleUrls: ['./months.page.scss'],
})
export class MonthsPage implements OnInit {

  year: any;
  navParams: NavParams;
	constructor(private route: ActivatedRoute) {
  }
  sub = this.route.params.subscribe(params => {
    this.year = params['name'];
  });
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiCalPage');
    console.log(this.navParams.data);
  }
  ngOnInit() {
  }

}
