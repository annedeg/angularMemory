import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CardSettingsComponent } from './card-settings/card-settings.component';
import { CardColorSettingsComponent } from './card-color-settings/card-color-settings.component';



@NgModule({
  declarations: [LeaderboardComponent, CardSettingsComponent, CardColorSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class GameSettingsModule { }
