import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../service/auth';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  private auth = inject(Auth);
  private router = inject(Router);

  deslogear() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
