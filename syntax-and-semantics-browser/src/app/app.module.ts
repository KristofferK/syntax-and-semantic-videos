import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChannelService } from './channel.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
