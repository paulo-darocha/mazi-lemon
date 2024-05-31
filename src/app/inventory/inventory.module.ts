import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'

@NgModule({
   declarations: [],
   imports: [CommonModule, InventoryRoutingModule, InventoryComponent],
})
export class InventoryModule {}
