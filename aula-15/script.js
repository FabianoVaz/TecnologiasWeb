// Variáveis
const pi = 3.14;
var nome = "Teste";
let idade = 20;

valor = 100;
string = "String";
number = -7;
boolean = (4==4)
object = {nome: 'Fabiano', idade: 40}
array = [1,"teste",true]

// Operadores
// + - / * **
// == === != !== < <= > >=
// && || !

// Estrutura de Decisão
// Decisão simples:
    if(true){
        
    }
// Decisão composto:
    if(true){
        
    }else{
        
    }
// Caso:
   n = 7;
   switch(n){
        case 1:     break;
        case 2:     break;
        case 7:     break;
        default:    break;
   }

// Estrutura de Repetição

// Pré-testada
/* while(true){

} */
// Pós-testada
/* do{

}while(true); */

// Controlada
for (let i = 0; i < 10; i++) {
    console.log(i);
}
nums = [10,20,30,40,50];
for(let a in nums) {
    console.log(nums[a]);
}

// Objeto: Array

let frutas = ["Banana", "Maça", "Laranja"]

frutas.push("Manga");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.forEach( item => console.log(item) );

frutas.map( item => console.log(item) );

frutas = frutas.filter( item => item.includes("na"));
