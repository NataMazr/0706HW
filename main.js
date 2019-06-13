let circ = document.querySelector('.circ');
circ.addEventListener('mousedown', function() {
    circ.addEventListener('mousemove', ev)
})
let ev = function(e) {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y);
    if (x > 711) {
        x = 711;
    } else if (x < 112) {
        x = 112;
    } else {
        x = x;
    }
    if (y > 460) {
        y = 460;
    } else if (y < 112) {
        y = 112;
    } else {
        y = y;
    }
    circ.style.top = y - 100 + 'px';
    circ.style.left = x - 100 + 'px';
};
circ.addEventListener('mouseup', function() {
    circ.removeEventListener('mousemove', ev)
})