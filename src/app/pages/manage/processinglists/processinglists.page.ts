import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpDataService } from 'src/app/providers/http-data.service';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 's-processinglists',
  templateUrl: './processinglists.page.html',
  styleUrls: ['./processinglists.page.scss'],
})
export class ProcessinglistsPage implements OnInit {

  data: any;
  goodsList: any;
  distribution_status: any;
  orderList
  constructor(
    public navCtrl: NavController,
    public httpServ: HttpDataService,
  ) { }
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ngOnInit() {
  
    this.checkList()
   
  }
  checkList(){
    return new Promise((resolve,reject)=>{
      this.httpServ.machiningIndex().subscribe(res => {
        if (res.status == 1) {
          resolve(res)
          this.data = res.data;
          this.orderList = this.data.list;
        }
      })
    })
  }
  doRefresh(event) {
    this.checkList().then(() => {
      setTimeout(() => {
        event.target.complete();
      }, 500);
    })
  }
  loadData(event) {
    if (this.data && this.data.page < this.data.lastPage) {
      this.httpServ.machiningIndex({
        page: ++this.data.page,
        size: 20
      }, { showLoading: false }).subscribe(res => {
        this.infiniteScroll.complete();
        if (res.status == 1) {
          this.data = res.data;
          this.orderList = [...this.orderList, ...res.data.list];
        }
      })
    } else {
      this.infiniteScroll.disabled = true;
    }
  }

}















