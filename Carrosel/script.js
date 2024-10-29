let indiceAtual = 0;
const slides =document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalo = 10000; //5 segundos

function mostrarSlide(indice){
const carroselSlides = document.querySelector('.carrosel');
carroselSlides.style.transform = `translateX(-${indice *100}%)`
}

function proximo(){
    indiceAtual = (indiceAtual + 1) % totalSlides;
    mostrarSlide(indiceAtual);
}

function anterior(){
    indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides;
    mostrarSlide(indiceAtual);
}

function avancar(){
    indiceAtual = (indiceAtual + 1) % totalSlides;
    mostrarSlide(indiceAtual);
}

setInterval(avancar, intervalo);

function um(){
    indiceAtual = 0;
    mostrarSlide(indiceAtual)
}
function dois(){
    indiceAtual = 1;
    mostrarSlide(indiceAtual)
}
function tres(){
    indiceAtual = 2;
    mostrarSlide(indiceAtual)
}