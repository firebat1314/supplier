import { Component, OnInit } from '@angular/core';
import { HttpDataService } from 'src/app/providers/http-data.service';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 's-detailsfinishings',
  templateUrl: './detailsfinishings.page.html',
  styleUrls: ['./detailsfinishings.page.scss'],
})
export class DetailsfinishingsPage implements OnInit {

  data:any;
  mid:any;
  returnState:any
  returnType:any
  constructor(
    public httpServ :HttpDataService,
    public route :ActivatedRoute,


  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mid=+params.get('mid')
   console.log(this.mid)

    });
  this.getData()
  }



  getData() {
    this.httpServ.machiningInfo({id:this.mid}).subscribe((res) => {
      if (res.status == 1) {
        this.data = res.data;
        console.log(this.data.sn)
        this.returnState = res.data.info.return_status
        console.log(this.returnState)
        console.log(res.data.info)
        this.returnType = res.data.info.return_type

        // this.returnType = res.repair_info.return_type
      }
    })
  }
}
