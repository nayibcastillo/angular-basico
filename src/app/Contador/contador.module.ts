import {NgModule} from '@angular/core';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from '../heroes/heroes.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports:[
        BrowserModule,
        HeroesModule,
        contadorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class contadorModule{

}