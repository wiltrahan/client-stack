import { CalendarHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './core/data.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientFormComponent } from './client-info/client-form/client-form.component';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ClientEditComponent } from './client-info/client-edit/client-edit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FooterComponent } from './navigation/footer/footer.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';


@NgModule({
  declarations: [
    AppComponent,
    ClientsTableComponent,
    ClientInfoComponent,
    ClientFormComponent,
    HeaderComponent,
    SidenavListComponent,
    ClientEditComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    CommonModule,
    AngularDateTimePickerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
