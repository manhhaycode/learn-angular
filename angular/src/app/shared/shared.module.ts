import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './primeNg.module';

@NgModule({
    imports: [CommonModule, PrimeNgModule],
    exports: [CommonModule, PrimeNgModule],
    providers: [],
})
export class SharedModule {}
