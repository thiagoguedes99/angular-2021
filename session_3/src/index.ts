

console.log('Hola Mundo!sljdhgv');

/*
    ===== Código de TypeScript =====
*/

/** case 1 */
interface Person {
  name: string;
  ide: number;
  profission?: string
}

const person: Person = {
  name: 'thiago',
  ide: 20,
}

person.profission = 'dev'

console.table(person)
/** case 1 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** case 2 */
const test = (a: number, b?: number, c: number = 2): number => a * c

console.log(test(10, 0, 10))
/** case 2 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** case 3 */
interface Person2 {
  name: string;
  ide: number;
  showNameAndIde: () => void;
}

const person2: Person2 = {
  name: 'thiago',
  ide: 20,
  showNameAndIde() {
      console.log('the name is', this.name)
  }
}

person2.showNameAndIde()
/** case 3 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** case 4 */
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles 
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
      autor: 'Ed Sheeran',
      anio: 2015
  }
}

// const { volumen, segundo, cancion, detalles } = reproductor;
// const { autor } = detalles;

// const { volumen, segundo, cancion, detalles: { autor } } = reproductor;
// // const { autor } = detalles;

const { volumen, segundo, cancion, detalles: { autor: novoNome } } = reproductor;
// // const { autor } = detalles;


console.log('El volumen actual de: ', volumen );
console.log('El segundo actual de: ', segundo );
console.log('La canción actual de: ', cancion );
console.log('El autor es: ', novoNome );
/** case 4 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** case 5 */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;
// const [head, ...rest] = dbz;
const [head, second, ...rest] = dbz;


// console.log('Personaje 1:', p1 );
// console.log('Personaje 2:', p2 );
console.log('Personaje 1:', head );
console.log('Personaje 3:', p3 );
console.log('Personaje segundo:', second );
console.log('Personaje resto:', rest );
/** case 5 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** case 6 */
export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1',
  precio: 150
}

const tableta: Producto = {
  desc: 'iPad Air',
  precio: 350
}



export function calculaISV( productos: Producto[] ):[number, number] {

  let total = 0;

  productos.forEach(  ({ precio }) => {
      total += precio;
  })

  return [total, total * 0.15];

}


// const articulos = [ telefono, tableta ];

// const [ total, isv ] = calculaISV( articulos );

// console.log('Total:', total );
// console.log('ISV:', isv);
/** case 6 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** case 7 */
 /**
  * diferença entra classe e interface ...... a interface é um classe burro, pois só podemos declarar as propriedades e seus tipos .... já na classe podemos especificar o tipo de acesso das propriedades ( private, public, static ),
  * implementar métodos ( funções ) prontos, definir um construtor para executar no início do instanciamento.
  */
/** case 7 */
