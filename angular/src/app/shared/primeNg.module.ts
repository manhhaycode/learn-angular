import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [],
    imports: [ButtonModule, TableModule],
    exports: [ButtonModule, TableModule],
})
export class PrimeNgModule {}
