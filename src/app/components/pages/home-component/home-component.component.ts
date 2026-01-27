import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {

    isOpen: boolean = false;

    heroSlides = [
        { image: 'assets/images/mesas/mesa-20.jpg', alt: 'Billares la 78' },
        { image: 'assets/images/mesas/mesa-16.jpg', alt: 'Mesa de billar profesional' },
        { image: 'assets/images/mesas/mesa-13.jpg', alt: 'Ambiente del club' },
        { image: 'assets/images/mesas/mesa-09.jpg', alt: 'Club de billar' }
    ];

    // Galería - fotos visibles en la sección
    galleryPhotos = [
        { image: 'assets/images/mesas/mesa-01.jpg', alt: 'Mesa de billar 1' },
        { image: 'assets/images/mesas/mesa-02.jpg', alt: 'Mesa de billar 2' },
        { image: 'assets/images/mesas/mesa-03.jpg', alt: 'Mesa de billar 3' },
        { image: 'assets/images/mesas/mesa-04.jpg', alt: 'Mesa de billar 4' },
        { image: 'assets/images/mesas/mesa-05.jpg', alt: 'Mesa de billar 5' },
        { image: 'assets/images/mesas/mesa-06.jpg', alt: 'Mesa de billar 6' },
        { image: 'assets/images/mesas/mesa-07.jpg', alt: 'Mesa de billar 7' },
        { image: 'assets/images/mesas/mesa-08.jpg', alt: 'Mesa de billar 8' },
    ];

    // Todas las fotos para el modal
    allPhotos = [
        { image: 'assets/images/mesas/mesa-01.jpg', alt: 'Mesa de billar 1' },
        { image: 'assets/images/mesas/mesa-02.jpg', alt: 'Mesa de billar 2' },
        { image: 'assets/images/mesas/mesa-03.jpg', alt: 'Mesa de billar 3' },
        { image: 'assets/images/mesas/mesa-04.jpg', alt: 'Mesa de billar 4' },
        { image: 'assets/images/mesas/mesa-05.jpg', alt: 'Mesa de billar 5' },
        { image: 'assets/images/mesas/mesa-06.jpg', alt: 'Mesa de billar 6' },
        { image: 'assets/images/mesas/mesa-07.jpg', alt: 'Mesa de billar 7' },
        { image: 'assets/images/mesas/mesa-08.jpg', alt: 'Mesa de billar 8' },
        { image: 'assets/images/mesas/mesa-09.jpg', alt: 'Mesa de billar 9' },
        { image: 'assets/images/mesas/mesa-10.jpg', alt: 'Mesa de billar 10' },
        { image: 'assets/images/mesas/mesa-11.jpg', alt: 'Mesa de billar 11' },
        { image: 'assets/images/mesas/mesa-12.jpg', alt: 'Mesa de billar 12' },
        { image: 'assets/images/mesas/mesa-13.jpg', alt: 'Mesa de billar 13' },
        { image: 'assets/images/mesas/mesa-14.jpg', alt: 'Mesa de billar 14' },
        { image: 'assets/images/mesas/mesa-15.jpg', alt: 'Mesa de billar 15' },
        { image: 'assets/images/mesas/mesa-16.jpg', alt: 'Mesa de billar 16' },
        { image: 'assets/images/mesas/mesa-17.jpg', alt: 'Mesa de billar 17' },
        { image: 'assets/images/mesas/mesa-18.jpg', alt: 'Mesa de billar 18' },
        { image: 'assets/images/mesas/mesa-19.jpg', alt: 'Mesa de billar 19' },
        { image: 'assets/images/mesas/mesa-20.jpg', alt: 'Mesa de billar 20' },
    ];

    // Modal
    showModal: boolean = false;
    currentPhotoIndex: number = 0;

    openModal(index: number) {
        this.currentPhotoIndex = index;
        this.showModal = true;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.showModal = false;
        document.body.style.overflow = '';
    }

    prevPhoto() {
        this.currentPhotoIndex = this.currentPhotoIndex === 0
            ? this.allPhotos.length - 1
            : this.currentPhotoIndex - 1;
    }

    nextPhoto() {
        this.currentPhotoIndex = this.currentPhotoIndex === this.allPhotos.length - 1
            ? 0
            : this.currentPhotoIndex + 1;
    }

    openFullGallery() {
        this.currentPhotoIndex = 0;
        this.showModal = true;
        document.body.style.overflow = 'hidden';
    }

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

        this.checkOpenStatus();
    }

    checkOpenStatus() {
        const now = new Date();
        const hour = now.getHours();
        // Horario: 8:00 AM (8) - 10:00 PM (22)
        this.isOpen = hour >= 8 && hour < 22;
    }
}
