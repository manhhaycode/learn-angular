import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
@NgModule({
    declarations: [],
    imports: [ButtonModule, TableModule, ToggleButtonModule],
    exports: [ButtonModule, TableModule, ToggleButtonModule],
})
export class PrimeNgModule {}
