import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.html'
})

export class ResetComponent implements OnInit {
    
    username: any = '';
    password: any = '';
    password1: any = '';

    constructor(private appService: AppService, private router: Router) {}
    ngOnInit(){}

    resetPassword() {
        this.appService.resetPassword(this.username, this.password).subscribe(res => {
            if(res !== null) {
                alert('Password Reset Successful. You may login using new password.');
                this.router.navigate(['/login']);
                return;
            }
            alert('Password Reset failed. Invalid username.');
        });
    }

}