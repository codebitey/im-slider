const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-items');

class Carousel {

    constructor(container, items,  controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-items-1');
            el.classList.remove('gallery-items-2');
            el.classList.remove('gallery-items-3');
            el.classList.remove('gallery-items-4');
            el.classList.remove('gallery-items-5');
        });

        this.carouselArray.slice(0,5).forEach((el , i) => {
            el.classList.add(`gallery-items-${i + 1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChiled(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...gelleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListner('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const  exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();