import { filterData, sortData, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

//Probar si la función filterData sobre una muestra de datos (fakeData) de toda la data
//describe('filterData', () => {                           //Describe un bloque de pruebas para la función filterData
// it('returns `filterData`', () => {                     //Específica una prueba unitaria; la prueba verifica si la funcion devuelvealgo espcífico
// console.log('fakeData:',fakeData);                   //Mostrar si nos está devolviendo la fakeData, esto se comprueba al pasar el test en la terminal
//expect(filterData(fakeData, 'gender', 'Hembra')).toBe(fakeData.indexOf(2)); //Marcia: buscar un código para que fake data busque la posición
//expect (assertion en Jest), llamando a la funcion filterData con sus tres parámetros
//expect(filterData(fakeData, 'gender', 'Hembra')).toBe(fakeData.item === 2);
//}); //Este codigo no funcionó porque la funcion filterData arroja un arreglo, mientras que los metodos que estamos tratando de utilizar nos da un indice,
//en todo caso deberiamos hacer un cambio en la funcion para que arroje índices y no un arreglo


describe("filterData", () => {
  it("returns `filterData`", () => {
    console.log("fakeData:", fakeData);
    const gender = filterData(fakeData, "gender", "Hembra");
    expect(gender.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const species = filterData(fakeData, "speciesGroup", "Domestico");
    expect(species.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const film = filterData(fakeData, "filmGenre", "Drama");
    expect(film.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const film = filterData(fakeData, "filmGenre", "Musical");
    expect(film.length).toBe(2);
  });
});

describe("sortData", () => {
  it("returns `sortData`", () => {
    const orderAsc = sortData(fakeData, "name", "ascendente");
    expect(orderAsc[0].name).toBe("Figaro");
  });
  it("returns `sortData`", () => {
    const orderDesc = sortData(fakeData, "name", "descendente");
    expect(orderDesc[1].name).toBe("Pascal");
  });
});
//computeStats calcula correctamente el porcentaje de hembras que hay en fakeData
describe('computeStats',()=>{
  it('returns `sortData`',() =>{
    const porcentaje = computeStats(data, value);
    expect(porcentaje)
  });
});
