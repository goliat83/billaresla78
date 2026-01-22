import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

    title = 'Register - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    password: string = '';
    showPassword: boolean = false;
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

}