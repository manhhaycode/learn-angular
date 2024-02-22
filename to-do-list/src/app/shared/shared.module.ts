import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './primeNg.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PrimeNgModule, FormsModule],
    exports: [CommonModule, PrimeNgModule, FormsModule],
    providers: [],
})
export class SharedModule {}
