import { NgModule } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { StockPipe } from '../../pipes/stock.pipe';
import { SpacesPipe } from '../../pipes/spaces.pipe';

@NgModule({
  imports: [],
  declarations: [CapitalizePipe, StockPipe, SpacesPipe],
  providers: [],
  exports: [StockPipe, CapitalizePipe, SpacesPipe],
})
export class PipesModule {}
