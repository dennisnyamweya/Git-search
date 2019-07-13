import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})

export class SearchUserService {

    private username: string;

    constructor(private http: HttpClient) {
        console.log('Service Started.....');
        this.username = '';
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
