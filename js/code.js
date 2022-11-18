let users = [];

function addUsers(){
    let template = users.map(user => `<li>${user}</li>`).join('\n');
    document.querySelector('ul');
}

addUsers();

let btnAdd = document.getElementById('button1');
let input = document.querySelector('input');

btnAdd.addEventListener('click', () =>{
    users.push(input.value);
    input.value = '';
    addUsers();     
});

let btnAdd2 = document.getElementById('button2');
let input2 = document.querySelector('input');

btnAdd.addEventListener('click', () =>{
    users.push(input2.value);
    // input2.value = '';
    addUsers();
    console.log(users)     
});