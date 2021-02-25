import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		StoreModule.forRoot({}, {
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
				strictStateSerializability: true,
				// Per abilitare questo, è necessario rendere tutte le azioni serializzabili.
				// In particolare AppError, nel caso di dei vari handleError negli Effects.
				// strictActionSerializability: true
			}
		}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode,
			name: 'Store DevTools'
		}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
