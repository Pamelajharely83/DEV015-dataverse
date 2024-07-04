export const filterData = (data, filterBy, value) => {
  if (filterBy === "gender") {
    const filterGender = data.filter((item) => item.facts.gender === value);
    return filterGender;
  }

  if (filterBy === "speciesGroup") {
    const filterSpecies = data.filter(
      (item) => item.facts.speciesGroup === value
    );
    return filterSpecies;
  } 

  if (filterBy === "filmGenre") {
    const filterGenre = data.filter((item) =>
      item.facts.filmGenre.includes(value)
    );
    return filterGenre;
  }
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'name'){ 
    data.sort(function (a, b) {
      if (sortOrder === 'ascendente'){       //Añadir el parametro sortOrder ascendente
        if (a.name < b.name) return -1;      //a aparece antes  
        if (a.name > b.name) return 1;       //b aparece antes     
      }
      if (sortOrder === 'descendente'){      //Añadir el parametro sortOrder descendente; la lógica de invierte
        if (a.name < b.name) return 1;       //a aparece antes  
        if (a.name > b.name) return -1;      //b aparece antes     
      }
      return 0;                              //si son iguales no se cambia el orden 
    });
    return data                              //retornar la data ordenada
  }
};