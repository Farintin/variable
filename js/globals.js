
document.querySelectorAll('.icon').forEach(function(elem) {
    elem.onmouseover = function() {
        document.querySelector('*').style.userSelect = 'none'
    };
    elem.onmouseout = function() {
        document.querySelector('*').style.userSelect = 'auto'
    }
});



window.scrollOnClick = function scrollOnClick(btnQ, scrollableObjQ, direction, jumpBy, jump) {
    document.querySelector(btnQ).onclick = function () {
        let container = document.querySelector(scrollableObjQ);

        let directionLengthMap = {
            percentage: {
                up: container.offsetHeight/100 * -1,
                down: container.offsetHeight/100,
                left: container.offsetWidth/100 * -1,
                right: container.offsetWidth/100
            },
            fixed: {
                up: -1,
                down: 1,
                left: -1,
                right: 1
            }
        };

        jumpVector = directionLengthMap[jumpBy][direction];
        jumpAmount = jumpVector * jump;

        switch (direction) {
            case 'up':
                container.scrollBy(0, jumpAmount);
                break
            case 'down':
                container.scrollBy(0, jumpAmount);
                break
            case 'left':
                container.scrollBy(jumpAmount, 0);
                break
            case 'right':
                container.scrollBy(jumpAmount, 0);
                break
        }
    }
}