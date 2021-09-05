if (document.querySelector('#heroSlider3')) {
    heroSlider3();
};
if (document.querySelector('#heroSlider3 .product-gallery')) {
    productSlider3()
};








function heroSlider3() {
    let slidesDom = document.querySelector('#heroSlider3 .slides main');

    let nextBtnElem = document.querySelector('#heroSlider3 .slides .slide-btn.next .icon');
    let prevBtnElem = document.querySelector('#heroSlider3 .slides .slide-btn.prev .icon');


    let slidesHtmlCollection = slidesDom.children;
    for (let i = 0; i < slidesHtmlCollection.length; i++) {
        slidesHtmlCollection[i].setAttribute('data-count', i + 1)
    };

    slidesHtmlCollection[0].classList.add('active');
    let activeSlideQ = '#heroSlider3 .slides main > .slide.active';
    
    let slidesTot, currentSlideCounterElem;
    if (document.querySelector('#heroSlider3 .slides-pag')) {
        let pagDom = document.querySelector('#heroSlider3 .slides-pag');

        let activeSlideElem = document.querySelector(activeSlideQ);
        slidesTot = slidesDom.childElementCount;

        if (slidesTot < 2) {
            pagDom.style.display = 'none';
            nextBtnElem.style.display = 'none';
            prevBtnElem.style.display = 'none';
        } else {
            let totalSlidesCounterElem = pagDom.querySelector('.counter .total');
            totalSlidesCounterElem.innerHTML = slidesTot;
            currentSlideCounterElem = pagDom.querySelector('.counter .current');
            currentSlideCounterElem.innerHTML = activeSlideElem.getAttribute('data-count');
        }
    };


    nextBtnElem.onclick = function() {
        let currentSlideElem = document.querySelector(activeSlideQ);
        currentSlideElem.classList.remove('active');

        if (currentSlideElem === slidesDom.lastElementChild) {
            slidesDom.firstElementChild.classList.add('active');

            if (document.querySelector('#heroSlider3 .slides-pag')) {
                currentSlideCounterElem.innerHTML = 1
            }
        } else {
            let nextSlideElem = currentSlideElem.nextElementSibling;
            nextSlideElem.classList.add('active');
            
            if (document.querySelector('#heroSlider3 .slides-pag')) {
                currentSlideCounterElem.innerHTML = nextSlideElem.getAttribute('data-count')
            }
        }
    };
    prevBtnElem.onclick = function() {
        let currentSlideElem = document.querySelector(activeSlideQ);
        currentSlideElem.classList.remove('active');

        if (currentSlideElem === slidesDom.firstElementChild) {
            slidesDom.lastElementChild.classList.add('active');
            
            if (document.querySelector('#heroSlider3 .slides-pag')) {
                currentSlideCounterElem.innerHTML = slidesTot
            }
        } else {
            let nextSlideElem = currentSlideElem.previousElementSibling;
            nextSlideElem.classList.add('active');
            
            if (document.querySelector('#heroSlider3 .slides-pag')) {
                currentSlideCounterElem.innerHTML = nextSlideElem.getAttribute('data-count')
            }
        }
    }
};

function productSlider3() {
    let slidesDom = document.querySelector('#heroSlider3 .product-gallery main');

    let nextBtnElem = document.querySelector('#heroSlider3 .product-gallery .pag .btn.next');
    let prevBtnElem = document.querySelector('#heroSlider3 .product-gallery .pag .btn.prev');


    let slidesHtmlCollection = slidesDom.children;
    for (let i = 0; i < slidesHtmlCollection.length; i++) {
        slidesHtmlCollection[i].setAttribute('data-count', i + 1)
    };

    slidesHtmlCollection[0].classList.add('active');
    let activeSlideQ = '#heroSlider3 .product-gallery main > .media.active';
    
    let slidesTot, currentSlideCounterElem;
    if (document.querySelector('#heroSlider3 .product-gallery .pag')) {
        let pagDom = document.querySelector('#heroSlider3 .product-gallery .pag');

        let activeSlideElem = document.querySelector(activeSlideQ);
        slidesTot = slidesDom.childElementCount;

        if (slidesTot < 2) {
            pagDom.style.display = 'none';
            nextBtnElem.style.display = 'none';
            prevBtnElem.style.display = 'none';
        } else {
            let totalSlidesCounterElem = pagDom.querySelector('.counter .total');
            totalSlidesCounterElem.innerHTML = slidesTot;
            currentSlideCounterElem = pagDom.querySelector('.counter .current');
            currentSlideCounterElem.innerHTML = activeSlideElem.getAttribute('data-count');
        }
    };


    nextBtnElem.onclick = function() {
        let currentSlideElem = document.querySelector(activeSlideQ);
        currentSlideElem.classList.remove('active');

        if (currentSlideElem === slidesDom.lastElementChild) {
            slidesDom.firstElementChild.classList.add('active');

            if (document.querySelector('#heroSlider3 .product-gallery .pag')) {
                currentSlideCounterElem.innerHTML = 1
            }
        } else {
            let nextSlideElem = currentSlideElem.nextElementSibling;
            nextSlideElem.classList.add('active');
            
            if (document.querySelector('#heroSlider3 .product-gallery .pag')) {
                currentSlideCounterElem.innerHTML = nextSlideElem.getAttribute('data-count')
            }
        }
    };
    prevBtnElem.onclick = function() {
        let currentSlideElem = document.querySelector(activeSlideQ);
        currentSlideElem.classList.remove('active');

        if (currentSlideElem === slidesDom.firstElementChild) {
            slidesDom.lastElementChild.classList.add('active');
            
            if (document.querySelector('#heroSlider3 .product-gallery .pag')) {
                currentSlideCounterElem.innerHTML = slidesTot
            }
        } else {
            let nextSlideElem = currentSlideElem.previousElementSibling;
            nextSlideElem.classList.add('active');
            
            if (document.querySelector('#heroSlider3 .product-gallery .pag')) {
                currentSlideCounterElem.innerHTML = nextSlideElem.getAttribute('data-count')
            }
        }
    }
};