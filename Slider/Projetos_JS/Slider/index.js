// buscar os elementos

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slide');

// configuração do autoplay
const auto = true;
// intervalo de transição
const intervalo = 5000;
// exibição do intervalo
let temporizador;

// eventos
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function nextSlide(){
    // localizando a classe atual
    const atual = document.querySelector('.atual');
    // remover a classe atual do elemento selecionado
    atual.classList.remove('atual');

    // verificar se existe um próximo elemento
    if (atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual');
    }else{
        slides[0].classList.add('atual');
    }
}

function prevSlide(){
     // localizando a classe atual
     const atual = document.querySelector('.atual');
     // remover a classe atual do elemento selecionado
     atual.classList.remove('atual');

     if (atual.previousElementSibling){
        atual.previousElementSibling.classList.add('atual');
     }else{
        slides[slides.length-1].classList.add('atual');
     }
}

// controle do autoplay
if (auto){
    // ativa a função nextSlide() a cada  tempo de intervalo
    temporizador =  setInterval(nextSlide, intervalo);
}