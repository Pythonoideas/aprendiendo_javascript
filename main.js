// var edad = 18;
// var  limVotar = 18;

// if (edad>= limVotar) {
//     console.log('Puede votar');
// } else {
//   console.log('No puede votar');
// }

// var edad = 18;
// var  limVotar = 18;
// var ciudad= "cdmx";

// if (edad>= limVotar && ciudad === 'CDMX') {
//     console.log('Puede votar');
// } else {
//   console.log('No puede votar');
// }

// switch(ciudad) {
//     case 'CDMX':
//         console.log('Azcapotzalco, Benito Juarez...');
//     break;
//     case 'Pachuca':
//         console.log('Mineral, Periodistas...');
//     break;
//     case 'Tulancingo':
//         cinsole.log('Centro, la Morena...');
//     default:
//         console.log('No encontre lo que buscas');
//         break;
// }
// for(var i=1; i <=10; i+4) {
//     console.log('i vale ', i);
//     }

//     for(var i=1; i <=10; i=i+3) {
//     console.log('i vale', i);
//     }
// var a = 5
// var b = 10
// var c = 15
// console.log (( 3 + b ) * c / a + 2)     //  41
// console.log ((( a + b * c) / 5) * 2)    //  62
// console.log (b / a + 2 * c)             //  32
// console.log ((a + b + c / c) + a)       //  21
// console.log (((3 + a) / c) + a + b + c) //  30.53
// console.log (a - (b + a) * a / 1)       //  -70


// var edad = 17
// if (edad >= 18) {
//     console.log('SI puedes votar')
// } else {
//     console.log('NO puedes votar')
// }

// var limite = 21
// var edad = 17
// if (edad >= limite) {
//     console.log('SI puedes votar')
// } else {
//     console.log('NO puedes votar')
// }

// utilizar el ${valor} solo funciona con el node.js funcionando (backend)

var limite = 21
var edad = 17
if (edad >= limite) {
    console.log('tu edad es ${edad} SI puedes votar')
} else {
    console.log('tu edad es ${edad} NO puedes votar')
}