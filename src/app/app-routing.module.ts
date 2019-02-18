import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InboxComponent } from './components/inbox/inbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: InboxComponent},
  {path: 'my', component: DashboardComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'archive', component: InboxComponent},
  {path: 'telphone', component: InboxComponent},
  {path: 'agents', component: InboxComponent},
  {path: 'visitors', component: InboxComponent},
  {path: 'billing', component: InboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

