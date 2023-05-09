import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FieldConfig } from './field-config';
import { navItems } from './navigation-items';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  navItems: FieldConfig[] = navItems;

  isShowingSideNav!: boolean;

  profileName: string | undefined;

  headerTitle: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userData?.subscribe((res) => {
      if (res) {
        this.profileName = `${res.given_name} ${res.family_name}`;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => { });
  }

  toggleSideNav(): void {
    this.isShowingSideNav = !this.isShowingSideNav;
  }

}
