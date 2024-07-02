/*Funcion filterData(data, filterBy, value), recibe tres parámetros: 
  El primer parámetro, data, nos entrega los datos. ¿del dataset?
  El segundo parámetro, filterBy, nos dice con respecto a cuál de los campos de la data se quiere filtrar (speciesGroup)
  El tercer parámetro, value, indica el valor de campo que queremos filtrar.  */

//1) Definir un arreglo, cada objeto con sus propiedades / const functionData = (data)->arreglo de mascotas
//2) Definir una variable que guarde la función del filtrado
//3) Usar método filter() / data.filter
//4) El metodo se aplica sobre el arreglo
//5) Dentro del metodo crear la condicion de filtrado (grupo de especies)
//6) Resultado: obtener un nuevo arreglo (dataFiltrada)
//7) El nuevo arreglo contiene solo a los personajes que cumplen con la condicion
//Console.log, mostrará en la consola la data filtrada 
    
export const filterData = (data, filterBy, value) =>{
  if (filterBy === 'gender'){
    const filterGender = data.filter(item => item.facts.gender === value);
    return filterGender;
  } 
  
  if (filterBy === 'speciesGroup'){
    const filterSpecies = data.filter(item => item.facts.speciesGroup === value);
    return filterSpecies;
  } 

  if (filterBy === 'filmGenre'){
    const filterGenre = data.filter(item => item.facs.filmGenre.includes(value));
    return filterGenre;
  }
};

export const sortData = (data, sortBy, sortOrder) => {
  sortBy === 'name'

};