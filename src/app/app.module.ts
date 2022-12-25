import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialExampleModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule,
    MaterialExampleModule,
    StoreModule.forRoot({},{}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent],
})
export class AppModule {}
