import { Component } from '@angular/core'
import { FlexModule } from '@ngbracket/ngx-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterLink, RouterOutlet } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'
import { MatTooltipModule } from '@angular/material/tooltip'

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [
      FlexModule,
      RouterLink,
      RouterOutlet,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatTooltipModule,
   ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent {
   constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
         'lemon',
         sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
      )
   }
}
