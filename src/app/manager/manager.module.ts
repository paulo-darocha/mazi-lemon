import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'

@NgModule({
   declarations: [],
   imports: [CommonModule, ManagerRoutingModule, ManagerComponent],
})
export class ManagerModule {}
