document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    info();
});

function info() {
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const $div = document.createElement("div");
    $div.innerHTML = `너비 : ${ww}, 높이 : ${wh}`;
    document.querySelector("body").appendChild($div);
}
