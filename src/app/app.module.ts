import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board/board.component'
import { CardComponent } from './board/card/card.component';
import { CardSettingsComponent } from './game-settings/card-settings/card-settings.component';
import { CardColorSettingsComponent } from './game-settings/card-color-settings/card-color-settings.component';
import { LeaderboardComponent } from './game-settings/leaderboard/leaderboard.component';
import { TimerComponent } from './game-info/timer/timer.component';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    CardSettingsComponent,
    CardColorSettingsComponent,
    LeaderboardComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
