import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EventsTableComponent} from './events-table/events-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatSidenavModule,
  MatSortModule, MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EventsTableComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
