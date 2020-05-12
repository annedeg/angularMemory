import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [BoardComponent, TileComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class BoardModule { }
