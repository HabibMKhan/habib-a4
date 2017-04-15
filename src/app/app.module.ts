import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PlacesComponent } from './places/places.component';
import { ExercisesComponent } from './exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    PlacesComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		RouterModule.forRoot([
			{
				path: 'exercises',
				component: ExercisesComponent
			},
			{
				path: 'places',
				component: PlacesComponent
			},
			{
				path: 'technologies',
				component: TechnologiesComponent
			}
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
