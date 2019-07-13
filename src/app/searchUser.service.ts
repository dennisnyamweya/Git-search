import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})

export class SearchUserService {

    private username: string;
    private clientid='';
    private clientsecret='';

    constructor(private http: HttpClient) {
        console.log('Service has already Started.....');
        this.username = 'dennisnyamweya';
     }

    getuser() {
        return this.http.get('https://api.github.com/users/' + this.username);
    }
    getUserRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=');
    }
    updateProfile(username: string) {
        this.username = username;
    }
}
