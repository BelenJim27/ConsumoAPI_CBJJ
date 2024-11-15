// app.component.ts
import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent], //importar el componente de UserListComponent
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Consumo API CBJJ';
}
