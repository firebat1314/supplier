import { Component, OnInit } from '@angular/core';
import { HttpDataService } from 'src/app/providers/http-data.service';
import {ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 's-refunddetailss',
  templateUrl: './refunddetailss.page.html',
  styleUrls: ['./refunddetailss.page.scss'],
})
export class RefunddetailssPage implements OnInit {

  dataindex:any;
  orderId: any;
  returnState: any;
  returnType: any;
  data: any;
  constructor(
   public route:ActivatedRoute,
 
   public httpService: HttpDataService,
 ) {}

 ngOnInit() {  
   this.route.paramMap.subscribe(params => {
     this.orderId=+params.get('id')
     this.getData();

   });
    console.log(this.orderId)
 }
 ionViewDidLoad() {
   console.log('ionViewDidLoad ServiceOrderDetailsPage');
 }
 getData() {
   this.httpService.returnsInfo({id:this.orderId}).subscribe((res) => {
     if (res.status == 1) {
       this.data = res;
       this.returnState = res.data.info.return_status
       console.log(this.returnState)
       console.log(res.data.info)
       this.returnType = res.data.info.return_type

       // this.returnType = res.repair_info.return_type
     }
   })
 }

}



