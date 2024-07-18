export const renderItems = (data) => {
  console.log(data);
  const elementUl = document.createElement("ul");
  elementUl.setAttribute("class", "flex-container");
  data.forEach(function (data) {
    console.log(data);
    const elementLi = document.createElement("li");
    elementLi.setAttribute("itemtype", "item-flex");
    elementLi.setAttribute("itemscope", "item-segundo");
    console.log(elementLi);
    elementUl.appendChild(elementLi);
    console.log(elementUl);
    elementLi.innerHTML = `
    <div id="text-card">
      <div id="text">
        <dl id="textoDeTarjetas" itemscop itemtype = "mascotasDisney">
          <dt id="spanName">Conoce a <span itemprop="name">${data.name}</span>:</dt>
          <dd id="shortDesc" itemprop="shortDescription">${data.shortDescription}</dd>
          <dd><span class="spanFacts">Especie: </span><span itemprop="species">${data.facts.species}</span></dd>
          <dd><span class="spanFacts">Vive en: </span><span itemprop="livesIn">${data.facts.livesIn}</span></dd>
          <dd><span class="spanFacts">Género de la película: </span><span itemprop="filmGenre">${data.facts.filmGenre}</span></dd><br>
          <dd><span class="fun-fact">Dato curioso:</span><span itemprop="curiousFact"> ${data.extraInfo.curiousFact}</span><dd>
        </dl>
      </div>
      <div id="divFondoPersonaje">
        <img class="imgPersonaje" src = ${data.imageUrl} alt = "Aquí estaba ${data.name}">  
      </div>
    </div>
    `;
  });
  return elementUl;
};
