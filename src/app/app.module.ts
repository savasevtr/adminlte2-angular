import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/layouts/main-header/main-header.component';
import { MainSidebarComponent } from './components/layouts/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './components/layouts/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './components/layouts/main-footer/main-footer.component';
import { ControlSidebarComponent } from './components/layouts/control-sidebar/control-sidebar.component';
import { ContentHeaderComponent } from './components/layouts/partials/content-header/content-header.component';
import { ContentComponent } from './components/layouts/partials/content/content.component';
import { NavbarComponent } from './components/layouts/partials/navbar/navbar.component';
import { LogoComponent } from './components/layouts/partials/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    ContentHeaderComponent,
    ContentComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
