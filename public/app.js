
const receitas = [
    {
      titulo: "MEXIDINHO",
      categoria: "Comida Brasileira",
      tempo: "35 min",
      imagem: "mexidinho.jpg",
      botaoId: "recipeButtonMexidinho",
      link: "receitamexidinho.html",
    },
    {
      titulo: "MACARRÃO COM CALABRESA NA PANELA DE PRESSÃO",
      categoria: "Massas",
      tempo: "10 min",
      imagem: "macarrao.jpg",
      botaoId: "recipeButtonMacarrao",
      link: "receitamacarrao.html",
    },
    {
      titulo: "SOBREMESAS 3 INGREDIENTES",
      categoria: "Sobremesas",
      tempo: "20 min",
      imagem: "sobremesa.jpg",
      botaoId: "recipeButtonSobremesa",
      link: "receitasobremesa.html",
    },
  ];
  
  function montarReceitas() {
    const container = document.querySelector(".container");
    container.innerHTML = ""; 
    receitas.forEach((receita) => {
      const cardHTML = `
          <div class="row">
            <div class="col-sm-6">
              <article class="card">
                <h1 class="titulo">${receita.titulo}</h1>
                <br />
                <h3>${receita.categoria}</h3>
                <ul>
                  Tempo de Preparo: ${receita.tempo}
                </ul>
                <div>
                  <img src="${receita.imagem}" alt="${receita.titulo}" />
                </div>
                <div class="alinhamento">
                  <button class="button">Favoritar</button>
                  <button class="button" onclick="verReceita('${receita.link}')">Ver receita</button>
                </div>
              </article>
            </div>
          </div>
        `;
  
      container.innerHTML += cardHTML;
    });
  }
  
  function verReceita(link) {
    window.location.href = link;
  }
  
  window.onload = montarReceitas;