import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router'
import { FlexModule } from '@ngbracket/ngx-layout/flex'

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [FlexModule, MatButtonModule, RouterLink],
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss',
})
export class HomeComponent {}
