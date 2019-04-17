import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpDataService } from 'src/app/providers/http-data.service';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 's-returnlists',
  templateUrl: './returnlists.page.html',
  styleUrls: ['./returnlists.page.scss'],
})
export class ReturnlistsPage implements OnInit {

  data: any;
  orderList: any;

  constructor(
    public navCtrl: NavController,
    public httpServ: HttpDataService,
  ) { }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ngOnInit() {
    this.checkList()
  }


// 拉去列表
checkList(){
  return new Promise((resolve,reject)=>{
    this.httpServ.returnsIndex().subscribe(res => {
      if (res.status == 1) {
        resolve(res)
        this.data = res.data;
        this.orderList = this.data.list;
      }
    })
  })
}


// 刷新
  doRefresh(event) {
    this.checkList().then(() => {
      setTimeout(() => {
        event.target.complete();
      }, 500);
    })
  }
  // 分页
  loadData(event) {
    debugger
    if (this.data && this.data.page < this.data.lastPage) {
      this.httpServ.returnsIndex({
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




