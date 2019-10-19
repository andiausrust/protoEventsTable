import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsTableComponent} from './events-table/events-table.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
