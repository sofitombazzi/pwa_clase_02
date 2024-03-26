//Creo la clase
class Gato{
    constructor(nombre, peso, color, altura){
        this.nombre=nombre;
        this.peso=peso;
        this.color=color;
        this.altura=altura;
    }
}

//Creo objetos
const michi = new Gato('Michi', '3kg', 'naranja', '30cm');
const bolaDeNieve = new Gato('Bola de Nieve', '5kg', 'blanco', '40cm');

//Cambio valor de una de las propiedades del objeto Bola de Nieve
bolaDeNieve.peso = '4kg';