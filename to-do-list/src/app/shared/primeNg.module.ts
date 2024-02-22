import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [],
    imports: [ButtonModule, TableModule, InputTextModule, CardModule],
    exports: [ButtonModule, TableModule, InputTextModule, CardModule],
})
export class PrimeNgModule {}
