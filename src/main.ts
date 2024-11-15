import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserListComponent } from './app/components/user-list/user-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(UserListComponent, {
  providers: [provideHttpClient(), provideAnimationsAsync()],
}).catch((err) => console.error(err));
