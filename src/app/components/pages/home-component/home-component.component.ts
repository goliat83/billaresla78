import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaService: Meta
    ) {}

    ngOnInit() {
        this.titleService.setTitle('Billares la 78 | Club de Billar Premium en Medellín');
        this.metaService.updateTag({
            name: 'description',
            content: 'El mejor club de billar en Medellín. Mesas profesionales, torneos, bar, clases y eventos privados. Calle 44 77-58 Av San Juan.'
        });
    }

}
