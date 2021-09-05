let scrollContainerQuery = '#blog main .container';
let scrollBy = 'percentage';
let scrollAmount = 100;
scrollOnClick('#blog .scroll-btns .arrow-forward', scrollContainerQuery, 'right', scrollBy, scrollAmount);
scrollOnClick('#blog .scroll-btns .arrow-back', scrollContainerQuery, 'left', scrollBy, scrollAmount);