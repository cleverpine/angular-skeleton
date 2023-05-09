import { Component } from '@angular/core';
import { FieldConfig } from '../../core/layout/field-config';
import { navItems } from '../../core/layout/navigation-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tiles: FieldConfig[] = navItems;
}
