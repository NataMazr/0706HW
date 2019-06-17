function random() {
    setTimeout(function() {
        let r = Math.round(Math.random() * 100);
        console.log(r);
    }, 1000);
}

function callback(c) {
    c();
}
callback(random);