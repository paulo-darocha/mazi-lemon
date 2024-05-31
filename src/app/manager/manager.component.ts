import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { FlexModule } from '@ngbracket/ngx-layout'

@Component({
   selector: 'app-manager',
   standalone: true,
   imports: [
      FlexModule,
      MatToolbarModule,
      MatButtonModule,
      RouterLink,
      RouterLinkActive,
      MatTooltipModule,
      MatIconModule,
      RouterOutlet,
   ],
   templateUrl: './manager.component.html',
   styleUrl: './manager.component.scss',
})
export class ManagerComponent {}
