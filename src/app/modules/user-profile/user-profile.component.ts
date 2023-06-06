import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'mi-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private authService: AuthService) { }

  userInfo: any;

  ngOnInit(): void {
    this.authService.userData?.subscribe((res) => {
      this.userInfo = res;
    });
  }
}
