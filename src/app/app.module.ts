import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { MATERIAL_CONFIGURATIONS } from './app.token';

const components = [NavbarModule, FooterModule];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        ...components,
    ],
    providers: [...MATERIAL_CONFIGURATIONS],
    bootstrap: [AppComponent],
})
export class AppModule {}
