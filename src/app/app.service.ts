import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    user: any;
    baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    loginUser(username: string, password: string) {
        this.user = {
            strategy: 'local',
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/user/login', this.user);
    }
    
    resetPassword(username: string, password: string) {
        this.user = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/user/reset', this.user);
    }
}