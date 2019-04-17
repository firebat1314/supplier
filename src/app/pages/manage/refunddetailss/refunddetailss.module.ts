import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared.module';

import { RefunddetailssPage } from './refunddetailss.page';
import { share } from 'rxjs/operators';

const routes: Routes = [
  {
    path: '',
    component: RefunddetailssPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [RefunddetailssPage]
})
export class RefunddetailssPageModule {}
