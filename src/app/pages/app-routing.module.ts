import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../providers/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/manage',
    pathMatch: 'full',
  }, {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canLoad: [AuthGuard],
  }, {
    path: 'signin',
    loadChildren: './signin/signin.module#SigninPageModule',
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
  }, {
    path: 'goods',
    loadChildren: './goods/goods.module#GoodsPageModule',
  }, {
    path: 'manage',
    loadChildren: './manage/manage.module#ManagePageModule',
  }, {
    path: 'iframe-browser',
    loadChildren: './iframe-browser/iframe-browser.module#IframeBrowserPageModule',
  },
  { path: 'scan', loadChildren: './scan/scan.module#ScanPageModule' },
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundPageModule' },
  { path: 'processinglists', loadChildren: './manage/processinglists/processinglists.module#ProcessinglistsPageModule' },
  { path: 'refunddetailss', loadChildren: './manage/refunddetailss/refunddetailss.module#RefunddetailssPageModule' },
  { path: 'returnlists', loadChildren: './manage/returnlists/returnlists.module#ReturnlistsPageModule' },
  { path: 'detailsfinishings', loadChildren: './manage/detailsfinishings/detailsfinishings.module#DetailsfinishingsPageModule' },
  { path: '**', redirectTo: '/404' },

  // { path: 'refunddetailss', loadChildren: './manage/refunddetailss/refunddetailss.module#RefunddetailssPageModule' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
