var mouseY = null;
var mouseX = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}

document.querySelector('#divClick').addEventListener('click', (e) => {
    const elemento = document.createElement('span');
    elemento.className = 'circulo';

    elemento.style.left = mouseX - 10 + 'px'; 
    elemento.style.top  = mouseY - 10 + 'px'; 

    document.querySelector('#divClick').append(elemento);

    setTimeout(() => {
        elemento.remove();
    }, 900);
});