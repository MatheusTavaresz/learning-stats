
const users = ['Mathes', 'João', 'Maria', 'Pedro', 'José', 'Carlos', 'Lu'];

// Padrão usual de uso dos loops (for)
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log('[length alocado a cada iteração do loop]', user)
}

// Melhor prática do uso dos loops (for)
for(let i = 0, max = users.length; i < max; i++){
    const user = users[i];
    console.log('[length alocado apenas uma vez]', user)
}

/* 
Ao lidar com grandes volumes de dados, é uma prática recomendada atribuir o comprimento do array a uma variável fora do loop para otimizar o desempenho. 
Essa abordagem é mais eficiente, pois evita o recálculo desnecessário do comprimento a cada iteração.
O mesmo princípio se aplica a qualquer propriedade de objeto que seja acessada várias vezes em um loop. 
*/

// Loop for in

const user = {
    name: 'Mathes',
    age: 25,
    email: 'mathtg2@gmail.com'
}

if(typeof Object.prototype.clone === 'undefined'){
    Object.prototype.clone = function(){}
}

for (var i in user) {
    if(user.hasOwnProperty(i)){
        console.log(i, ":", user[i])
    }
}

for(var i in user){
    console.log(i, ":", user[i])
}