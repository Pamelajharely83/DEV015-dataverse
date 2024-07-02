import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//console.log(filterData, renderItems(data), data);
import { sortData } from './dataFunctions.js';
 
//Ubicar en dónde se va a posicionar el renderItems en la página: <section id="root">
const elementSection = document.querySelector('section[id="root"]'); //Crear un elementoHTML(<section id="root">) y llamarlo con un selector del DOM
elementSection.appendChild(renderItems(data)); //Situar la lista no ordenada (ul) de view.js dentro de la etiqueta section con la constante renderItems(data)

//Manejo del DOM para detectar la interaccion de la usuaria con los filtros
const filterSpecies = document.getElementById('specie-select');   //Llamar el elemento select con un selector DOM (con su id="root") y guardarlo en una constante
filterSpecies.addEventListener('change',function(event){   //Esuchar el evento change sobre el select del filtro por especie 
  elementSection.innerHTML = '';    //Para eliminar el renderizado. Se asigna una cadena vacía como contenido HTML al elementSection
  const valorSeleccionado = event.target.value;  //Constante para guardar el valor que seleccione al usuario, será el dato asignado a value
  const filteredDataSpecies = filterData(data, 'speciesGroup', valorSeleccionado); //Guardar en una constante las especificaciones de filterData de acuerdo a la propiedad a filtrar
  elementSection.appendChild(renderItems(filteredDataSpecies)); //llamar a renderItems y pasarle entre los parametros el filtro filteredDataSpecies
}); 

const filterGender = document.getElementById('gender-select');   
filterGender.addEventListener('change',function(event){   
  elementSection.innerHTML = '';    
  const valorSeleccionado = event.target.value;  
  const filteredDataGender = filterData(data, 'gender', valorSeleccionado); 
  elementSection.appendChild(renderItems(filteredDataGender)); 
}); 

const filterFilmGenre = document.getElementById('film-select');   
filterFilmGenre.addEventListener('change',function(event){   
  elementSection.innerHTML = '';    
  const valorSeleccionado = event.target.value;  
  const filteredDataFilm = filterData(data, 'filmGenre', valorSeleccionado); 
  elementSection.appendChild(renderItems(filteredDataFilm)); 
}); 


//Manejo del DOM para ordenar por orden alfabético
const ordenarData = document.getElementById('sort-select');
ordenarData.addEventListener('change', function(event){
elementSection.innerHTML = '';
const ordenSeleccionado = event.target.value
  //Crear una condicional para ascendente y descendente
if(){         //si es seleccionada la opcion de forma ascendente que se muestre la data de la A-Z

} else{       ////si es seleccionada la opcion de forma ascendente que se muestre la data de la Z-A

}
});
