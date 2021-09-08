'use strict';

const items = document.querySelector('.items');
const input= document. querySelector('.footer__text');
const addBtn = document.querySelector('.footer__btn');

function onAdd(){
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    input.value='';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const span = document.createElement('span');
    span.setAttribute('class','item__name');
    span.innerText= text;

    const divider = document.createElement('div');
    divider.setAttribute('class','divider');

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','item__del');
    delBtn.innerHTML=`<i class="fas fa-trash"></i>`;

    delBtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    });

    item.appendChild(span);
    item.appendChild(delBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);
    return itemRow;
}

addBtn.addEventListener('click', ()=>{
    onAdd();
});

input.addEventListener('keypress', event=>{
    if(event.keyCode === 13){
        return onAdd();
    }
});