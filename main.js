// let m = document.querySelector('.main');
// const msrc = document.querySelector('.main').src;
// let img = document.querySelectorAll('.c');
// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener('mouseover', function() {
//         m.src = img[i].src;
//     })
//     img[i].addEventListener('mouseout', function() {
//         m.src = msrc;
//     })

// }

function move(div) {
    document.onmousedown = function() { return false }
    div.style.cursor = 'move';
    document.onmousemove = function(e) {
        x = e.pageX;
        y = e.pageY;
        left1 = div.offsetLeft;
        top1 = div.offsetTop;
        left1 = x - left1;
        top1 = y - top1;
        document.onmousemove = function(e) {
            x = e.pageX;
            y = e.pageY;
            div.style.top = y - top1 + 'px';
            div.style.left = x - left1 + 'px';
        }
    }
    document.onmouseup = function() {
        div.style.cursor = 'auto';
        document.onmousedown = function() {}
        document.onmousemove = function() {}
    }
}


//     div.style.left = e.pageX + "px";
//     div.style.top = e.pageY + "px";
// };
// function move() {
//     document.addEventListener('onMouseUp', listener);
// }

// function stop() {
//     document.removeEventListener('MouseDown', listener);
//