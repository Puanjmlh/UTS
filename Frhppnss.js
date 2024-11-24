const galleryContainer = document.querySelector('.galeri-kontener');
const galleryControlsContainer = document.querySelector('.galeri-kontrol');
const galleryControls = ['previoues', 'next'];
const galleryItems = document.querySelectorAll('.galeri-produk');

class Carousel {

    constructor (container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach (el => {
            el.classlist.remove('galeri-produk-1');
            el.classlist.remove('galeri-produk-2');
            el.classlist.remove('galeri-produk-3');
            el.classlist.remove('galeri-produk-4');
            el.classlist.remove('galeri-produk-5');
            el.classlist.remove('galeri-produk-6');
            el.classlist.remove('galeri-produk-7');
        });

        this.carouselArray.slice (0, 5).forEach((el , i) => {
            el.classlist.add (`galeri-produk-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'galeri-kontrol-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls () {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement(`button`)).className = `galeri-kontrol-${control}`;
            document.querySelector(`.galeri-kontrol-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener(`click`, e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();