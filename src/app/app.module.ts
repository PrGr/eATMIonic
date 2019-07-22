import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CashWithdrawComponent } from './cash-withdraw/cash-withdraw.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, KeyboardComponent, MainMenuComponent, CashWithdrawComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
