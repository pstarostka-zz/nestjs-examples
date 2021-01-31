import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DumbComponentComponent } from './components/dumb-component/dumb-component.component';
import { SmartContainerComponent } from './containers/smart-container/smart-container.component';

@NgModule({
  declarations: [AppComponent, SmartContainerComponent, DumbComponentComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// snapshots
// module
// generating invoices
// module(s)
// managing users
// module

// eager loaded
//app module
// shared module
// auth module
// lazy loaded
// feature modules (dashboard, users, invoice)
