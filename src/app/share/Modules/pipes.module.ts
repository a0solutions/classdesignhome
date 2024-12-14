import { NgModule } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StockPipe } from '../pipes/stock.pipe';
import { SpacesPipe } from '../pipes/spaces.pipe';
import { SpacesDeletePipe } from '../pipes/spacesDelete.pipe';
import { CategorySubstrPipe } from '../pipes/categorySubstr.pipe';
import { OnlyNumbersPipe } from '../pipes/only-numbers.pipe';

@NgModule({
  imports: [],
  declarations: [
    CapitalizePipe,
    StockPipe,
    SpacesPipe,
    SpacesDeletePipe,
    CategorySubstrPipe,
    OnlyNumbersPipe,
  ],
  providers: [],
  exports: [
    StockPipe,
    CapitalizePipe,
    SpacesPipe,
    SpacesDeletePipe,
    CategorySubstrPipe,
    OnlyNumbersPipe,
  ],
})
export class PipesModule {}
