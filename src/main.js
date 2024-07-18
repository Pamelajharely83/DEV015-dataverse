import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const elementSection = document.querySelector('section[id="root"]');
elementSection.appendChild(renderItems(data));

let filteredData = data;

const filterSpecies = document.querySelector("select[id=specie-select]");
filterSpecies.addEventListener("change", function (event) {
  elementSection.innerHTML = "";
  const valorSeleccionado = event.target.value;
  filteredData = filterData(data, "speciesGroup", valorSeleccionado);
  elementSection.appendChild(renderItems(filteredData));
});

const filterGender = document.querySelector("select[id=gender-select]");
filterGender.addEventListener("change", function (event) {
  elementSection.innerHTML = "";
  const valorSeleccionado = event.target.value;
  filteredData = filterData(data, "gender", valorSeleccionado);
  elementSection.appendChild(renderItems(filteredData));
});

const filterFilmGenre = document.querySelector("select[id=film-select]");
filterFilmGenre.addEventListener("change", function (event) {
  elementSection.innerHTML = "";
  const valorSeleccionado = event.target.value;
  filteredData = filterData(data, "filmGenre", valorSeleccionado);
  elementSection.appendChild(renderItems(filteredData));
});

const sortDataAsc = document.querySelector("button[id=btnUp]");
sortDataAsc.addEventListener("click", function () {
  elementSection.innerHTML = "";
  const ordenAsc = sortData([...filteredData], "name", "ascendente");
  elementSection.appendChild(renderItems(ordenAsc));
});

const sortDataDesc = document.querySelector("button[id=btnDown]");
sortDataDesc.addEventListener("click", function () {
  elementSection.innerHTML = "";
  const ordenDesc = sortData([...filteredData], "name", "descendente");
  elementSection.appendChild(renderItems(ordenDesc));
});

const filterClear = document.querySelector("button[id=btnClear]");
filterClear.addEventListener("click", function () {
  elementSection.innerHTML = "";
  elementSection.appendChild(renderItems(data));
  filterSpecies.value = "";
  filterGender.value = "";
  filterFilmGenre.value = "";
});

const estadistica = document.querySelector("button[id=btn-stats]");
const mostrarModal = document.querySelector('.modal');               
const closeModal = document.querySelector('.modal-close');   
const hembra = document.querySelector('#genero'); 
const especie = document.querySelector('#especie'); 
const especieNum = document.querySelector('#numEspecie'); 
const filmGenero = document.querySelector('#genreFilm'); 
const numFilmGenero = document.querySelector('#num-genreFilm');  

estadistica.addEventListener("click", function () {
  mostrarModal.classList.add('modal--show');                           
  const hembraCalculo = computeStats(data, "Hembra");
  console.log(`Las hembras representan el ${hembraCalculo.genero}% del total de animalitos`);
  hembra.innerHTML = hembraCalculo.genero + '%';

  const porcentajesEspecies = {
    aves: computeStats(data, 'Aves'),
    acuaticos: computeStats(data, "Animales Acuáticos"),
    domesticos: computeStats(data, "Domestico"),
    especiesPequeñas: computeStats(data, "Pequeñas especies"),
    granja: computeStats(data, "Animales de Granja"),
    salvajes: computeStats(data, "Animales Salvajes"),
  }
  let grupoMayorEspecies = "";
  let porcentajeMayorEspecies = 0;

  for (const group in porcentajesEspecies) {
    if (porcentajesEspecies[group].especies > porcentajeMayorEspecies) {
      porcentajeMayorEspecies = porcentajesEspecies[group].especies;
      grupoMayorEspecies = group;
    }
  }
  console.log(
    `El grupo de especie con mayor porcentaje es: ${grupoMayorEspecies} con ${porcentajeMayorEspecies}%`
  );

  especie.innerHTML = grupoMayorEspecies;
  especieNum.innerHTML = porcentajeMayorEspecies + '%';

  const porcentajePeliculas = {
    comedia: computeStats(data, 'Comedia'),
    infantil: computeStats(data, 'Infantil'),
    fantasia: computeStats(data, 'Fantasía'),
    musical: computeStats(data, 'Musical'),
    drama: computeStats(data, 'Drama'),
    romance: computeStats(data, 'Romance'),
  };

  let grupoMayorPeliculas = "";
  let porcentajeMayorPeliculas = 0;

  for (const pelicula in porcentajePeliculas) {
    if (porcentajePeliculas[pelicula].peliculas > porcentajeMayorPeliculas) {
      porcentajeMayorPeliculas = porcentajePeliculas[pelicula].peliculas;
      grupoMayorPeliculas = pelicula;
    }
  }

  console.log(
    `El genero de pelicula con mas porcentaje es ${grupoMayorPeliculas} con ${porcentajeMayorPeliculas}%`
  );
  filmGenero.innerHTML = grupoMayorPeliculas;
  numFilmGenero.innerHTML = porcentajeMayorPeliculas + '%';
});

closeModal.addEventListener("click", function () {
  mostrarModal.classList.remove('modal--show');
});


const buttonFilter = document.querySelector('#btn-filter');
const filterMenu = document.querySelector('aside .container');
buttonFilter.addEventListener("click", function(){
  if(filterMenu.style.visibility == 'hidden'){
    filterMenu.style.visibility = 'visible';
  } else{
    filterMenu.style.visibility = 'hidden'
  }
});
