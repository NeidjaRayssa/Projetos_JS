//conexão com elementos HTML
//encapsulando os elementos em uma variável

//filtro de pesquisa
const filter = document.getElementById('filter');
//formulário para adicionar item
const form = document.getElementById('addForm');
//lista para receber novos  itens adicionados
const list = document.getElementById('items')

filter.addEventListener('keyup', filtrarItem);
 
form.addEventListener('submit', addItem);

list.addEventListener('click', removeItem);

function filtrarItem(evento){
    // recebendo valores digitados
    let txt = evento.target.value.toLowerCase(); // converte para minúsculo
    // buscar todos os itens(li)
    let itens = document.getElementsByTagName('li');

    // converter para um Array o objeto itens
    Array.from(itens).forEach( function (item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(txt) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
};

// função para adicionar um novo item
function addItem(evento){
    evento.preventDefault();
    // 1- criar li
   // 2- atribuir classes
   // 3- inserir valor
   // 4- criar btn e colocar classe
   // 5- inserir texto 'x'

   // receber o valor do campo input
   const textoItem = document.getElementById('item').value;

   if (textoItem != '') {
   const li = document.createElement('li');
   li.className = 'list-group-item';

   // inserindo texto no li
   li.appendChild(document.createTextNode(textoItem));

   // criar elemento button
   const btn = document.createElement('button');

   // atribui classes
   btn.className = 'btn btn-danger btn-sm float-end delete';
   btn.appendChild(document.createTextNode('X'));

   // unindo botão ao li
   li.appendChild(btn);

   // adicionar o li à lista
   list.appendChild(li);
   // resetar o formulário
   form.reset();

  }else{
    alert('digite alguma coisa!');
  }
};
function removeItem(evento){
    if(evento.target.classList.contains('delete')){
        // selecionando o pai do elemento clicado
        let li = evento.target.parentElement;
        list.removeChild(li); // remove o elemento da lista
    };
};