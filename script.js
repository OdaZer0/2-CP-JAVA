const listaAtores = document.getElementById("lista-atores");
const campoBusca = document.getElementById("busca");
const filtroPais = document.getElementById("pais");
const filtroAno = document.getElementById("ano");
const semResultados = document.getElementById("sem-resultados");

const paises = [...new Set(atores.map((ator) => ator.pais))].sort();
const anos = [...new Set(atores.map((ator) => ator.nascimento.slice(0, 4)))].sort();

paises.forEach((pais) => {
  filtroPais.innerHTML += `<option value="${pais}">${pais}</option>`;
});

anos.forEach((ano) => {
  filtroAno.innerHTML += `<option value="${ano}">${ano}</option>`;
});

function filtrarAtores() {
  const busca = campoBusca.value.toLowerCase();
  const atoresFiltrados = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(busca) &&
    (filtroPais.value === "" || ator.pais === filtroPais.value) &&
    (filtroAno.value === "" || ator.nascimento.startsWith(filtroAno.value))
  );

  listaAtores.innerHTML = "";

  atoresFiltrados.forEach((ator) => {
    const data = new Date(ator.nascimento + "T00:00:00").toLocaleDateString("pt-BR");

    listaAtores.innerHTML += `
      <article class="ator">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}">
        <div class="ator-info">
          <h2>${ator.nome}</h2>
          <p>País: ${ator.pais}</p>
          <p>Nascimento: ${data}</p>
        </div>
      </article>
    `;
  });

  semResultados.hidden = atoresFiltrados.length > 0;
}

filtrarAtores();
