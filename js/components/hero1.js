const template = document.createElement('template');
template.innerHTML = `
<style>
    #heroSlider1 {
        font-family: 'Playfair_Display', serif;
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
    }

    #heroSlider1 .overlay {
        display: flex;
        flex-direction: column;
    }

    #heroSlider1 .row {
        flex-grow: 1;
    }

    #heroSlider1 .slides {
        display: flex;
        height: 100%;
    }

    #heroSlider1 .slides .slide-btn {
        height: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #heroSlider1 .slides .slide-btn .icon {
        width: 27px;
        padding: 48px;
    }



    #heroSlider1 main {
        height: 100%;
    }

    #heroSlider1 main .slide {
        display: none;
    }
    #heroSlider1 main .slide.active {
        display: grid;
        grid-template-columns: var(--slide-cols-partition);
        grid-gap: 0 2.7%;
        height: 100%;
    }
</style>
<section id="heroSlider1" class="slider position-relative" style="background-image: url('img/products/midi_floral_dress.jpg');">
    
    <div class="overlay" style="background-color: rgba(0,0,0,0.3);">

        <div class="row">
            <nav id="nav" style="--fg-color: #fff;">
                <div class="wrapper">
        
                    <div class="col">
            
                        <div class="icon menu-hamburger">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                                <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)" >
                                    <rect x="35.75" y="15.64" rx="0" ry="0" width="54.25" height="4" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
                                    <rect x="0" y="15.64" rx="0" ry="0" width="17.25" height="4" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
                                    <rect x="0" y="43" rx="0" ry="0" width="90" height="4" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
                                    <rect x="0" y="70.36" rx="0" ry="0" width="90" height="4" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
                                </g>
                            </svg>
                        </div>
            
                    </div>
            
                    <div class="col justify-content-center">
            
                        <div class="brand text">
                            <h1>hermosa</h1>
                        </div>
            
                    </div>
            
                    <div class="col justify-content-end">
            
                        <i class="icon search">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                                <desc>Created with Fabric.js 1.7.22</desc>
                                <defs>
                                </defs>
                                <g id="icon" style=" stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)" >
                                    <path d="M 88.535 81.465 L 65.846 58.776 c 10.891 -14.351 9.801 -34.954 -3.288 -48.043 C 55.638 3.812 46.435 0 36.646 0 c -9.789 0 -18.992 3.812 -25.913 10.733 S 0 26.857 0 36.646 c 0 9.788 3.812 18.991 10.733 25.912 c 7.144 7.145 16.528 10.717 25.913 10.717 c 7.808 0 15.612 -2.482 22.13 -7.429 l 22.689 22.689 C 82.44 89.512 83.721 90 85 90 s 2.56 -0.488 3.535 -1.465 C 90.488 86.583 90.488 83.417 88.535 81.465 z M 17.805 55.488 C 12.771 50.455 10 43.764 10 36.646 c 0 -7.118 2.771 -13.809 7.805 -18.842 C 22.837 12.771 29.529 10 36.646 10 c 7.117 0 13.809 2.771 18.842 7.805 c 10.389 10.389 10.389 27.294 0 37.684 C 45.098 65.878 28.193 65.876 17.805 55.488 z" style=" stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                </g>
                            </svg>
                        </i>
                        <i class="icon cart">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 350 350" ml:space="preserve">
                                <desc>Created with Fabric.js 1.7.22</desc>
                                <defs>
                                </defs>
                                <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 8.055555555555571) scale(3.89 3.89)" >
                                    <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 H 45 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 41.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style="stroke-width: 1px; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    <circle cx="28.88" cy="74.33" r="6.16" style="stroke-width: 2px; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                    <circle cx="74.59" cy="74.33" r="6.16" style="stroke-width: 2px; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                </g>
                            </svg>
                        </i>
            
                    </div>
        
                </div>
            </nav>
        </div>

        <div class="row">
            <div class="slides">
                <div class="slide-btn prev">
                    <i class="icon arrow arrow-back">
                        <svg version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                            <desc>Created with Fabric.js 1.7.22</desc>
                            <defs>
                            </defs>
                            <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(16.25555555555556 16.25555555555556) scale(3.49 3.49)" >
                                <path d="M 45.07 90 c 0.384 0 0.769 -0.146 1.062 -0.439 c 0.587 -0.586 0.587 -1.535 0 -2.121 L 3.627 45 L 46.133 2.561 c 0.587 -0.585 0.587 -1.536 0 -2.121 c -0.587 -0.586 -1.538 -0.586 -2.124 0 L 0.44 43.939 c -0.587 0.585 -0.587 1.536 0 2.121 l 43.568 43.5 C 44.302 89.854 44.686 90 45.07 90 z" style=" stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 1.502 46.5 h 86.995 C 89.328 46.5 90 45.829 90 45 s -0.672 -1.5 -1.502 -1.5 H 1.502 C 0.673 43.5 0 44.171 0 45 S 0.673 46.5 1.502 46.5 z" style=" stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            </g>
                        </svg>
                    </i>
                </div>
    
                <main>
    
                    <div class="slide active">
    
                        <div class="col">
    
                            <div class="btn btn1 mt-3">
                                <p>shop now</p>
                            </div>
    
                        </div>
    
                        <div class="col">
    
                            <div class="image" style="background-image: url('img/carousel-1-2.jpg');">
                                <div class="overlay"></div>
                            </div>
    
                        </div>
    
                    </div>
    
                </main>
                
                <div class="slide-btn next">
                    <i class="icon arrow arrow-forward">
                        <svg version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                            <desc>Created with Fabric.js 1.7.22</desc>
                            <defs>
                            </defs>
                            <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(16.25555555555556 16.25555555555556) scale(3.49 3.49)" >
                                <path d="M 44.93 90 c -0.384 0 -0.769 -0.146 -1.062 -0.439 c -0.587 -0.586 -0.587 -1.535 0 -2.121 L 86.373 45 L 43.867 2.561 c -0.587 -0.585 -0.587 -1.536 0 -2.121 c 0.587 -0.586 1.538 -0.586 2.124 0 l 43.568 43.5 c 0.587 0.585 0.587 1.536 0 2.121 l -43.568 43.5 C 45.698 89.854 45.314 90 44.93 90 z" style=" stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 88.498 46.5 H 1.502 C 0.672 46.5 0 45.829 0 45 s 0.672 -1.5 1.502 -1.5 h 86.995 C 89.327 43.5 90 44.171 90 45 S 89.327 46.5 88.498 46.5 z" style=" stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            </g>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
        
        <div class="pag1 slides-pag position-absolute pin-horizontal-center pin-bottom">
            <div class="counter">
            </div>
        </div>

    </div>
    
</section>
`;



class Hero1 extends HTMLElement {
    constructor () {
        super();

        this.attachShadow
    }
}