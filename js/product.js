let productThumbsDom = document.querySelectorAll('#sample #gallery .thumb');
let productDisplayImageElem = document.querySelector('#sample #display img');

productThumbsDom.forEach(function (obj) {
    obj.onclick = function () {
        productThumbsDom.forEach(function (obj) {
            obj.classList.remove('active')
        });
        obj.classList.add('active');
        
        productDisplayImageElem.setAttribute('src', obj.querySelector('img').getAttribute('data-main'))
    }
});



let sampleThumbsDomQ = '#sample #gallery .thumbs';
let sampleThumbsScrollBy = 'percentage';
let sampleThumbsScrollAmount = 25;
scrollOnClick('#sample #gallery .scroll-btn.down .icon', sampleThumbsDomQ, 'down', sampleThumbsScrollBy, sampleThumbsScrollAmount);
scrollOnClick('#sample #gallery .scroll-btn.up .icon', sampleThumbsDomQ, 'up', sampleThumbsScrollBy, sampleThumbsScrollAmount);





let infoDom =  document.querySelector('#sample #info .wrapper');
let detailsDom =  document.querySelector('#details');

let tabs = document.querySelectorAll('#details .tab');
let activeTab = document.querySelector('#details .tab.active');
renderDetails(activeTab);
tabs.forEach(function (tab) {
    tab.onclick = function () {
        tabs.forEach(function (elem) {
            elem.classList.remove('active')
        });
        tab.classList.add('active');
        renderDetails(tab)
    }
});



let detailsMenuNavDom = document.querySelector('#details .menu nav');
let detailsScrollBtnsDom = document.querySelector('#details .scroll-btns');

detailsMenuDomScrollableX();



infoDomScrollableY();
infoDom.onclick = infoDomScrollableY;
infoDom.onresize = infoDomScrollableY;



let detailsMenuNavDomQ = '#details .menu nav';
let detailsMenuScrollBy = 'percentage';
let detailsMenuScrollAmount = 33;
scrollOnClick('#details .scroll-btns .arrow-forward', detailsMenuNavDomQ, 'right', detailsMenuScrollBy, detailsMenuScrollAmount);
scrollOnClick('#details .scroll-btns .arrow-back', detailsMenuNavDomQ, 'left', detailsMenuScrollBy, detailsMenuScrollAmount);



let recommendedProductsDomQ = '.recommended .products';
let recommendedProductsScrollBy = 'percentage';
let recommendedProductsScrollAmount = 33;
scrollOnClick('.recommended .scroll-btns .arrow-forward', recommendedProductsDomQ, 'right', recommendedProductsScrollBy, recommendedProductsScrollAmount);
scrollOnClick('.recommended .scroll-btns .arrow-back', recommendedProductsDomQ, 'left', recommendedProductsScrollBy, recommendedProductsScrollAmount);




















function detailsMenuDomScrollableX () {
    /*console.log(detailsMenuNavDom.scrollWidth, detailsMenuNavDom.offsetWidth + 18);
    document.querySelectorAll('#details .menu nav .tab').forEach(function (elem) {
        console.log(elem.offsetWidth)
    });*/
    if (detailsMenuNavDom.scrollWidth > (detailsMenuNavDom.clientWidth + 18)) {
        detailsScrollBtnsDom.classList.add('enabled');
        detailsScrollBtnsDom.classList.remove('disabled')
    }
};
function infoDomScrollableY () {
    if (infoDom.scrollHeight > infoDom.clientHeight) {
        infoDom.classList.add('scrollable')
    } else {
        infoDom.classList.remove('scrollable')
    }
};
function renderDetails (tab) {
    let contentElems = document.querySelectorAll('#details .content');
    contentElems.forEach(function (contentElem) {
        contentElem.style.display = 'none';
        if (contentElem.getAttribute('data-tab') === tab.getAttribute('data-content')) {
            contentElem.style.display = ''
        }
    })
}