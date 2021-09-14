'use strict';

const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input= document. querySelector('.footer__text');
const addBtn = document.querySelector('.footer__btn');


form.addEventListener('submit', event=>{
    event.preventDefault();
    onAdd();
    
});

function onAdd(){
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block:'center'});
    input.value='';
    input.focus();
}
let id = 0;
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.setAttribute('data-id',id); // 구분선 포함한 한 줄을 지워야해서
    itemRow.innerHTML=`
        <div class="item" >
            <span class="item__name">${text}</span>
            <button class="item__del" >
                <i class="fas fa-trash" data-id=${id}></i>
            </button>
        </div>
        <div class="divider"></div>
    `;
    id++;
    
    return itemRow;
}

    // const item = document.createElement('div');
    // item.setAttribute('class','item');

    // const span = document.createElement('span');
    // span.setAttribute('class','item__name');
    // span.innerText= text;

    // const divider = document.createElement('div');
    // divider.setAttribute('class','divider');

    // const delBtn = document.createElement('button');
    // delBtn.setAttribute('class','item__del');
    // delBtn.innerHTML=`<i class="fas fa-trash"></i>`;

    // delBtn.addEventListener('click',()=>{
    //     items.removeChild(itemRow);
    // });

    // item.appendChild(span);
    // item.appendChild(delBtn);

    // itemRow.appendChild(item);
    // itemRow.appendChild(divider);



// addBtn.addEventListener('click', ()=>{
//     onAdd();
// });

// input.addEventListener('keypress', event=>{
//     if(event.keyCode === 13){
//         return onAdd();
//     }
// });

items.addEventListener('click', event=>{
    const id = event.target.dataset.id;
    if(id){
    // event.target.nodeName === 'I'보다 낫다. 
    // source에서 dataset.id:'0' 출력
    const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDelete.remove();
    };
    

});