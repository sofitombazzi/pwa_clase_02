//Creo la clase
class Gato{
    constructor(nombre, peso, color, altura){
        this.nombre= nombre;
        this.peso= peso;
        this.color= color;
        this.altura= altura;
    }
}

//Creo clase juguete
class Juguete{
    constructor(juguete, precio){
        this.juguete=juguete;
        this.precio=precio;
    }
}

//Creo objetos
const michi = new Gato('Michi', '3kg', 'naranja', '30cm', new Juguete(pelota, 10));
const bolaDeNieve = new Gato('Bola de Nieve', '5kg', 'blanco', '40cm');

//Cambio valor de una de las propiedades del objeto Bola de Nieve
bolaDeNieve.peso = '4kg';

// Asignar un alias a un objeto
const miMichi = michi; //asigne la referenia, NO el valor. No estoy creando un objeto nuevo, sino que es otra forma de llamar a lo mismo.

const precioPelotaDeMiMichi = michi.juguete;

//Imprimo el objeto con DOM en el HTML



const nombreGato = document.querySelector("#gatos .nombre").textContent = bolaDeNieve.nombre;
const pesoGato = document.querySelector("#gatos .peso").textContent = bolaDeNieve.peso;
const altura = document.querySelector("#gatos .altura").textContent = bolaDeNieve.altura;
const color = document.querySelector("#gatos .color").textContent = bolaDeNieve.color;

nombreGato.innerHTML= michi.nombre;
pesoGato.innerHTML= michi.peso;
alturaGato.innerHTML= michi.altura;
colorGato.innerHTML= michi.color;
