import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-calender1',
  templateUrl: './calender1.component.html',
  styleUrls: ['./calender1.component.css']
})
export class Calender1Component implements OnInit {

  constructor(private userAuthService: UserAuthService , private router: Router) { }

  ngOnInit(): void {

    
    if(this.userAuthService.getRole() !== 'ROOTADMIN'){
      this.router.navigate(['/home']);
    }
  }

}
