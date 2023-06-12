import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [NavbarModule, FooterModule];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ...components, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
