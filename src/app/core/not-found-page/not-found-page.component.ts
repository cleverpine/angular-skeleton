import { Component } from '@angular/core';

import { ROUTES } from '../../constants/ROUTES';

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  routes = ROUTES;
}
