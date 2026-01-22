import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    isOpen: boolean = false;
    private intervalId: any;

    heroSlides = [
        { image: 'assets/images/banners/hero-billar.jpg', alt: 'Billares la 78' },
        { image: 'assets/images/banners/florian-ceprika-DObE_YU6oks-unsplash.jpg', alt: 'Mesa de billar profesional' },
        { image: 'assets/images/banners/billares-para-ir-con-amigos-en-la-cdmx.webp', alt: 'Ambiente del club' },
        { image: 'assets/images/banners/122146109_770271420492043_1341486190801944675_n.jpg', alt: 'Club de billar' }
    ];

    heroCarouselOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        items: 1,
        dots: true,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000
    };

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

        // Verificar estado inicial
        this.checkOpenStatus();

        // Actualizar cada minuto
        this.intervalId = setInterval(() => {
            this.checkOpenStatus();
        }, 60000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    checkOpenStatus() {
        const now = new Date();
        const hour = now.getHours();
        // Horario: 8:00 AM (8) - 10:00 PM (22)
        this.isOpen = hour >= 8 && hour < 22;
    }
}
