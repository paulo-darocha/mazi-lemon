import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
   selector: 'app-inventory',
   standalone: true,
   imports: [
      MatToolbarModule,
      MatButtonModule,
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
   ],
   templateUrl: './inventory.component.html',
   styleUrl: './inventory.component.scss',
})
export class InventoryComponent {}
