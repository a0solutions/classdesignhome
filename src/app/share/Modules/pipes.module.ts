import { NgModule } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StockPipe } from '../pipes/stock.pipe';
import { SpacesPipe } from '../pipes/spaces.pipe';
import { SpacesDeletePipe } from '../pipes/spacesDelete.pipe';

@NgModule({
  imports: [],
  declarations: [CapitalizePipe, StockPipe, SpacesPipe, SpacesDeletePipe],
  providers: [],
  exports: [StockPipe, CapitalizePipe, SpacesPipe, SpacesDeletePipe],
})
export class PipesModule {}
